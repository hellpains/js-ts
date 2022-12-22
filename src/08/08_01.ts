// export const usersArray = ['Rus', 'Arbi', 'Adam', 'Tamik']

export const usersObj = {
    '0': 'Rus',
    '1': 'Arbi',
    '2': 'Adam',
    '3': 'Tamik',
}

export type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users: UsersType = {
    '101': {id: 101, name: 'Rus'},
    '1212': {id: 1212, name: 'Arbi'},
    '323312': {id: 323312, name: 'Adam'},
    '1': {id: 1, name: 'Tamik'},
}


let user = {id: 100500, name: 'Igor'}

users[user.id.toString()] = user


export const usersArray = [
    {id: 101, name: 'Rus'},
    {id: 1212, name: 'Arbi'},
    {id: 323312, name: 'Adam'},
    {id: 1, name: 'Tamik'}
]