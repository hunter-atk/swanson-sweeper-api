module.exports = (timeframe) => {
    if (timeframe = 'minusDay') {
        return new Date(new Date().setDate(new Date().getDate() - 1));
    } else if (timeframe = 'minusWeek') {
        return new Date(new Date().setDate(new Date().getDate() - 7));
    } else if (timeframe = 'minusMonth') {
        return new Date(new Date().setDate(new Date().getMonth() - 1));
    } else {
        return -Infinity;
    };
};