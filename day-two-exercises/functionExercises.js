function AnimalTestUser( username ) {
  if ( [ ...arguments ].length > 1 ) {
    return {
      username: [...arguments].shift(),
      otherArgs: [...arguments].slice( -[...arguments].length + 1 )
    }
  }
  return { username }
}

function AnimalCreator( username, species, tagline, noises ) {
  return {
    username,
    species,
    tagline,
    noises,
    friends: []
  }
}

function addFriend( animal, friend ) {
  animal.friends.push( friend.username )
}

function addMatchesArray( farm ) {
  farm.forEach( function( farm ) {
    farm.matches = []
  })
}

function giveMatches( myFarm ) {
  myFarm.forEach( function( animal ) {
    animal.matches.push( animal.friends[0] )
  })
}

let sheep = AnimalCreator(
  'Cloud',
  'sheep',
  'You can count on me!',
  [ 'baahhh', 'arrgg', 'chewchewchew' ]
)
let cow = AnimalCreator(
  'Milky',
  'cow',
  'This is udderly ridiculous',
  [ 'moo', 'belch', 'chew', 'flatulate' ]
)
let llama = AnimalCreator(
  'Zeny',
  'llama',
  'I protect the sheep',
  [ 'spit', 'stare', 'shuffle' ]
)
let pig = AnimalCreator(
  'Oinky',
  'pig',
  'I like mud',
  [ 'oink', 'squeal', 'grunt' ]
)
let myFarm = [ sheep, cow, llama ]

console.log( 'AnimalTestUser( "sheep" ):', AnimalTestUser( "sheep" ) )
console.log(
  'AnimalTestUser( "lion", { noise: "roar" }, [ 1, 2, 3 ] ):',
  AnimalTestUser( "lion", { noise: "roar" }, [ 1, 2, 3 ], 'hello' )
)

console.log('Sheep:', sheep)
addFriend( sheep, cow )
addFriend( sheep, llama )
console.log('Sheep:', sheep)

addFriend( cow, pig )
addFriend( cow, llama )
addFriend( llama, pig )
addFriend( pig, llama )
console.log( 'myFarm', myFarm )

addMatchesArray( myFarm )
console.log( 'myFarm[0]', myFarm[0] )

giveMatches( myFarm )
console.log( 'myFarm[0]', myFarm[0] )
