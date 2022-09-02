//Fundamental JAVAScript part 2
function logger() {
    console.log('My name is.... My name is.... slim slim slim shady');
}


logger();
logger();
logger();
logger();

function fruit_processor(apples, oranges){
    apples = cut_fruits_to_pieces(apples);
    oranges =cut_fruits_to_pieces(oranges);
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}




console.log(fruit_processor(5,0));


//Declaration vs Expression


//Function Declaration 
function calculate_age_1(birth_year) {
    const age = 2022 - birth_year;
    return age;
}

console.log(calculate_age_1(1999));


//Function Expression 
const calculate_age_2 = function(birth_year){
    return 2022-birth_year;
}

console.log(calculate_age_2(1999));


//Arrow Function 
//Added in ES6
//Shorter and faster to write 
const calculate_age_3 = birth_year => 2022 - birth_year;

console.log(calculate_age_3(1999));

const years_until_retirement = (birth_year, first_name) => {
    const age = 2022 - birth_year;
    const retirement = 65 - age;
    // return retirement;
    return `${first_name} retires in ${retirement} years.`;
}


console.log(years_until_retirement(1999, 'Rahil'));


//Functions calling other Functions
function cut_fruits_to_pieces(fruit) {
    return fruit*4;
}

//We reuse the function we made earlier 

console.log(fruit_processor(5, 10));

