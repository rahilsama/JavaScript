import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.Camera();




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