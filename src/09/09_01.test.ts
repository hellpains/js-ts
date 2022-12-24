const increaseAge = (user: any) => {
    user.age++
}
type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}


test('big test', () => {
    const user: UserType = {
        name: 'Rus',
        age: 18,
        address: {
            title: 'Gro'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(19)
})


test('array reference test', () => {
    const user = [
        {name: 'Rus', age: 18,},
        {name: 'Rus', age: 18,},
    ]

    let admins = user

    admins.push({name: 'Anonim', age: 10})


    expect(user.length).toBe(3)
})

test('array type test', () => {
    let usersCount = 100;

    let adminsCount = usersCount

    adminsCount += 1


    expect(usersCount).toBe(100)
})


test('', () => {
    const user: UserType = {
        name: 'Rus',
        age: 18,
        address: {
            title: 'Gro'
        }
    }

    let addr = user.address

    let user2: UserType = {
        name: 'Adam',
        age: 20,
        address: addr
    }

    user2.address.title = 'Moscow'


    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Moscow')
})














