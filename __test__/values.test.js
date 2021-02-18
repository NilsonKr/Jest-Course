import { isNull, isFalse, isTrue, isUndefined} from '../src/values.js';


describe('Testing for truthy values', () => {
    test('Trust' , () =>{
        expect(isTrue()).toBeTruthy
    });
});

describe('Testing for falsy values', () => {
    test('False', () => {
        expect(isFalse()).toBeFalsy()
    });
});

describe('Testing for null values', () => {
    test('Null', () => {
        expect(isNull()).toBeNull
    });
});

describe('Testing for Undifined Values', () => {
    test('Undefined', () => {
        expect(isUndefined()).toBeUndefined
    })
})

describe('Testing for values no Trusthy', () => {
    test('Not Trusthy', () => {
        expect(isFalse()).not.toBeTruthy()
    })
})