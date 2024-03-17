const express = require("express");
const app = express();
const homeRoutes = require("./routes/index");
const path = require("path");
// const PORT = 3000;

app.set("views", "./views");
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use("/", homeRoutes);
// app.listen(PORT);


module.exports = app;