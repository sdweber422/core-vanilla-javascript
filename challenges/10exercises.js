// Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.

function max( value1, value2 ) {
  if ( value1 > value2 ) {
    return value1
  }
  else {
    return value2
  }
}

// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree( args ) {
  let compare = [...arguments][0]

  for( let i = 1; i < [...arguments].length; i++ ) {
    if ( compare < [...arguments][i] ) {
      compare = [...arguments][i]
    }
  }

  return compare
}

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel( str ) {
  return str.match(/([aeiou])/ig) !== null
}

// Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate( str ) {
  let notAllowed = ['a', 'e', 'i', 'o', 'u', ' ' ]
  let letter
  let string = str
  let newString = ''

  while ( string.length > 0 ) {
    letter = string.slice( 0, 1 )

    if ( !notAllowed.includes( letter ) ) {
      newString += letter + 'o' + letter
    }
    else {
      newString += letter
    }

    if ( string.length === 1 ) {
      string = ''
    }

    string = string.slice( -(string.length - 1) )
  }
  
  return newString
}

// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum( arr ) {
  return arr.reduce( ( accumulator, value ) => accumulator + value, 0 )
}

function multiply( arr ) {
  return arr.reduce( ( accumulator, value ) => accumulator * value )
}

// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".

function reverse( str ) {
  return str.split( "" ).reverse().join( "" )
}

// Represent a small bilingual lexicon as a Javascript object in the following fashion
//{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"}
//and use it to translate your Christmas cards from English into Swedish.

const bilingual = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"}

function christmasTranslation( str ) {
  return str.toLowerCase().split( " " )
    .map( word => bilingual[ word ] + " " ).join( " " )
}

//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord( arr ) {
  return arr.sort( ( previous, next ) => previous.length > next.length ).pop().length
}

//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWords( arr, lengthOfWords ) {
  return arr.filter( word => word.length > lengthOfWords )
}

//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq( str ) {
  let characterFrequency = {}
  str.split( "" ).forEach( letter => characterFrequency[ letter ] = ( characterFrequency[letter] || 0 ) + 1 )
  return characterFrequency
}
