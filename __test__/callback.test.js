import { saySomething } from '../Asynchronus/callback.js';


/* describe('Testing Callbacks', () => {
    const myCallback = (msg) => {
        console.log(msg)
        expect(msg).toEqual('I love Mina')              Another way
    }

    test('test saySomething', () => {
        return saySomething(myCallback)
    })
})
 */

describe('Testing Callbacks', () => {
    test('sayHello callback test', done => {        //for indicate to jest that the callback has finished
        function myCallback(data){
            expect(typeof data).toBe('string')
            done();                           //Here's the indicator
        }
        sayHello(myCallback);
    })
})












