type LocalCityType ={
    title: string
    countryTitle: string
}
type AddressType={
    streetTitle: string
    city: LocalCityType
}
type TechnologiesType= {
    id:number
    title:string
}


export type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType[]
}


export const student:StudentType = {
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

console.log()