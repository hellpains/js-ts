import {ManType} from "./destruncting";

let props: ManType;


beforeEach(() => {
    props = {
        name: 'Rustam',
        age: 18,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Komsomol'
            }
        }
    }
})

test("1", () => {


    const {age, lessons} = props
    const {title} = props.address.street


    expect(age).toBe(18)
    expect(lessons.length).toBe(3)

    expect(title).toBe("Komsomol")
})


test("2", () => {

    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    const [, , ls3] = props.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    // expect(ls1.title).toBe('1')
    expect(ls3.title).toBe('3')

})