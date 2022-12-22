import {usersObj, UsersType} from "./08_01";

let users: UsersType;

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Rus'},
        '1212': {id: 1212, name: 'Arbi'},
        '323312': {id: 323312, name: 'Adam'},
        '1': {id: 1, name: 'Tamik'},
    }
})

test('should update corresponding user', () => {

    users['1'].name = 'Rusik'


    expect(users[1]).toEqual({id: 1, name: 'Rusik'})
})



test('should delete corresponding user', () => {

    delete users['1']


    expect(users['1']).toBeUndefined()
})