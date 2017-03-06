var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    var nameArray = []
    var alphabatizedArray = []
    var splitName
    for ( name in names ) {
       splitName =  names[name].trim().split(" ")
       splitName.reverse()
       nameArray.push( splitName )
    }
    nameArray.sort( function ( a, b ) { return a[0].localeCompare(b[0]) } )
    nameArray.forEach( function( entry ) { alphabatizedArray.push( entry.join(", ") ) } )
    return alphabatizedArray
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));
