


console.log("Lifing weights repitition 1 🏋️‍♀️");
console.log("Lifing weights repitition 2 🏋️‍♀️");
console.log("Lifing weights repitition 3 🏋️‍♀️");
console.log("Lifing weights repitition 4 🏋️‍♀️");
console.log("Lifing weights repitition 5 🏋️‍♀️");
console.log("Lifing weights repitition 6 🏋️‍♀️");
console.log("Lifing weights repitition 7 🏋️‍♀️");
console.log("Lifing weights repitition 8 🏋️‍♀️");
console.log("Lifing weights repitition 9 🏋️‍♀️");
console.log("Lifing weights repitition 10 🏋️‍♀️");

for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repitition ${rep} 🏋️‍♀️`);
}


const nameArray = ["Rahil", "Sama", 22, "Developer", ["Mustan", "Ravi", "Insha"]];

for(const element of nameArray){
    console.log(element, typeof element);
}


const jonas = [ 
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];


//will loop in reverse
for (let i = jonas.length-1; i>=0; i-- ){
    console.log(jonas[i]);
}


for(let exercise = 1; exercise <= 3; exercise++){
    console.log(`Starting Exercise ${exercise} .........`);
    for(let rep = 1; rep <= 5; rep++){
        console.log(`Doing rep number ${rep}`);
    }
}


