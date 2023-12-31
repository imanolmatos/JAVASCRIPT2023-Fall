/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let date = new Date(); //This hold the current date

// Step 2: Declare another variable to hold the day of the week
let day;
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
day = date.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let message;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (day >= 1 && day != 6) {
  message = "Hang in there";
} else {
  message = "Woohoo!  It is the weekend";
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let messageDay;
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (day) {
  case 0:
    messageDay = "Sunday";
    break;
  case 1:
    messageDay = "Monday";
    break;
  case 2:
    messageDay = "Tuesday";
    break;
  case 3:
    messageDay = "Wednesday";
    break;
  case 4:
    messageDay = "Thursday";
    break;
  case 5:
    messageDay = "Friday";
    break;
  case 6:
    messageDay = "Saturday";
    break;
}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector("#message1").innerHTML = message;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector("#message2").innerHTML = messageDay;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let temples = {};

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

function Output(temples) {
  temples.forEach((temple, index, array) => {
    const nodeArt = document.createElement("ARTICLE");
    const nodeH3 = document.createElement("h3");
    nodeH3.innerHTML = temple.templeName;
    const nodeH4 = document.createElement("h4");
    nodeH4.innerHTML = temple.location;
    const nodeH41 = document.createElement("h4");
    nodeH41.innerHTML = temple.dedicated;
    const nodeIm = document.createElement("img");
    nodeIm.src = temple.imageUrl;
    nodeIm.alt = temple.templeName;
    nodeArt.append(nodeH3, nodeH4, nodeH41, nodeIm);
    document.getElementById("temples").appendChild(nodeArt);
  });
}
// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
async function getTemples() {
  const url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuff(data);
  }
}

function doStuff(data) {
temples = data;
console.log(temples);
Output(temples);
sortElement = document.getElementById("sortBy");
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
sortElement.addEventListener("change", function() {
  sortBy(temples);
})
};
  

getTemples();


// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
const clear = document.getElementById("temples");
clearing = clear.getElementsByTagName("article");
clear.replaceChildren();
}

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy(temples) {
  reset();
  value = document.getElementById("sortBy").value;
  if (value == "templeNameAscending") {
    alert("Ascending elements.")
    templesAscending = temples.sort(function (a, b) {
      if (a.templeName < b.templeName) {
        return -1;
      }
      else if (a.templeName > b.templeName) {
        return 1;
      }
        return 0;
    }); 
    Output(templesAscending);
  }
  if (value == "templeNameDescending"){
    alert("Descending elements.")
    templesDescending = temples.sort(function (a, b) {
      if (a.templeName < b.templeName) {
        return 1;
      }
      else if (a.templeName > b.templeName) {
        return -1;
      }
        return 0;
    });
    Output(templesDescending);
  } 
}





/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
