const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

// const personTwo = {
//     age: 32,
//     favoriteFood: 'Watermelon',
// }

// const personThree = {...personOne, ...personTwo}

// console.log(personThree)

function printUser({ name, age, favoriteFood = 'Watermelon' }) {
    console.log(`Name is: ${name}. Age is ${age}. Food is ${favoriteFood}`)
}

printUser(personOne);