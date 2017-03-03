let animal = {}
let noises = []
let count = 0

animal.username = 'Tigger'
animal[ "tagline" ] = 'How you doing?'
animal[ "noises" ] = noises

for ( let key in animal ) {
  if ( animal.hasOwnProperty( key ) ) {
    count++
    if ( key === 'username' ) {
      console.log( 'Hi my name is', animal[ key ] )
    }
    if ( key === 'tagline' ) {
      console.log( 'I like to say', animal[ key ] )
    }
    console.log( 'count', count )
  }
}

console.log( 'animal', animal )
