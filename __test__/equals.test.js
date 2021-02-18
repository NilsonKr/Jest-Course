describe('Testing Equals between users', () => {
    const nilson = {
        name: 'Nilson',
        edad: 27
    } 
    const nilson2 = {
        name: 'Nilson',
        edad: 27
    }
    const diferentNilson = {
        name: 'Nilson2',
        edad: 27  
    } 

    test('Test Not Equality ', () => {
        expect(nilson).not.toEqual(diferentNilson)
    });
    test('Test Equality', () => {
        expect(nilson2).toEqual(nilson2)
    });
})