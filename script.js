

function testParam(input) {
    return input*input;
    
}

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    else{
        return factorial(n-1)*n;
    }
    
}

const inputYear = '1984';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+18);


console.log('23'-'10'-3);

console.log('23'+'10'+3);

//5 falsy values: 0, '', undefined, NaN, NULL

console.log("Boolean value of 0 is " + Boolean(0));
console.log("Boolean value of NaN is " + Boolean(NaN));
console.log("Boolean value of null is " + Boolean(null));
console.log("Boolean value of undefined is " + Boolean(undefined));
console.log("Boolean value of '' is " + Boolean(''));

const money = 0.0;
if(money){
    console.log("Dont spend it all dude");
}
else{
    console.log("Get a job");
}


let height;
if (height) {
    console.log("Has height");
} else {
    console.log("Does not have height");
}


//Equality operator '==' and '==='
const age = '18';
if (age === 18) {
    console.log("Is a number");
}else{
    console.log("not an  integer");
}

const userInput = prompt("What is your fav number?");

console.log(userInput);


const hasDrivingLicense = true;
const hasGoodVision = false;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

const shouldDrive = hasDrivingLicense && hasGoodVision;

if (shouldDrive) {
    console.log("Sarah should drive!");
}else{
    console.log("Sarah should drive! NAAAT!");
}