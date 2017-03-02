// Is Array Copied?
let fruits = [ "Apples", "Pear", "Orange" ]
let shoppingCart = fruits
shoppingCart.push( "Banana" )

console.log( 'fruits.length', fruits.length )

// Array Operations
let styles = [ "Jazz", "Blues" ]
styles.push( "Rock-n-Roll" )

console.log( 'styles', styles )

styles[ Math.floor( styles.length/2 ) ] = "Classics"

console.log( 'styles', styles )

let firstValue = styles.shift()

console.log( 'firstValue', firstValue )

styles.unshift( "Rap", "Reggae" )

console.log( 'styles', styles )

// Calling in an Array Context
let arr = [ "a", "b" ]

arr.push( function() {
  console.log( 'this', this )
})

arr[2]()
console.log( 'arr[2]', arr[2] )

// Sum Input Numbers
const readline = require( 'readline' )
let rl = readline.createInterface( {
  input: process.stdin,
  output: process.stdout,
  prompt: "Enter a number: ",
})

function sumInput( number=0 ) {
  let valueArray = []

  rl.prompt()
  rl.on( 'line', function ( answer ) {
    if ( isNaN( parseInt( answer ) ) ) {
      if ( valueArray.length === 0 ) {
        return 0
      }
      let sum = valueArray.reduce( ( a, b ) => {
        return parseInt(a) + parseInt(b)
      })
      console.log( 'Sum:', sum )
      rl.close()
    }
    else {
      valueArray.push( answer )
      rl.prompt()
    }
  })
}

// A Maximal Subarray
function getMaxSubSum( arr ) {
  let maximumSum = 0
  for ( let i = 0; i < arr.length; i++ ) {
    let tempSum = 0
    for ( let j = i; j < arr.length; j++ ) {
      tempSum += arr[ j ]
      maximumSum = Math.max( maximumSum, tempSum )
    }
  }
  return maximumSum
}

console.log( 'getMaxSubSum([-1, 2, 3, -9])', getMaxSubSum([-1, 2, 3, -9]) )
console.log( 'getMaxSubSum([2, -1, 2, 3, -9])', getMaxSubSum([2, -1, 2, 3, -9]) )
console.log( 'getMaxSubSum([-1, 2, 3, -9, 11])', getMaxSubSum([-1, 2, 3, -9, 11]) )
console.log( 'getMaxSubSum([-2, -1, 1, 2])', getMaxSubSum([-2, -1, 1, 2]) )
console.log( 'getMaxSubSum([100, -9, 2, -3, 5])', getMaxSubSum([100, -9, 2, -3, 5]) )
console.log( 'getMaxSubSum([1, 2, 3])', getMaxSubSum([1, 2, 3]) )
console.log( 'getMaxSubSum([-1, -2, -3])', getMaxSubSum([-1, -2, -3]) )

sumInput()
