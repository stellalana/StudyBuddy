const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/studyBuddy"
);

const questionSeed = [
  {
    question: "Who's buried in Grant's Tomb? ",
    answer: "Grant",
    correct: false,
    active: true,
    createDate: new Date(Date.now())
  },
  {
    question: "Who framed Roger Rabbit? ",
    answer: "Judge Doom",
    correct: false,
    active: true,
    createDate: new Date(Date.now())
  },
  {
    question: "Did Tom Brady really cheat? ",
    answer: "Yes",
    correct: false,
    active: true,
    createDate: new Date(Date.now())
  }
  
];

const userSeed = [
  {
    Username: "JimmyG",
    password: "9ersAllTheWay",
    firstName: "Jimmy",
    lastName: "Garoppalo",
    saved: true,
    createDate: new Date(Date.now())
  },
  {
    Username: "SamIam",
    password: "Nyjets#superbowl",
    firstName: "Sam",
    lastName: "Darnold",
    saved: true,
    createDate: new Date(Date.now())
  },
  {
    Username: "TdMaker",
    password: "BakerTdMaker",
    firstName: "Baker",
    lastName: "Mayfield",
    saved: true,
    createDate: new Date(Date.now())
  }
  
];

db.Questions
  .remove({})
  .then(() => db.Questions.collection.insertMany(questionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.UserInfo
  .remove({})
  .then(() => db.UserInfo.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });