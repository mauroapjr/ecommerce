const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const bcrypt = require("bcryptjs");

const app = express();
app.use(cors());
app.use(bodyparser.json());

const port = process.env.PORT || 8080;

const generateRandomString = () => {
  return Math.random().toString(36).substring(6);
};

const usersDatabase = {
  user1: {
    id: "user1",
    user: "user1@user.com",
    password: "user1",
  },
  user2: {
    id: "user2",
    user: "user2@user.com",
    password: "user2",
  },
};

app.get("/", (req, res) => {
  res.send({ exampleMessage: "React client connected with Express_Backend" });
});

app.post("/signup", (req, res) => {
  console.log("==============", req.body);
  const user = req.body.user;
  const pwd = req.body.password;

  if (user === "" || pwd === "") {
    return res.status(400).send("User and password are required");
  }
  for (const values of Object.values(usersDatabase)) {
    if (values.user.toLocaleLowerCase() === user.toLocaleLowerCase()) {
      res.status(400).send("User already exist!");
    }
  }
  let hash = bcrypt.hashSync(pwd, 10);
  let id = generateRandomString();
  const newUser = {
    id: id,
    user: user,
    password: hash,
  };

  console.log(`received user ${user} and password ${pwd}`);
  usersDatabase[id] = newUser;
  // req.session.id = id;
  res.status(200).send({ message: "User registered!", user });
  res.redirect("/products");
});

app.get("/signup", (req, res) => {
  res.send();
});

app.post("/login", (req, res) => {
  res.send({});
});

app.get("/login", (req, res) => {
  res.send({});
});

app.post("/logout", (req, res) => {
  res.send({});
});

app.listen(port, () => console.log(`Server listening on PORT ${port}`));
