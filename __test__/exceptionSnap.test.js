describe('Handle exceptions on the snapshots', () => {
    test('Always will failed ', () => {
        const data ={
            date: new Date(),
            id: Math.floor(Math.random() * 21)
        }
        expect(data).toMatchSnapshot('Always failed')
    });

    test('Handle Exceptions', () => {
        const data = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 21),
            name: 'Nilson Diaz'
        }

        expect(data).toMatchSnapshot({
            createAt: expect.any(Date),
            id: expect.any(Number),
        })
    })
});
