// import * as THREE from 'three';

// const scene = new THREE.Scene();

// const camera = new THREE.Camera();




// function testParam(input) {
//     return input*input;
    
// }

// function factorial(n) {
//     if (n == 0) {
//         return 1;
//     }
//     else{
//         return factorial(n-1)*n;
//     }
    
// }

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