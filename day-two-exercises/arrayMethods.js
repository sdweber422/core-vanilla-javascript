function camelize( str ) {
  let word
  let cssDescriptor = str.split( "-" )

  for ( let i = 1; i < cssDescriptor.length; i++ ) {
    word = cssDescriptor[ i ]
    cssDescriptor[ i ] = word.slice( 0, 1 ).toUpperCase() + word.slice( 1, word.length )
  }

  return cssDescriptor.join("")
}

console.log( 'camelize("background-color")', camelize("background-color") )
  // backgroundColor
console.log( 'camelize("list-style-image")', camelize("list-style-image") )
  // listStyleImage
console.log( 'camelize("-webkit-transition")', camelize("-webkit-transition") )
  // WebkitTransition

// Filter "in place"
function filterRange( arr, min, max ) {
  return arr.filter( function( number ) {
    return number >= min && number <= max
  })
}

let arr = [ 5, 3, 8, 1 ]

console.log( 'filterRange( arr, 1, 4 )', filterRange( arr, 1, 4 ) ) // [ 3,1 ]

// Sort in the reverse order
let arr1 = [5, 2, 1, -10, 8]

arr1.sort( function(a, b) {
  return a > b
    })
      .reverse()

console.log( 'arr1', arr1 ) // [ 8, 5, 2, 1, -10 ]

//Copy and Sort Array
function copySorted( arr ) {
  let copiedArray = arr.slice()
  return copiedArray.sort()
}

let arr2 = ["HTML", "JavaScript", "CSS"]
let sorted = copySorted(arr2)

console.log( 'sorted', sorted ) // [ 'CSS', 'HTML', 'JavaScript' ]
console.log( 'arr2', arr2 ) // [ 'HTML', 'JavaScript', 'CSS' ] (no changes)

// Map to names
let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 28 }
let users = [ john, pete, mary ]

let names = users.map( user => user.name )

console.log( 'names', names ) // [ 'John', 'Pete', 'Mary' ]

// Map to objects
let johnny = { name: "John", surname: "Smith", id: 1 };
let petey = { name: "Pete", surname: "Hunt", id: 2 };
let maryAnn = { name: "Mary", surname: "Key", id: 3 };
let users1 = [ johnny, petey, maryAnn ];

let usersMapped = users1.map( user => {
  let newObject = {}
  newObject.fullName = user[ "name" ] + " " + user[ "surname" ],
  newObject.id = user[ "id" ]
  return newObject
})

// Alternative solution
// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// }))

console.log( 'usersMapped', usersMapped )
  /*
  usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
  ]
  */
console.log( 'usersMapped[0].id', usersMapped[0].id )  // 1
console.log( 'usersMapped[0].fullName', usersMapped[0].fullName )  // John Smith

// Sort objects
function sortByName( arr ) {
  return arr.sort( function( a, b ) { return a.name > b.name } )
}

let jon = { name: "John", age: 25 }
let peet = { name: "Pete", age: 30 }
let marry = { name: "Mary", age: 28 }
let arr3 = [ jon, peet, marry ]

sortByName(arr3)
console.log( 'arr3', arr3 ) // [ 'john', 'mary', 'pete' ]
console.log( 'arr3[1].name', arr3[1].name ) // Mary

// Get average age
function getAverageAge( arr ) {
  return arr.reduce( function( sum, value ) {
    return sum + value.age
  }, 0 )/arr.length
}

let jonny = { name: "John", age: 25 }
let peety = { name: "Pete", age: 30 }
let merry = { name: "Mary", age: 29 }
let arr4 = [ jonny, peety, merry ];

console.log( 'getAverageAge( arr4 )', getAverageAge( arr4 ) )
  // (25+30+29)/3 = 28

// Filter unique array members
function unique(arr) {
  return arr.reduce( function( memo, value ) {
    if ( !memo.includes( value ) ) {
      memo.push( value )
    }
    return memo
  }, [])
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
]

console.log( 'unique( strings )', unique( strings ) )
  // [ 'Hare', 'Krishna', ':-O' ]
