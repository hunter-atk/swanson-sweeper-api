const mongoose = require('mongoose');
const { Schema } = mongoose;

const scoreSchema = new Schema({
    playerName: String,
    gameCompletionDate: Date,
    gameCompletionTime: Number,
    gameDifficulty: String
});

mongoose.model('scores', scoreSchema);