const Koa = require("koa");
const { koaBody } = require("koa-body");

const userRouter = require("../routes/user.router");

const app = new Koa();

app.use(userRouter.routes());
app.use(koaBody());
app.use((ctx) => {
  ctx.body = `request body: ${JSON.stringify(ctx.request.body)}`;
});

module.exports = app;
