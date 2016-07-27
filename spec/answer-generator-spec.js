const AnswerGenerator = require('../src/models/answer-generator');

describe('AnswerGenerator', () => {
    it('should return random answer', () => {
        expect(AnswerGenerator.randomNumber().length).toEqual(4);

        expect(AnswerGenerator.randomNumber()).not.toEqual(AnswerGenerator.randomNumber());

        const answers = AnswerGenerator.randomNumber().split('');
        for(const answer of answers){
            expect(answers.indexOf(answer)).toEqual(answers.lastIndexOf(answer));
        }
    });
});

