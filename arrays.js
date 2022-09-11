//Arrays
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1999, 2015, 2017, 2022);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

friends[2] = "Jay";
console.log(friends);


const person = ["Rahil", "Sama", 2022-1999, friends];

console.log(person);

//Excercise
const calcAge = function (birth_year) {
    return 2022 - birth_year;
}

const year = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[year.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];
console.log(ages);


//Basic Array Operations (Methods)
const newFriends = ["Michel", "Steven", "Peter"];
//Add elements
const newLength = newFriends.push("Jay");
console.log(newFriends);

//Coding challenge

function calcTip(billValue) {
    if (billValue >= 50 && billValue <= 300) {
        return 0.15*billValue;
    } else {
        return 0.2*billValue;
    }
}

const bills = [125, 555, 44];

const tips = new Array();

const totals = new Array();

tips[0] = calcTip(bills[0]);

tips[1] = calcTip(bills[1]);

tips[2] = calcTip(bills[2]);

console.log(tips[0]);
console.log(tips[1]);
console.log(tips[2]);

totals[0] = tips[0]+bills[0];
totals[1] = tips[1]+bills[1];
totals[2] = tips[2]+bills[2];

console.log(totals[0]);
console.log(totals[1]);
console.log(totals[2]);