// Hello Object
const user = {}
user.name = "John"
user.surname = "Smith"
console.log('user', user)
user.name = "Pete"
console.log('user', user)
delete user.name
console.log('user', user)

// Check for Emptiness
function isEmpty( obj ) {
  for ( let key in obj ) {
    if ( obj.hasOwnProperty( key ) ) {
      return false
    }
  }
  return true
}
let schedule = {}
console.log('isEmpty( schedule ) ', isEmpty( schedule) )
schedule["8:30"] = "Start Learner's Guild"
console.log('isEmpty( schedule ) ', isEmpty( schedule) )

// Constant Objects
const newUser = {
  name: "John",
}
console.log('newUser.name', newUser.name)
newUser.name = "Pete"
console.log('newUser.name', newUser.name)

// Sum Object Properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: "130",
}

let managers = {
  name: "Steve",
  salary: 200000,
}

function sumSalaries( obj ) {
  let sum = 0
  for ( let key in obj ) {
    if ( !isNaN( parseInt( obj[ key ] ) ) && typeof parseInt( obj[ key ] ) === 'number' ) {
      console.log('obj[ key ]', parseInt( obj[ key ] ) )
      sum += parseInt( obj[ key ] )
    }
  }
  return sum
}

console.log('sumSalaries( salaries )', sumSalaries( salaries ))
console.log('sumSalaries( left )', sumSalaries( managers ))

// Multiply Numeric Properties by 2
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
}

function multiplyNumeric( obj ) {
  for ( let key in obj ) {
    if( !isNaN( parseInt( obj[ key ] ) ) && typeof parseInt( obj[ key ] ) === 'number' ) {
      obj[ key ] = obj[ key ] * 2
    }
  }
}

console.log('menu', menu)
multiplyNumeric( menu )
console.log('menu', menu)
