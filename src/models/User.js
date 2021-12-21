const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  email: { type: String, unique: true }, //이메일
  password: String, //패스워드
  name: String,
  key: String, // 인증 해쉬값

  level: { type: Number, default: 1 },
  _exp: { type: Number, default: 0 },

  maxHP: { type: Number, default: 10 },
  HP: { type: Number, default: 10 },
  inventory: { type: Array, default: [] },
  str: { type: Number, default: 5 },
  _def: { type: Number, default: 5 },
  x: { type: Number, default: 0 },
  y: { type: Number, default: 0 }
});
schema.methods.incrementHP = function (val) {
  const hp = this.HP + val;
  this.HP = Math.min(Math.max(0, hp), this.maxHP);
};

const User = mongoose.model("User", schema);

module.exports = User;
