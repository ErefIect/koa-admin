const { APP_PORT } = require("./config/config.default");

const app = require("./app");

app.listen(APP_PORT, () => {
  console.log(`running on server http://127.0.0.1:${APP_PORT}`);
});