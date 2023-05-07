const { createUser } = require("../service/user.service");
const parse = require("co-body");

class userController {
  async register(ctx, next) {
    console.log(ctx.request.body);
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
    const data = await parse(ctx);

    ctx.body = "login";
  }
  async test(ctx, next) {
    ctx.body = "asdf";
  }
}

module.exports = new userController();
