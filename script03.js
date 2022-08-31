//Fundamental JAVAScript part 2
function logger() {
    console.log('My name is.... My name is.... slim slim slim shady');
}


logger();
logger();
logger();
logger();

function fruit_processor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}




console.log(fruit_processor(5,0));


//Declaration vs Expression

function calculate_age_1(birth_year) {
    const age = 2022 - birth_year;
    return age;
}

console.log(calculate_age_1(1999));

const calculate_age_2 = function(birth_year){
    return 2022-birth_year;
}

console.log(calculate_age_2(1999));

