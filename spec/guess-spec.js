const Guess = require('../src/models/guess');
const AnswerGenerator = require('../src/models/answer-generator');

describe('Guess', () => {
   it('should return *A*B', () => {
       spyOn(AnswerGenerator, 'getAnswer')
           .and.returnValues('1234');

       expect(Guess.guess('1234')).toEqual('4A0B');
   });
});
