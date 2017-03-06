// For each of the following challenges, make sure to solve the challenge on edabit AND include your solution code here for review

// 1. Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.
// https://edabit.com/challenge/xXJLZry3vYd4erPct

function countPosSumNeg(nums) {
  let resultArray = []
  let count = 0
  let what

  for ( num in nums ) {
    if ( nums[ num ] < 0 ) {
      resultArray.push( nums[ num ] )
    }
      else {
      count++
    }
  }

  if ( resultArray.length > 0 ) {
    resultArray = [resultArray.reduce( ( value1, value2 ) => value1 + value2, 0 )]
    resultArray.unshift( count )
  }

  return resultArray
}

console.log( 'countPosSumNeg( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] )', countPosSumNeg( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] ) )

// 2. Create a function that accepts an array and returns the last item in the array. The array can contain any of JavaScript's five primitive data types.
// https://edabit.com/challenge/7JBTN4TbaxJQMdX9W

function getLastItem(arr) {
  return arr.pop()
}

// 3. Create a function that takes two arrays and combines them by alternatingly taking elements from each array in turn.
// https://edabit.com/challenge/kaNYPQQWHSX4zGNhj

function mergeArrays(a, b) {
    return a.reduce( ( memo, value, index ) => {
      if( index < a.length ) {
        memo.push( value )
      }
      if ( index < b.length ) {
        memo.push( b[ index ] )
      }
      if ( index === a.length - 1 ) {
        b.slice( index + 1, b.length ).forEach( num =>  memo.push(num) )
      }
      return memo
    }, [])
}

// 4. Create a function that takes an array of numbers and remove the smallest value. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array, return an empty array.
// https://edabit.com/challenge/9ukwiKyv8R9NHSt3d

function removeSmallest(arr) {
  let newArray = arr.slice( -arr.length )
  let smallest = arr.sort().slice( 0, 1 )
  let index = newArray.indexOf( smallest[0] )

  newArray.splice( index, 1 )

  return newArray
}

// 5. Create a function that takes an array of numbers and returns the sum of the two lowest positive integers. No floats or empty arrays will be used in any of the test cases.
// https://edabit.com/challenge/GNgCfKHWfQwByBNqa

function sumTwoSmallestNums(arr) {
  let newArray = arr.filter( num => num> 0 )
    .sort(  (a, b) => parseInt(a) > parseInt( b ) )
  return newArray[ 0 ] + newArray[ 1 ]
}

// 6. Create a function that accepts an array of 10 integers (between 0 and 9) and returns a string of those numbers in the form of a phone number.
// https://edabit.com/challenge/Z6oY6EWwT9rde8YXm

function formatPhoneNumber(numbers) {
  function section( start, end ) {
     return numbers.slice( start, end ).join( "" )
  }
  return `(${section( 0, 3 )}) ${section( 3, 6 )}-${section( 6, 10 )}`
}

// 7. Create a function that takes an array of names and returns an array with the first letter capitalized.
// https://edabit.com/challenge/ZN5cpGPNRS3nrjMo5

function capMe(arr) {
	return arr.map( name => {
    return name.slice(0,1).toUpperCase() +
      name.slice(1, name.length).toLowerCase()
  })
}

// 8. Create a function that takes an array of numbers and returns the  following statistics:Minimum Value, Maximum Value, Sequence Length, Average Value
// https://edabit.com/challenge/gpozv9DbFqrHDmSQZ

function AlphabetSoup(str) {
  return str.split("").sort().join("")
}

// 9. Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// https://edabit.com/challenge/h7LTMAFeNz79rXB2Y

function findLargestNums(arr) {
  return arr.map( array => {
    return array.sort( ( a, b ) => parseFloat( a ) > parseFloat( b ) ).pop()
  })
}

// 10. Create a function that takes an object and returns the keys and values as separate arrays.
// https://edabit.com/challenge/AP4hnF97anRc2mAZ6

function keysAndValues(obj) {
  let objectArray = []
  let valueArray = []

  for ( let key in obj ) {
    objectArray.push( key )
    valueArray.push( obj[ key ] )
  }

  return [ objectArray, valueArray ]
}
