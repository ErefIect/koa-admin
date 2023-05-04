const Router = require("koa-router");
const { register, login } = require("../controller/user.controller");

const router = new Router({ prefix: "/user" });

// POST  /register
router.post("/register", register);

//POST /login
router.post("/login", login);

module.exports = router;
