const keys = require('./config/keys');
const express = require('express');
const mongoose = require('mongoose');
require('./models/Score');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

require('./routes/leaderboardRoutes.js')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);