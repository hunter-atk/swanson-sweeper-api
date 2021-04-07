const mongoose = require('mongoose');
const getDateLimit = require('./getDateLimit');
const Score = mongoose.model('scores');

module.exports = async (limit, gameDifficulty) => {
    return await Score.find({
        gameDifficulty, gameCompletionDate: {
            $lt: new Date(),
            $gte: getDateLimit(limit)
        }
    }).sort({ gameCompletionTime: 'ascending', gameCompletionDate: 'ascending' }).limit(10);
};