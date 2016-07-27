const AnswerGenerator = require('./answer-generator');
const CompareNumber = require('./compare-number');
const Input = require('./input');

class PlayGame {
    constructor() {
        this.answer = AnswerGenerator.getAnswer();
        this.chances = 6;

        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (input) => {
            if (!this.jude(input)) {
                console.log('Cannot input duplicate numbers!');
                this.ask();
            } else if(input.trim() === this.answer) {
                console.log('Congratulations!');
                process.exit();
            } else {
                console.log(CompareNumber.output(input, this.answer));
                this.chances --;
                if(this.isGameOver()) {
                    console.log('Game Over\n');
                    console.log(`answer: ${this.answer}`);

                    process.exit();
                } else {
                    this.ask();
                }
            }
        });

        // this.ask();

        // while (this.chances != 0) {
        //     let input = Input.getInput();
        //
        //     if (!this.jude(input)) {
        //         console.log('Cannot input duplicate numbers!');
        //         this.ask();
        //     } else if(input.trim() === this.answer) {
        //         console.log('Congratulations!');
        //
        //         return;
        //     } else {
        //         console.log(CompareNumber.output(input, this.answer));
        //         this.chances --;
        //         if(this.isGameOver()) {
        //             console.log('Game Over\n');
        //             console.log(`answer: ${this.answer}`);
        //
        //             return;
        //         } else {
        //             this.ask();
        //         }
        //     }
        // }

    }

    start() {
        console.log('Welcome!\n');
        this.ask();
    }

    ask() {
        console.log(`Please input your number(${this.chances}): `);
    }

    jude(input) {
        const inputs = input.split('');

        for (const input of inputs) {
            if ((inputs.indexOf(input)) != (inputs.lastIndexOf(input))) {
                return false;
            }
        }

        return true;
    }

    isGameOver() {
        return this.chances === 0;
    }
}

module.exports = PlayGame;