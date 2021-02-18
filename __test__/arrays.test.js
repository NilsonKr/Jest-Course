import { idols, fruits } from '../src/array.js';

describe('Testing Fruits Array', () => {
    test('If contain certain element', () => {
        expect(fruits()).toContain('Banana')
    });
   
    test('If no contain certain element', () => {
        expect(fruits()).not.toContain('Plantain')
    })

    test('Verify The array length', () => {
        expect(fruits()).toHaveLength(6)
    })

    test('verify equalities between', () => {
        expect(fruits()).toEqual(idols())
    })

    test('Compare Lengths between arrays', () => {
        expect(fruits().length).toEqual(idols().length)
    })
});