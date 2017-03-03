exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    let binaryNumber = []
    
    do {
      binaryNumber.push( num % 2 )
      num = Math.floor( num / 2 )
    } while ( num >= 1 )

    return Number( binaryNumber.join("").charAt( bit - 1 ) )
  },

  base10: function(str) {
    return parseInt( str, 2 )
  },

  convertToBinary: function(num) {
    let binaryNumber = []
    let number

    do {
      binaryNumber.push( num % 2 )
      num = Math.floor( num / 2 )
    } while ( num >= 1 )

    number = binaryNumber.reverse().join("")

    return `0000000${number}`.slice( -8 )
  },

  multiply: function(a, b) {
    return a * (b * 10000000000)/10000000000
  }
};
