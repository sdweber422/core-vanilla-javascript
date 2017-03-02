let noiseArray = [ 'honk', 'beep' ]

noiseArray.unshift( 'sneeze' )
noiseArray.push( 'cough' )
noiseArray[ noiseArray.length ] = 'belch'

console.log( 'noiseArray', noiseArray )

let animal = {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: noiseArray,
}

console.log( 'animal', animal )

let animals = []
let quackers = {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: [ 'quack', 'honk', 'sneeze', 'growl' ]
}

animals.push( animal )
animals[ animals.length ] = quackers

console.log( 'animals', animals )

let doggie = {
  username: 'Goofy',
  tagline: 'Aww Shucks',
  noises: [ 'bark', 'lick', 'sneeze', 'growl' ]
}
let mouse = {
  username: 'Mickey',
  tagline: 'Hello there',
  noises: [ 'squeak', 'sniff', 'yelp' ]
}

animals.push( doggie, mouse )

console.log( 'animals', animals )
console.log( 'animals.length', animals.length )
