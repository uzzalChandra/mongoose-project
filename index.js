const app = require("./app");
const config = require("./config/config")

const port = config.app.port || 5002;


app.listen(port, () => {
  console.log(`app is running http://localhost:${port}`);
});
