import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

const sum = (a: number, b: number) => {
    return a + b
}


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true
}

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
    return student.address.city.title == cityName
}


export const addMoneyToBudget = (governmentBuildings: GovernmentBuildingsType, budget: number) => {
    governmentBuildings.budget += budget
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (governmentBuildings: GovernmentBuildingsType, staffToFile: number) => {
    governmentBuildings.staffCount -= staffToFile
}

export const toHireStaff = (governmentBuildings: GovernmentBuildingsType, staffToHire: number) => {
    governmentBuildings.staffCount += staffToHire
}

export const createMessage = (city:CityType) => {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men`
}