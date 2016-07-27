const AnswerGenerator = require('../src/models/answer-generator');

describe('AnswerGenerator', () => {
    it('should return random answer', () => {
        expect(AnswerGenerator.getAnswer().length).toEqual(4);

        expect(AnswerGenerator.getAnswer()).not.toEqual(AnswerGenerator.getAnswer());

        const answers = AnswerGenerator.getAnswer().split('');
        for(const answer of answers){
            expect(answers.indexOf(answer)).toEqual(answers.lastIndexOf(answer));
        }
    });
});

