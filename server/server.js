const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require("cors");

app.use(cors())

app.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('quiz');
    const scoresCollection = db.collection('scores');
    const scoresRouter = createRouter(scoresCollection);
    app.use('/api/scores', scoresRouter);
  })
  .catch(console.error);

  app.listen(3000, function() {
    console.log(`Quiz server running on port ${this.address().port}`);
  });
