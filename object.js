const rahil = {
    firstName: "Rahil",
    lastName: "Sama",
    birthYear: 1999,
    friends: ["Mustan", "Ravi", "Insha"],
    hasDriversLicense: false,

    getSummary: function(){
        return `Rahil is ${this.age} years old, and ${this.hasDriversLicense ? "has" : "does not have"} Driver's license`;
    }
};

console.log(rahil);

console.log(rahil.lastName);

const nameKey = ''; 

const input = prompt("What would you like to know? enter firstName, lastName, age, friends:");

console.log(rahil[input]);

//'Undefined' in the output if we try to access a property of object that does not exist.

console.log(`${this.firstName} has ${rahil.friends.length} friends and his bestfriend is ${rahil.friends[0]}`);


rahil['calcAge'] = function(){
        this.age = 2022 - this.birthYear;
        return this.age;
    }

console.log(rahil.calcAge());


console.log(rahil.getSummary());


//Coding challenge #3

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        return this.mass/(this.height * this.height);
        
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
        
    }
};


console.log(`${john.fullName} has BMI of ${john.calcBMI()}, which is ${john.bmi > mark.calcBMI() ? "higher" : "lower"} than ${mark.fullName}, who has BMI of ${mark.bmi}`);

const ren = {
    name: "Hello there"
};


