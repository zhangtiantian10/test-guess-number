const PlayGame = require('../src/models/play-game');
const Input = require('../src/models/input');
const AnswerGenerator = require('../src/models/answer-generator');

describe('PlayGame', () => {
    beforeEach(() => {
        spyOn(AnswerGenerator, 'getAnswer')
            .and.returnValues('1234');
        spyOn(console, 'log');

        const palyGame = new PlayGame();
        palyGame.start();
    });

    it('when input is \'1234\' console Congratulations!', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
        spyOn(Input, 'getInput')
            .and.returnValues('1234');

        expect(console.log).toHaveBeenCalledWith('Congratulations!');
    });

    it('when input is \'5678\' console *A*B!', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');

        for(let i = 0 ; i < 6 ; i++) {
            expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
            spyOn(Input, 'getInput')
                .and.returnValues('5678');
            expect(console.log).toHaveBeenCalledWith('0A0B');
        }

        expect(console.log).toHaveBeenCalledWith('Game Over\n');
        expect(console.log).toHaveBeenCalledWith('answer: 1234');
    });

    it('when input is \'1132\' console Cannot input duplicate numbers!', () => {
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6):');
        spyOn(Input, 'getInput')
            .and.returnValues('1132');
        expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!');
    });
});