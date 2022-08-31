

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


const dolphinScore1 = 96;
const dolphinScore2 = 109;
const dolphinScore3 = 89;

const koalaScore1 = 88;
const koalaScore2 = 91;
const koalaScore3 = 110;

const averageDolphinScore = (96+109+89)/3;
const averageKoalaScore = (88+91+110)/3;


console.log(averageDolphinScore);
console.log(averageKoalaScore);

if (averageDolphinScore > averageKoalaScore) {
    console.log("Dolphins win!");
}else if (averageDolphinScore === averageKoalaScore) {
    console.log("It is a draw!");
}else{
    console.log("Koalas win!");
}

//Bonus one
const dolphinScore1Bonus1 = 97;
const dolphinScore2Bonus1 = 111;
const dolphinScore3Bonus1 = 101;

const koalaScore1Bonus1 = 109;
const koalaScore2Bonus1 = 95;
const koalaScore3Bonus1 = 123;


const averageDolphinScoreBonus1 = (97+112+101)/3;
const averageKoalaScoreBonus1 = (109+95+106)/3;

console.log(averageDolphinScoreBonus1);
console.log(averageKoalaScoreBonus1);

if (averageDolphinScoreBonus1 > averageKoalaScoreBonus1 && averageDolphinScoreBonus1 > 100) {
    console.log("Dolphins win!");
}else if (averageDolphinScoreBonus1 === averageKoalaScoreBonus1 && averageDolphinScoreBonus1>100) {
    console.log("It is a draw!");
}else if(averageDolphinScoreBonus1 < averageKoalaScoreBonus1 && averageKoalaScoreBonus1 > 100){
    console.log("Koalas win!");
}else{
    console.log("Nobody wins!");
}


