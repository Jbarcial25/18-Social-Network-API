//Set up require
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

//Set up port
const PORT = process.env.PORT || 3001;

//lunch middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});