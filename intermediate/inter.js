

let capitalize = function (aString) {
    return aString.charAt(0).toUpperCase() + aString.slice(1);
}

console.log(capitalize("i am a web developer"));
console.log(averageGrade(3,4,5));


function averageGrade(math, physics, english){
    return (math+physics+english)/3;
}