const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./compare-number');

class Guess {
    static guess(input) {
        const answer = AnswerGenerator.getAnswer();
        return CompareNumber.output(input, answer);
    }
}

module.exports = Guess;
