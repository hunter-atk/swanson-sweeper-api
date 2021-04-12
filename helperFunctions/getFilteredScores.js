const mongoose = require('mongoose');
const getDateLimit = require('./getDateLimit');
const Score = mongoose.model('scores');

module.exports = async (limit, gameDifficulty) => {
    const filter = (limit === 'allTime' ? {
        gameDifficulty
    } : {
        gameDifficulty, gameCompletionDate: {
            $lt: new Date(),
            $gte: limit ? getDateLimit(limit) : -Infinity
        }
    })
   
    return await Score.find(filter).sort({ gameCompletionTime: 'ascending', gameCompletionDate: 'ascending' }).limit(15);
};