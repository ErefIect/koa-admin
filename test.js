const axios = require("axios");

axios
  .post("http://127.0.0.1:8000/user/register", {
    user_name: "adsf",
    password: "adf",
    is_admin: 0,
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
