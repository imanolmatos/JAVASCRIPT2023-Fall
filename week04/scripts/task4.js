/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let me;

// Step 2: Inside of the object, add a property named name with a value of your name as a string
me = {
  name: "Imanol",
};
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
me = {
  name: "Imanol",
  photo: "images/imanolmatos.jpeg",
};
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
me = {
  name: "Imanol",
  photo: "images/imanolmatos.jpeg",
  favoritesFood: ["Lomo Saltado", "Lasagna", "Fritos"],
};
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
me = {
  name: "Imanol",
  photo: "images/imanolmatos.jpeg",
  favoritesFood: ["Lomo Saltado", "Lasagna", "Fritos"],
  hobbies: ["Listen to the music", "play the guitar", "Read"],
};
// Step 6: Add another property named placesLived with a value of an empty array
me = {
  name: "Imanol",
  photo: "images/imanolmatos.jpeg",
  favoritesFood: ["Lomo Saltado", "Lasagna", "Fritos"],
  hobbies: ["Listen to the music", "play the guitar", "Read"],
  placesLived: [],
};
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
me.placesLived.push(
  (object = {
    place: "",
    length: "",
  })
);
// // Step 8: For each property, add appropriate values as strings
me.placesLived.push(
  (object = {
    place: "Perú",
    length: "2 years",
  })
);

// // Step 9: Add additional objects with the same properties for each place you've lived
me.placesLived.push(
  (object = {
    place: "Dominican Republic",
    length: "All my life",
  })
);

me.placesLived.push(
  (object = {
    place: "Dominican Republic, Azua",
    length: "All my life",
  })
);

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").innerHTML = me.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("img").src = me.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("img").alt = me.name;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
for (favorite of me.favoritesFood) {
  const node = document.createElement("li");
  node.innerHTML = favorite; /// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(node);
}

// Step 6: Repeat Step 4 for each hobby in the hobbies property
for (favorite of me.hobbies) {
  const node = document.createElement("li");
  node.innerHTML = favorite;
  document.querySelector("#hobbies").appendChild(node); // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
}

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
me.placesLived.forEach((element, index, array) => {
  place = ` <em> ${element.place}  `;
  length = ` <em> ${element.length} `;
  const dtNode = document.createElement("dt");
  const ddNode = document.createElement("dd");
  dtNode.innerHTML = place;
  ddNode.innerHTML = length;
  // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
  document.querySelector("#places-lived").append(dtNode, ddNode);
});
