//Something happen after the tests

afterEach(() => console.log('Has finished a test!'))
afterAll(() => console.log('Has been done all the tests!!!!'))


//Something happen before the tests

beforeAll(() => console.log('has started all the tests!!!!!'))
beforeEach(() => console.log('has started a test!'))


describe('Validating the value', () => {
    test('its truthy', () => {
        expect(true).toBeTruthy()
    });
    
    test('its falsy', () => {
        expect(false).toBeFalsy()
    })
});