const cors = require('cors')
const mongoose = require('mongoose');
const Score = mongoose.model('scores');
const getFilteredScores = require('../helperFunctions/getFilteredScores');

module.exports = (app) => {

    app.use(cors());

    app.get('/api/scores/:difficulty', async (req, res) => {
        try {
            const scoresToday = await getFilteredScores('minusDay', req.params.difficulty);
            const scoresThisWeek = await getFilteredScores('minusWeek', req.params.difficulty);
            const scoresThisMonth = await getFilteredScores('minusMonth', req.params.difficulty);
            const scoresAllTime = await getFilteredScores('allTime', req.params.difficulty);

            res.send({ scoresToday, scoresThisWeek, scoresThisMonth, scoresAllTime });
        } catch (err) {
            res.status(500).send(err);
        }
    });

    app.post('/api/scores', async (req, res) => {
        const { playerName, gameCompletionTime, gameDifficulty } = req.body;
        const gameCompletionDate = new Date();
        const score = new Score({
            playerName,
            gameCompletionDate,
            gameCompletionTime,
            gameDifficulty
        })

        try {
            const response = await score.save();
            res.send(response);
        } catch (err) {
            res.status(422).send(err);
        }
    });

}