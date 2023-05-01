//VERY EASY: Write a function named min that takes two arguments and returns their minimum.
function min(x, y){
    if (x < y){
        return x
    }
    else {
        return y
    }

}
console.log(min(5, 8))


//EASY: Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."

let studentArray = [
    {lastName: "Morado", firstName: "Oscar", age: 22},
    {lastName: "Doe", firstName: "Joe", age: 19},
    {lastName: "Miller", firstName: "Craig", age: 28},
];

console.log(`Hello, my name is ${studentArray[1].firstName} ${studentArray[1].lastName} and im  ${studentArray[1].age} years old`)


//MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).


let userInput = parseInt(prompt("Enter a number from 1-12: "))
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function outputMonth(){
    if (userInput < 1 || userInput > 12){
        prompt('Invalid Number')
} else {
    console.log(months[userInput - 1])
}
}
outputMonth()



//HARD: Given the information below for Tom and Jerry. 
// Tom - 	height:  9in   	mass: 8 g
// Jerry - 	height: 10in 	mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//     Mass=     BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

const tomHeight = 9
const tomMass = 8
const jerryHeight = 10
const jerryMass = 45

const tomBmi = tomMass / ((tomHeight ** 2));
const jerryBmi = jerryMass / ((jerryHeight ** 2));

const isTomBmiHigher = tomBmi > jerryBmi;
console.log('Is Toms BMI higher than jerrys? ' + isTomBmiHigher)


// const markMass = 78;
// const marksHeight = 1.69;

// const johnMass = 92;
// const johnsHeight = 1.95;

// const markBmiFormula = markMass / (marksHeight * marksHeight);
// const johnsBmiFormula = johnMass / (johnsHeight * johnsHeight);

// console.log(markBmiFormula);
// console.log(johnsBmiFormula);

// const markHigherBMI = markBmiFormula > johnsBmiFormula;

// console.log(markHigherBMI);
