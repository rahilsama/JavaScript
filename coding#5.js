let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let total = [];

// def calcTip(bill):
//     if bill < 50:
//         return bill * 0.2;
//     elif bill >= 50 and bill <= 200:
//         return bill * 0.15;
//     else:
//         return bill * 0.1;


function calcAverage(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {      
        const element = arr[index];
        sum += element;
    }
    return sum/arr.length;
    
}

function calcTip(bill) {
    return bill >= 50 && bill <=300 ? bill*0.15 : bill*0.2;
}
        
for(const element of bills) {
    let tip = calcTip(element)
    tips.push(tip);
    total.push(element+tip);
}


console.log(calcAverage([2,3,7]));
console.log(bills);
console.log(`Average of bills: ${calcAverage(bills)}`);
console.log(tips);
console.log(`Average of tips: ${calcAverage(tips)}`);
console.log(total);
console.log(`Average of total: ${calcAverage(total)}`);