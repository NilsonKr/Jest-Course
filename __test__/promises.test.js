import { fetchData, testPromise } from '../Asynchronus/promises.js';

describe('Testing asynchronus promises', () => {
    const urlApi =  'https://rickandmortyapi.com/api/character'
    
    test('testing fetched data', done => {
        fetchData(urlApi).then( data => {
            expect(data).toHaveProperty('info');
            done();
        });
    });

    test('Testing the data results', done => {
        fetchData(urlApi).then( data => {
            expect(data.results.length).toBeGreaterThan(0)
            done();
        });
    });

    test('Testing resolves promsise', () => {
        return expect(testPromise(true)).resolves.toBe('Do it!')        //Return when you dont use done(); to make works well the test
    })

    test('Testing rejects promise', () => {
        return expect(testPromise(false)).rejects.toThrowError('Error')
    })
});
