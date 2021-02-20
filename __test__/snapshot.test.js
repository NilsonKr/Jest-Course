import { snapshot } from '../Asynchronus/snapshot.js';
import { fetchData } from '../Asynchronus/promises.js';
import data from '../data.json'


const urlApi = 'https://rickandmortyapi.com/api/character/1'

describe('Time to snapshots', () => {
    test('FirstCharacter', async () => {
        await fetchData(urlApi).then( char => {
            expect(snapshot(char)).toMatchSnapshot('Rick Sanchez Info')
        })
    })

    test('SecondCharacter', () => {
        expect(snapshot(data)).toMatchSnapshot('Morty Smith Info')
    })
})