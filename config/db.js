const { Sequelize } = require('sequelize');

const createDB = new Sequelize("parivahak", "user", "pass", {
  dialect: "sqlite",
  host: "./config/db.sqlite",
});

module.exports = createDB;
