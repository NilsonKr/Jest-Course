describe('Testing Equals between users', () => {
    const nilson = {
        name: 'Nilson',
        edad: 27
    } 
    const nilson2 = {
        name: 'Nilson2',
        edad: 27
    } 

    test('Test Not Equality ', () => {
        expect(nilson).not.toEqual(nilson2)
    });
    test('Test Equality', () => {
        expect(nilson2).toEqual(nilson)
    });
})