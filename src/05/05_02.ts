import {GovernmentBuildingsType, HouseType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (governmentBuildings: GovernmentBuildingsType[]) => {
    return governmentBuildings.map(building => building.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map(house => house.address.street.title)
}

export const createMessages = (houses: HouseType[]) => {
    return houses.map(house => `Hello guys from ${house.address.street.title}`)

}