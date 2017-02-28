var bio = {
  name: "Steve",
  age: 41,
  skills: [
    "awesomeness",
    "programming",
    "teaching",
    "JS"
  ]
}

var work = {
  jobs: [
    {
      "name": "LivHome",
      "position": "Caregiver",
      "yearsWorked": "2016-2017"
    },
    {
      "name": "State of Illinois",
      "position": "Caregiver",
      "yearsWorked": "2010-2015"
    },
    {
      "name": "DePaul",
      "position": "Writing tutor",
      "yearsWorked": "2008"
    },
    {
      "name": "Ford Motor Company",
      "position": "Assembler, Forklift Driver",
      "yearsWorked": "1993, 1995-2007"
    }
  ]
}

var education = {
  "schools": [
    {
      "name": "UIC",
      "location": "Chicago",
      "major": "undeclared",
      "yearsAttended": "1993-1994"   },
    {
      "name": "Moraine Valley CC",
      "location": "Orland Park",
      "major": "Automotive Repair and undeclared",
      "yearsAttended": "1995-1996, 1998"
    },
    {
      "name": "DeVry",
      "location": "Tinley Park",
      "major": "Computer Networking",
      "yearsAttended": "2000-2001"
    },
    {
      "name": "Prairie State College",
      "location": "Chicago Heights",
      "major": "undeclared",
      "yearsAttended": "2002-2003, 2005-2006"
    },
    {
      "name": "Empire State College",
      "location": "New York City",
      "major": "undeclared",
      "yearsAttended": "2003-2004"
    },
    {
      "name": "DePaul University",
      "location": "Chicago",
      "major": "Liberal Arts, Computing",
      "yearsAttended": "2007-2011, 2015"
    }
  ]
}

var projects = {
  "project": [
    {
      "name": "Fake project 1",
      "date": "2003"
    },
    {
      "name": "Fake project 2",
      "date": "2005"
    }
  ]
}

if ( bio.skills ) {
  $( "#header" ).append( HTMLskillsStart )
  let formattedSkills
  for( let i = 0; i < bio.skills.length; i++ ) {
    formattedSkills = HTMLskills.replace( "%data%", bio.skills[i] )
    $( "#skills" ).append( formattedSkills )
  }
}

if( work.jobs ) {
  displayWork()
}

function displayWork() {
  $( "#workExperience" ).append( HTMLworkStart )
  for( employer in work.jobs ) {
    let workEmployer = HTMLworkEmployer.replace( "%data%", work.jobs[ employer].name )
    let workTitle = HTMLworkTitle.replace( "%data%", work.jobs[ employer ].position )
    $( ".work-entry:last" ).append( workEmployer + workTitle )
  }
}


function inName( name ) {
  let nameArray = name.trim().split( " " )
  let firstName = nameArray[0]
  let lastName = nameArray[1]
  firstName = firstName.slice( 0, 1 ).toUpperCase() + firstName.slice( 1 ).toLowerCase()
  let newName = firstName + " " + lastName.toUpperCase()
  return newName
}

$( "#main" ).append( internationalizeButton )
inName( "sebastian thrun" )

projects.display = function() {
  var formattedTitle, formattedDate
  for ( project in projects.project ) {
    $( "#projects" ).append( HTMLprojectStart )
    formattedTitle = HTMLprojectTitle.replace( "%data%", projects.project[ project ].name )
    formattedDate = HTMLprojectDates.replace( "%data%", projects.project[ project ].date )
    $( ".project-entry:last" ).append( formattedTitle )
    $( ".project-entry:last" ).append( formattedDate )
  }
}

projects.display()
$( "#mapDiv" ).append( googleMap )
