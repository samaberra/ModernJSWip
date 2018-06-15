let hobbiesArray = ['Soccer', 'Musci', 'Traveling'];


function printHobbies(passedArray) {
    console.log(`I like ${passedArray.length} things`);
    for (let index = 0; index < passedArray.length; index++) {
        let element = passedArray[index];
        console.log('I like ' + element);
    }  
}


printHobbies(hobbiesArray);

let objArray = [
    {sportName:'Baseball', duration: 'Innings'},
    {sportName:'Hockey', duration: 'Periods'}
];


function printObjArray(passedArray) {
    for (let index = 0; index < passedArray.length; index++) {
        let Name = passedArray[index].sportName;
        let Duration = passedArray[index].duration;
        console.log(Name + ' is played in ' + Duration);
    }  
}

printObjArray(objArray);
