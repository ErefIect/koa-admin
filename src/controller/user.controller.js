const { createUser } = require("../service/user.service");

class userController {
  async register(ctx, next) {
    console.log("register", ctx);
    const { user_name, password } = ctx.request.body;

    const res = await createUser(user_name, password);
    console.log(res);

    ctx.body = {
      code: 0,
      message: "用户注册成功",
      result: {
        id: res.id,
        user_name: res.user_name,
      },
    };
  }
  async login(ctx, next) {
    ctx.body = "login";
  }
}

module.exports = new userController();
