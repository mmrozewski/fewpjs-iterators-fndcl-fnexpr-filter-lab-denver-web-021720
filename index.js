// Code your solution here

function findMatching(array, string) {

    return array.filter(driver => {return driver.toUpperCase() === string.toUpperCase()})
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby', "bobby"]

function fuzzyMatch(array, string) {
    return array.filter(driver => {return driver.startsWith(string)})
}

function matchName(array, string) {
    return array.filter(driver => {return driver.name === string})
}
