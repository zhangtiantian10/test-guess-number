const CompareNumber = require('../src/models/compare-number');

describe('CompareNumber', () => {
    it('should return *A*B', () => {
        const results = [
            {
                input: '1234',
                answer: '1234',
                output: '4A0B'
            },
            {
                input: '1234',
                answer: '5678',
                output: '0A0B'
            },
            {
                input: '1234',
                answer:'1243',
                output: '2A2B'
            }
        ];

        results.forEach((result) => {
            expect(CompareNumber.output(result.input, result.answer)).toEqual(result.output);
        });
    });
});