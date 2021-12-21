const { monsterManager } = require("../datas/Manager");
const battle = (_event, player) => {
  const event = {}
  let monster = monsterManager.monsters.filter(obj => {
    return obj.id === _event.monster;
  })[0]
  let monsterHP = parseFloat(monster.hp);
  console.log(monsterHP)
  const playerInitHP = player.HP;
  let playerHP = player.HP;
  console.log(playerHP)
  console.log('몬스터:', monster)
  event.description = `${monster.name}와 마주쳐 싸움을 벌였다.`;

  // 전투 공식에 따라 전투 하기. 10턴을 했거나 체력이 20% 이하이면 전투 스톱.
  let cnt = 0;
  while (playerHP > 0 && monsterHP > 0) {
    if ((playerInitHP >= 0.2 * player.maxHP) && (playerHP <= 0.2 * player.maxHP)) {
      event.result = "체력이 20% 이하로 떨어졌습니다! 하지만 전투는 아직 끝나지 않았습니다.";
      event.pauseBattle = true;
      break
    }
    if (cnt > 10) {
      event.result = "10턴을 전투를 했지만 전투가 끝나지 않았습니다!";
      event.pauseBattle = true;
      break
    }
    monsterHP -= player.str/monster.def;
    // console.log('monsterHP', monsterHP)
    playerHP -= (monster.str/player._def);
    // console.log('playerHP', playerHP)
    cnt++;
    console.log('cnt is', cnt)
  }
  // console.log('플레이어HP:', playerHP);
  player.incrementHP(playerHP - player.HP);

  return event
}

module.exports = {battle}