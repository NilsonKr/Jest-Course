const myText = 'I love Twice'

describe('Testing stuff in string', () => {
    test('If contain a word/s', () => {
        expect(myText).toMatch('love Twice')
    });

    test('If dont contain a word/s', () => {
        expect(myText).not.toMatch(/I hate Twice/)
    });

    test('Check the length', () => {
        expect(myText).toHaveLength(12)
    })
});