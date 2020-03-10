use quiz;
db.dropDatabase();

db.scores.insertMany([
  {
    name: "John Harper",
    score: 6,
    difficulty: "medium"
  }
])
