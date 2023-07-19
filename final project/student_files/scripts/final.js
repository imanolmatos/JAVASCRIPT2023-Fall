/* Final Project */

let date = new Date(); //This hold the current date
let day;
day = date.getDay();
let message;
if (day >= 1 && day != 6) {
  message = "Welcome! Enjoy our meals! ";
} else {
  message = "Welcome! Enjoy our discounts";
}
/* SWITCH, CASE, BREAK */

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
document.querySelector("#message1").innerHTML = message;
document.querySelector("#message2").innerHTML = messageDay;
let meals = [{name: "Apple pie", price: 4, location: "England", imgUrl:"images/applepie.jpg"},
             {name: "Arepas", price: 6, location: "Venezuela", imgUrl:"images/arepas.jpg"},
             {name: "Chop Suey", price: 10, location: "China", imgUrl:"images/chopsuey.jpg"},
             {name: "Lasagna", price: 12, location: "Italy", imgUrl:"images/lasagna.jpg"},
             {name: "Lomo Saltado", price: 20, location: "Perú", imgUrl:"images/lomosaltado.jpg"},
             {name: "Mofongo", price: 10, location: "Dominican Republic", imgUrl:"images/mofongo.jpg"},   
             {name: "Paella", price: 20, location: "Spain", imgUrl: "images/paella.jpg"},
             {name: "Tacos", price: 13, location: "Mexico", imgUrl:"images/tacos.jpg"},
             ]

function Output(meals) {
  meals.forEach((meal, index, array) => {
    const nodeArt = document.createElement("ARTICLE");
    const nodeH3 = document.createElement("h3");
    nodeH3.innerHTML = meal.name;
    const nodeH4 = document.createElement("h4");
    nodeH4.innerHTML = `$${meal.price}`;
    const nodeH41 = document.createElement("h4");
    nodeH41.innerHTML = meal.location;
    const nodeIm = document.createElement("img");
    nodeIm.src = meal.imgUrl;
    nodeIm.alt = meal.meal;
    nodeIm.width = 800;
    nodeIm.height = 300;
    nodeArt.append(nodeH3, nodeH4, nodeH41, nodeIm);
    document.getElementById("meals").appendChild(nodeArt);
  });
}
function doStuff(meals) {
console.log(meals);
Output(meals);
sortElement = document.getElementById("sortBy");
sortElement.addEventListener("change", function() {
  sortBy(meals);
})
};

function reset() {
const clear = document.getElementById("meals");
clearing = clear.getElementsByTagName("article");
clear.replaceChildren();
}

function sortBy(meals) {
  reset();
  value = document.getElementById("sortBy").value;
  if (value == "mealNameAscending") {
    alert("Ascending elements.")
    mealsAscending = meals.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      else if (a.name > b.name) {
        return 1;
      }
        return 0;
    }); 
    Output(mealsAscending);
  }
  if (value == "mealNameDescending"){
    alert("Descending elements.")
    mealsDescending = meals.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      else if (a.name > b.name) {
        return -1;
      }
        return 0;
    });
    Output(mealsDescending);
  } 
}

//Output
doStuff(meals);

