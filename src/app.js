// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 20
var ingredientsPrice=150



//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};


//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};


// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  // renderButtons();
  // renderIngredientsBoard();
  // renderPrice();
}









//Trial 1 - Change the visibility of patty based on state by manipulating the DOM
function renderPatty() {
  let patty = document.querySelector("#patty");  
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}


//Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
function renderCheese() {

  let cheese = document.querySelector("#cheese");  
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}


//Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
function renderTomatoes() {

  let tomatoes = document.querySelector("#tomato"); 
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }
}


//Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
function renderOnions() {

  let onions = document.querySelector("#onion"); 
  if (state.Onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  }
}


//Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
function renderLettuce() {

  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}








// Trial 2 - Setup event listener for the patty button
document.querySelector(".btn-patty").onclick = function () {
  var pattyItem= document.getElementById("item-1")
  state.Patty = !state.Patty;
  toggleActiveClass(pattyButton)
  
  controlIngredientsDisplay(state.Patty, pattyItem) 

  updatePrice(state.Patty,ingredients.Patty)
  
  renderAll();
};


// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  toggleActiveClass(cheeseButton)

  controlIngredientsDisplay(state.Cheese, cheeseItem)

  updatePrice(state.Cheese,ingredients.Cheese)

  renderAll();
};


// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  toggleActiveClass(tomatoesButton)

  controlIngredientsDisplay(state.Tomatoes, tomatoesItem)

  updatePrice(state.Tomatoes,ingredients.Tomatoes)

  renderAll();
};


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  toggleActiveClass(onionsButton)

  controlIngredientsDisplay(state.Onions, onionsItem)

  updatePrice(state.Onions,ingredients.Onions)

  renderAll();
};


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  toggleActiveClass(lettuceButton)

  controlIngredientsDisplay(state.Lettuce, lettuceItem)

  updatePrice(state.Lettuce,ingredients.Lettuce)

  renderAll();
};







//Challenge 1 - Add/Remove the class active to the buttons based on state

var pattyButton=document.querySelector(".btn-patty")
function toggleActiveClass(pattyButton) {
  pattyButton.classList.toggle("active"); 
}

var cheeseButton=document.querySelector(".btn-cheese")
function toggleActiveClass(cheeseButton) {
  cheeseButton.classList.toggle("active");
}

var tomatoesButton=document.querySelector(".btn-tomatoes")
function toggleActiveClass(tomatoesButton) {
  tomatoesButton.classList.toggle("active");
}

var onionsButton=document.querySelector(".btn-onions")
function toggleActiveClass(onionsButton) {
  onionsButton.classList.toggle("active");
}

var lettuceButton=document.querySelector(".btn-lettuce")
function toggleActiveClass(lettuceButton) {
  lettuceButton.classList.toggle("active");
}






//Challenge 2 - Render only the items selected in the ingredients board based on the state

var pattyItem= document.getElementById("item-1")
function controlIngredientsDisplay(state, pattyItem) {
if (state==false) {
  pattyItem.style.display="none"
} else {
  pattyItem.style.display="block"
}
}

var cheeseItem= document.getElementById("item-2")
function controlIngredientsDisplay(state, cheeseItem) {
if (state==false) {
  cheeseItem.style.display="none"
} else {
  cheeseItem.style.display="block"
}
}

var tomatoesItem= document.getElementById("item-3")
function controlIngredientsDisplay(state, tomatoesItem) {
if (state==false) {
  tomatoesItem.style.display="none"
} else {
  tomatoesItem.style.display="block"
}
}

var onionsItem= document.getElementById("item-4")
function controlIngredientsDisplay(state, onionsItem) {
if (state==false) {
 onionsItem.style.display="none"
} else {
  onionsItem.style.display="block"
}
}

var lettuceItem= document.getElementById("item-5")
function controlIngredientsDisplay(state, lettuceItem) {
if (state==false) {
  lettuceItem.style.display="none"
} else {
  lettuceItem.style.display="block"
}
}








//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

function updatePrice(state,ingredient) {
if (state) {
  ingredientsPrice += ingredient;
} else {
  ingredientsPrice -= ingredient;
}

currentOrder = wholeWheatBun + ingredientsPrice;
document.querySelector(".price-details").innerHTML = "INR " + currentOrder;
}