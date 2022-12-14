import {mult, splitIntoWords, sum} from "./01";


let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

let sent1 = 'Hello my friends!'
let sent2 = 'JS - the best programming language.'

test('sum should be correct', () => {


    // action
    const result = sum(a, b)
    a = 100
    const result2 = sum(a, c)


    expect(result).toBe(3)
    expect(result2).toBe(103)
})

test('multiply should be correct', () => {

    //data


    // action
    const result = mult(a, b)
    const result2 = mult(b, c)


    expect(result).toBe(2)
    expect(result2).toBe(6)
})

test('split into was should be correct', () => {



    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')


    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('programming')
    expect(result2[4]).toBe('language')

})


