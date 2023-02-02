let favoriteFoods = ["pizza","hamburger","ice cream","chocolate"];
temperature();
console.log(randomFood(favoriteFoods))
//userPromptForCrystalGazer();
ageCalculator(1988);
degreeConverter(90);
let volumeCalculation = volumeCalc(2, 7, 5);
console.log(`The area of the box is: ${volumeCalculation[0]}`);
console.log(`The volume of the box is: ${volumeCalculation[1]}`);


function temperature(){
    let randomTemp = getRandomIntInclusive(-5,25);
    if (!randomTemp) console.log("Temperature sensor offline.");  //null and undefined check. Should not be needed here, just added it as exercise
    else if (randomTemp <= 10) console.log(`${randomTemp}°C; The weather is cold.`);
    else console.log(`${randomTemp}°C; The weather is moderate.`);
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function randomFood(foods){
    let foodsSize = foods.length;
    let randomIndex = getRandomIntInclusive(0,foodsSize-1);
    return foods[randomIndex];
}

function crystalGazer(numChildren, partnerName, location, job){
    console.log(`You will be a ${job} in ${location} and married to ${partnerName} with ${numChildren} children.`)
}

function userPromptForCrystalGazer(){
    let children = prompt("Enter number of children", 0);
    let partnerName = prompt("Enter your partners name");
    let location = prompt("enter location");
    let job = prompt("enter job");
    crystalGazer(children, partnerName, location, job);
}

function ageCalculator(birthY){
    let date = new Date;
    let age = date.getFullYear() - birthY;
    console.log(`You are either ${age-1} or ${age}`)
}

function degreeConverter(degree){
    console.log(degree * (Math.PI/180));
}

function volumeCalc(width, height, depth){
    let area = width * height;
    let volume = width * height *depth;
    return [area, volume];
}