exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    return str.split( "" ).reduce( ( string, char ) => {
      if ( string.slice( -amount ) !== char.repeat( amount ) ) {
        string += char
      }
      return string
    }, "")
  },

  wordWrap: function(str, cols) {
    // Could not get this to work totally correct. Employed many different approaches
  //   let stringArray = str.split( " " )
  //   let newString = ""
  //   for ( let i = 0; i < stringArray.length; ) {
  //     if ( stringArray[i].length > cols - 1 ) {
  //       newString += stringArray[i] + "\n"
  //       i++
  //     }
  //     else {
  //       let tempString = ""
  //       while ( tempString.length < cols ) {
  //         console.log( 'stringArray[i]', stringArray[i] )
  //         tempString += stringArray[i] + " "
  //         console.log( 'tempString', tempString )
  //         i++
  //       }
  //       console.log( 'tempString indexOf', tempString.indexOf( " " ))
  //       if ( tempString.indexOf( " " ) < cols ) {
  //         tempString = tempString.slice( 0, tempString.length - 1 )
  //         let temporString = tempString.slice( 0, tempString.lastIndexOf( " " ) )
  //         newString += temporString + "\n"
  //         i--
  //       }
  //       else {
  //         newString += tempString + "\n"
  //       }
  //     }
  //   }
  //   return newString.slice( 0, newString.length -1 )

  let newString = str.split("")
    newString.forEach( )
  },


  reverseString: function(str) {

  }
};

stringsAnswers.wordWrap( 'abcdef abcde abc def', 5 )
