const express = require("express");
const app = express();
const homeRoutes = require("./routes/index");
const path = require("path");
var indexRouter = require("./routes/index");

const expressSession = require("express-session");
const passport = require("passport");

const PORT = 3001;

app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "secret",
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((user, done) => {
  done(null, {
    provider: user.provider,
    id: user.provider_id,
  });
});

app.use("/", homeRoutes);

app.listen(PORT);

module.exports = app;
