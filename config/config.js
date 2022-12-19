require("dotenv").config();



const dev = {
  app: {
    port : process.env.port || 5003
  },
  db: {
    url: process.env.DB_URL || "mongodb://0.0.0.0:27017/test",
  },
};

module.exports = dev;
