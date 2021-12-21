const { itemManager } = require("../datas/Manager");
const pickItem = (_event, player) => {
  let item = itemManager.items.filter((obj) => {
    return obj.id === _event.item;
  })[0];
  return { description: `${item.name}을 획득했다!` };
};

module.exports = { pickItem };
