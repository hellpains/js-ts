import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        name: 'Rus',
        age: 18,
        isActive: false,
        address: {
            streetTitle: 'Komsomol',
            city: {
                title: 'Grozny',
                countryTitle: 'Russia'
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML",
            },
            {
                id: 2,
                title: "CSS",
            },
            {
                id: 3,
                title: "React",
            },
        ]
    }
})
test.skip('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, 'JS')

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
});


test.skip('student should be made active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
});

test.skip('student lives in city', () => {
    let result1 = doesStudentLiveIn(student, "Moscow")
    let result2 =doesStudentLiveIn(student, "Grozny")

    expect(result1).toBe(false)
    expect(result2).toBe(true)
});













