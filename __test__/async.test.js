import { fetchData } from '../Asynchronus/promises.js';

describe('Testing with async/await ', () => {
    const urlApi = 'https://rickandmortyapi.com/api/character'

    test('Fetching data with async/await', async () => {
        await fetchData(urlApi).then( data =>{
            expect(data).toHaveProperty('info')
        });
    });

    test('Fetching one character', async () => {
        await fetchData(urlApi + '/1').then( data => {              //Another syntax, to do whatever that you want in the moment when get execute the await , you can do it with then
            console.log(data.name)
            expect(data.name).toEqual('Rick Sanchez')
        })
    })

    test('Testing responses with async/await', async () => {
        const apiError = 'http://httpstat.us/500'
        const request = fetchData(apiError)
        await expect(request).rejects.toEqual(Error('Request failed with status code 500'))     //we can use the await in the expect with the function already called
    })

    test('Testing resolve and reject with async/await', async () => {
/*         const sayHi = await Promise.resolve('Hi!')
        expect(sayHi).toEqual('Hi!') */
        await expect(Promise.resolve('Hi!')).resolves.toEqual('Hi!')                //Different ways to handle async/await
        await expect(Promise.reject('Bye!')).rejects.toBe('Bye!')
    })
})