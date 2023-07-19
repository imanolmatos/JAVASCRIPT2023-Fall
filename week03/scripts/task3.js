/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
  return number1 + number2;
}
// Step 2: In the function, return the sum of the parameters number1 and number2
function addNumbers() {
  const num1 = parseInt(document.querySelector("#addend1").value);
  const num2 = parseInt(document.querySelector("#addend2").value);
  const sum = add(num1, num2);
  document.querySelector("#sum").value = sum;
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function (number1, number2) {
  return number1 - number2;
};

function subtractNumbers() {
  const num1 = parseInt(document.querySelector("#minuend").value);
  const num2 = parseInt(document.querySelector("#subtrahend").value);
  const sub = subtract(num1, num2);
  document.querySelector("#difference").value = sub;
}
document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);


const multiply = (number1, number2) => {
  return number1 * number2;
};

function multiplyNumbers() {
  const num1 = parseInt(document.querySelector("#factor1").value);
  const num2 = parseInt(document.querySelector("#factor2").value);
  const mult = multiply(num1, num2);
  document.querySelector("#product").value = mult;
}
document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

const divide = (number1, number2) => {
  return number1 / number2;
};

function divideNumbers() {
  const num1 = parseInt(document.querySelector("#dividend").value);
  const num2 = parseInt(document.querySelector("#divisor").value);
  const mult = divide(num1, num2);
  document.querySelector("#quotient").value = mult;
}
document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let dateNow = new Date(2023, 5, 25);

// Step 2: Declare a variable to hold the current year
let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = dateNow.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
var numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").innerHTML = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let odds = numbers.filter(checkOdd);
function checkOdd(num) {
  if (num % 2 == 1) {
    return num;
  }
}
document.querySelector("#odds").innerHTML = odds;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evens = numbers.filter(checkEven);
function checkEven(num) {
  if (num % 2 == 0) {
    return num;
  }
}
document.querySelector("#evens").innerHTML = evens;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let sumOfArray = numbers.reduce(sum);
function sum(total, sum) {
  return total + sum;
  }
document.querySelector("#sumOfArray").innerHTML = sumOfArray;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let multiplication = numbers.map(mult);
function mult(num) {
  return num * 2;
  }
document.querySelector("#multiplied").innerHTML = multiplication;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let final = numbers.map(double).reduce(sum);
function double(num) {
  return num * 2;
  }

function sum(total, sum){
    return total + sum;
}
document.querySelector("#sumOfMultiplied").innerHTML = final;