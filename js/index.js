// Write your Pizza Builder JavaScript in this file.
//separation of concerns (SoC) is a design principle for separating a computer 
//program into distinct sections such that each section addresses a separate concern

// Constants
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}
function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
    document.querySelectorAll('.green-pepper').forEach(oneGr => {
    if (state.greenPeppers) {
      oneGr.style.visibility = 'visible';
    } else {
      oneGr.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    let sauce = document.querySelector('.sauce');
    if (state.whiteSauce) {
      sauce.classList.add('sauce-white');
    } else {
      sauce.classList.remove('sauce-white');
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
    let crust = document.querySelector('.crust')
    if (state.glutenFreeCrust) {
      crust.classList.add('crust-gluten-free');
    } else {
      crust.classList.remove('crust-gluten-free');
    }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let btnPep = document.querySelector(".btn-pepperoni");
  let btnMush = document.querySelector(".btn-mushrooms");
  let btnGre = document.querySelector(".btn-green-peppers"); 
  let btnSauce = document.querySelector(".btn-sauce"); 
  let btnCrust = document.querySelector(".btn-crust"); 
    if (state.pepperoni) {
      btnPep.classList.add('active');
    } else {
      btnPep.classList.remove('active');
    }

    if (state.mushrooms) {
      btnMush.classList.add('active');
    } else {
      btnMush.classList.remove('active');
    }

    if (state.greenPeppers) {
      btnGre.classList.add('active');
    } else {
      btnGre.classList.remove('active');
    }

    if (state.whiteSauce) {
      btnSauce.classList.add('active');
    } else {
      btnSauce.classList.remove('active');
    }

    if (state.glutenFreeCrust) {
      btnCrust.classList.add('active');
    } else {
      btnCrust.classList.remove('active');
    }
}

let basePrice = 10;

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;
  document.querySelector("price-list").innerHTML = "";
  // empties the <ul>  
  // you can target it as aside ul

  if(state.pepperoni) {
    document.querySelector("price-list").innerHTML = `<li>$${ingredients.pepperoni.price} pepperoni</li>`
    // HTML then reads it as normal code and recognizes elements
    totalPrice += ingredients.pepperoni.price;
  }

  if(state.mushrooms) {
    document.querySelector("price-list").innerHTML = `<li>$${ingredients.mushrooms.price} mushrooms</li>`
    totalPrice += ingredients.mushrooms.price;
  }

  if(state.greenPeppers) {
    document.querySelector("price-list").innerHTML = `<li>$${ingredients.greenPeppers.price} green peppers</li>`
    totalPrice += ingredients.greenPeppers.price;
  }

  if(state.whiteSauce) {
    document.querySelector("price-list").innerHTML = `<li>$${ingredients.whiteSauce.price} white sauce</li>`
    totalPrice += ingredients.whiteSauce.price;
  }

  if(state.glutenFreeCrust) {
    document.querySelector("price-list").innerHTML = `<li>$${ingredients.glutenFreeCrust.price} gluten free crust</li>`
    totalPrice += ingredients.glutenFreeCrust.price;
  }
  
  document.querySelector("total-price").innerHTML = `${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});