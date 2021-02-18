import { sum } from '../src/math.js';

describe('Testing With Number Operations', () => {
    test('Test Greater than', () => {
        expect(sum(2,4)).toBeGreaterThan(5)
    });
    test('Test Greater or equals', () => {
        expect(sum(2,4)).toBeGreaterThanOrEqual(6)
    });
    test('Test Less', () => {
        expect(sum(2,4)).toBeLessThan(7)
    });
    test('Test less or equals', () => {
        expect(sum(2,4)).toBeLessThanOrEqual(6)
    });
    test('Test float numbers', () => {
        expect(sum(0.48,0.48)).toBeCloseTo(0.96)
    })

})