const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const crypto = require("crypto");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { encryptPassword, setAuth } = require("./utils");
const { constantManager, mapManager } = require("./datas/Manager");
const fs = require("fs");
const { User, Player } = require("./models");
const { battle } = require("./utils/battle");
const { pickItem } = require("./utils/pickItem");
const { itemManager } = require("./datas/Manager");
dotenv.config("./src");

//몽고 DB 연결
// const mongoURL = process.env.MONGODB_URL
mongoose
  .connect(
    "mongodb+srv://new-user0:asdfasdf@cluster0.jw1fm.mongodb.net/fp3?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("MongoDB connected!!!");
  })
  .catch((err) => {
    console.log(
      "MongoDB connection failed, plz check creation .env or check Mongdb_url in .env file"
    );
  });

//json처리
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//뷰 엔진 (api 로그인,회원가입 기능 테스트 완료후 뷰 연결)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "public")));

//플레이어 선택, 생성 화면
app.get("/", setAuth, async (req, res) => {
  var email = req.cookies.email;
  if (req.user.name) {
    res.redirect("/game");
  } else {
    res.render("home", { data: { user: req.user } });
  }
});

app.get("/game", setAuth, (req, res) => {
  res.render("game", { data: { user: req.user } });
});

//회원가입
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const encryptedPassword = encryptPassword(password);
  let user = null;
  try {
    user = new User({ email: email, password: encryptedPassword });
    await user.save();
  } catch (err) {
    return res.status(400).json({ error: "email is duplicated" });
  }
  res.status(200).json({ _id: user._id });
});

//로그인 페이지
app.get("/login", (req, res) => {
  res.render("login");
});

//로그인 로직
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const encryptedPassword = encryptPassword(password);
  const user = await User.findOne({ email, password: encryptedPassword });

  if (user === null)
    return res.status(403).json({ error: "email or password is invaild" });

  user.key = encryptPassword(crypto.randomBytes(20));
  let auth_key = `Bearer ${user.key}`;
  res.cookie("authorization", auth_key, {
    maxAge: 1000 * 60 * 30
  });
  res.cookie("email", email, {
    maxAge: 1000 * 60 * 30
  });
  await user.save();
  res.send({ data: auth_key });
});

//플레이어 이름 등록
app.post("/player/create", setAuth, async (req, res) => {
  const user = req.user;
  var name = req.body.name;
  var email = req.user.email;
  try {
    if (user.name) {
      msg = "You already have a name";
    } else if (await User.exists({ name })) {
      msg = "Player is already exists";
    } else {
      user.name = name;
      await user.save();
      msg = "Success";
    }
    res.status(200).json({ msg }); //임시 결과값
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "DB_ERROR" });
  }
});

//플레이어 상태 확인
app.get("/player/:name", setAuth, async (req, res) => {
  try {
    var name = req.params.name;
    var player = await Player.findOne({ name });
    var level = player.level;
    var exp = player.exp;
    var maxHP = player.maxHP;
    var HP = player.HP;
    var inventory = player.inventory;
    var str = player.str;
    var def = player.def;
    var x = player.x;
    var y = player.y;
    res.status(200).json({ level, exp, maxHP, HP, inventory, str, def, x, y });
  } catch (error) {
    res.status(400).json({ error: "DB_ERROR" });
  }
});

//맵 화면
app.get("/player/map/:name", setAuth, async (req, res) => {
  var name = req.params.name;
  var player = await Player.findOne({ name });
  res.render("game", { data: { player } });
});

app.post("/action", setAuth, async (req, res) => {
  const { action } = req.body;
  console.log(action);
  const player = req.user;
  let event = {};
  let field = null;
  let actions = [];
  if (action === "query") {
    field = mapManager.getField(player.x, player.y);
  } else if (action === "move") {
    const direction = parseInt(req.body.direction, 0); // 0 북. 1 동 . 2 남. 3 서.
    let x = player.x;
    let y = player.y;
    if (direction === 0) {
      y -= 1;
    } else if (direction === 1) {
      x += 1;
    } else if (direction === 2) {
      y += 1;
    } else if (direction === 3) {
      x -= 1;
    } else {
      res.sendStatus(400);
    }
    field = mapManager.getField(x, y);
    if (!field) res.sendStatus(400);
    player.x = x;
    player.y = y;

    console.log("---------event---------");
    const events = field.events;
    // console.log(events)
    const actions = [];
    if (events.length > 0) {
      // TODO [DONE]: 확률별로 이벤트 발생하도록 변경
      let i;
      let random = Math.ceil(Math.random() * 100);
      // console.log(random)
      for (i = 0; i < events.length; i++) {
        random = random - events[i].percent;
        if (random <= 0) {
          break;
        }
      }
      const _event = events[i];
      console.log("Randomly chosen event:", _event);
      if (_event.type === "battle") {
        // TODO : 이벤트 별로 events.json 에서 불러와 이벤트 처리

        // 둘 중 하나 죽을때가지 싸우고, event는 description이 적절히 리턴됨.
        event = battle(_event, player);
        if (player.HP <= 0) {
          // 사망 시스템
          event.result = "You die.";
          player.x = 0;
          player.y = 0;
          player.HP = player.maxHP;
          player._exp = 0;
        } else {
          // 플레이어가 몬스터 죽임. 경험치 1 획득
          player._exp += 1;
          // 레벨 시스템
          if (player._exp >= player.level * 5 + 5) {
            event.result = "레벨업!";
            player._exp -= player.level * 5 + 5;
            player.level += 1;
            player.maxHP += 1;
            player.HP = player.maxHP;
            player.str += 1;
            player._def += 1;
          }
        }
      } else if (_event.type === "item") {
        event = pickItem(_event, player);
        let item = itemManager.items.filter((obj) => {
          return obj.id === _event.item;
        })[0];
        player.inventory.push(item.name); //아이템 획득시 인벤토리에 추가
        if (item.str) {
          player.str += item.str;  //아이템 획득시 능력치 향상
        } else if (item.def) {
          player._def += item.def;
        }
      }
    } else {
      event.result = ""
    }

    await player.save();
    }

  const dirArray = ["북", "동", "남", "서"];

  field.canGo.forEach((direction, i) => {
    if (direction === 1) {
      actions.push({
        url: "/action",
        text: dirArray[i],
        params: { direction: i, action: "move" }
      });
    }
  });

  return res.send({ player, field, event, actions });
  
});

//맵이동 (아이템획득시 스탯 업데이트, 도망가기)

//전투 or 도망

//서버 포트 연결
app.listen(port, () => {
  console.log(`listening at port: ${port}...`);
});
