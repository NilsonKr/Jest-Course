import { sum , mult, rest , div} from '../src/math.js'

 describe('Test for maths calcs', () => {
     test('Test Sum', () =>{
         expect(sum(1,5)).toBe(6)
     })
     test('Test for multiplicacion', () =>{
         expect(mult(3,9)).toBe(27)
     })
     test('Test for rest', () => {
         expect(rest(20,6)).toBe(14)
     })
     test('Test for division', () => {
         expect(div(20,2)).toBe(10)
     })
})