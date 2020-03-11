use quiz;
db.dropDatabase();

db.scores.insertMany([
  {
    Name: "John Harper",
    Score: 6,
    Difficulty: "medium",
    Category: "Animals"
  }
])
