const hobbiesArray = [
    { name: 'volleyball', lengthInYearsAtHobby: 25 },
    { name: 'cooking', lengthInYearsAtHobby: 15},
    { name: 'swimming', lengthInYearsAtHobby: 11}
];

function printSportInfo(sport) {
    console.log(` ${sport.name} is played in ${sport.lengthInYearsAtHobby} `)
}


for (let index = 0; index < hobbiesArray.length; index++) {
    const element = hobbiesArray[index];

    printSportInfo(element);
}


function logHobbies() {
    hobbiesArray.forEach(sport => {
        console.log(`  ${sport.name}: A hobby for ${sport.lengthInYearsAtHobby} years`);
    });
}

logHobbies();


let band1 = {
    name : "Pink Floyd",
    city : "London" ,
    country : "England",
    yearFormed : 1965,
    genres : ["Progressive rock", "psychedelic rock", "art rock"]
}
band1.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");

let band2 = {
    name : "SS Pink Floyd",
    city : "SS London" ,
    country : "SS England",
    yearFormed : 2018,
    genres : ["SS Progressive rock", "ss psychedelic rock", "ss art rock"]
}
band1.genres = new Array("SS Progressive rock2", "ss psychedelic rock2", "ss art rock2");

let bandArry = [];

bandArry.push(band1);
bandArry.push(band2);

for (let index = 0; index < bandArry.length; index++) {
    const element = bandArry[index];
    // console.log(element.name);
    console.log("-------------------------------");
    console.log(`Band Name: ${element.name}`)
    console.log(`Band City: ${element.city}`)
    console.log(`Band Country: ${element.country}`)
    console.log(`Band Year Formed: ${element.yearFormed}`)
    console.log(`Band Genres: ${element.genres.join(', ')}`)
    
}