import {CityType, GovernmentBuildingsType} from "../02/02_02";


export const demolishHousesOnTheStreet = (city: CityType, title: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== title)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: GovernmentBuildingsType[], count: number) => {
    return buildings.filter(building => building.staffCount > count)
}