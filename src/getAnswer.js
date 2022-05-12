const getAnswer = function () {
    const possibleAnswers = [
        "Help I'm Broken"
    ];

    return(possibleAnswers[Math.floor(Math.random()*possibleAnswers.length)]);
};

module.exports = {
    getAnswer
};
