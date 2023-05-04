const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

// 创建模型
const User = seq.define("User", {
  user_name: {
    type: DataTypes.STRING, // VARCHAR(128)
    allowNull: false,
    unique: true,
    comment: "用户名, 唯一",
  },
  password: {
    type: DataTypes.CHAR(64),
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: "是否为管理员",
  },
});

// User.sync({ alter: true });
module.exports = User;
