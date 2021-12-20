const { monsterManager } = require("../datas/Manager");
const battle = (_event, player) => {
  let monster = monsterManager.monsters.filter(obj => {
    return obj.id === _event.monster;
  })[0]
  let monsterHP = monster.hp;
  let playerHP = player.HP;
  console.log('몬스터:', monster)
  while (playerHP > 0 && monsterHP > 0) {
    monsterHP -= (player.str/monster.def);
    playerHP -= (monster.str/player.def);
  }
  console.log('플레이어HP:', playerHP)
  player.incrementHP(playerHP - player.HP);
  return { description: `${monster.name}와 마주쳐 싸움을 벌였다.` };
}

module.exports = {battle} 