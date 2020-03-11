use quiz;
db.dropDatabase();

db.scores.insertMany([
  {
    Name: "John Harper",
    Score: 6,
    Difficulty: "medium",
    Category: "Animals"
  }
  {
    Name: "Zsolt",
    Score: 2,
    Difficulty: "easy",
    Category: "General Knowledge"
  }
  {
    Name: "Emily",
    Score: 0,
    Difficulty: "easy",
    Category: "Celebrities"
  }
  {
    Name: "Eugene",
    Score: 1,
    Difficulty: "hard",
    Category: "Celebrities"
  }
  {
    Name: "Morag",
    Score: 6,
    Difficulty: "hard",
    Category: "Animals"
  }
  {
    Name: "John Harper",
    Score: 6,
    Difficulty: "medium",
    Category: "Animals"
  }
  {
    Name: "Everyone",
    Score: 8,
    Difficulty: "medium",
    Category: "Entertainment: Music"
  }
  {
    Name: "John Harper",
    Score: 6,
    Difficulty: "medium",
    Category: "Entertainment: Music"
  }
  {
    Name: "LittlePrincess",
    Score: 6,
    Difficulty: "medium",
    Category: "Celebrities"
  }
  {
    Name: "Sky",
    Score: 9,
    Difficulty: "hard",
    Category: "Animals"
  }
])
