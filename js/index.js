// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
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
  whiteSauce: true,
  glutenFreeCrust: true
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
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGP => {
    if (state.greenPeppers) {
      oneGP.style.visibility = 'visible';
    } else {
      oneGP.style.visibility = 'hidden';
    }
  });}

function renderWhiteSauce() {
let sauce = document.querySelector('.sauce')
if(state.whiteSauce){
  sauce.className='sauce'
} else {
sauce.className='sauce sauce-white'
}
}

function renderGlutenFreeCrust() {
  let crust = document.querySelector('.crust')
  if(state.glutenFreeCrust){
    crust.className='crust'
  } else {
  crust.className='crust crust-gluten-free'
  }
}

function renderButtons() {
  document.querySelectorAll('.btn').forEach(btn=>{
    btn.onclick=function(e){
      if(e.target.className.includes('active')){ 
      e.target.className = e.target.className.replace('active', "")
      }
      else {
      e.target.className += ' active'
      }
    }
})
}


function renderPrice() {

let menu = ``
let total=basePrice

for(let food in state){
  if(state[food]){
    total+=ingredients[food].price
    menu += `<li>$${ingredients[food].price} ${ingredients[food].name}</li>`
  }
}

// let menu = `  
//     <li>$1 pepperoni</li>
//     <li>$1 mushrooms</li>
//     <li>$1 green peppers</li>
//     <li>$3 white sauce</li>
//     <li>$5 gluten-free crust</li>
// `


  let newMenuHTML= `
  <h2>Papa's pizza price</h2>
    <ul>
    ${menu}
    </ul>
  <b>$10 cheese pizza</b>

  <strong>$${total}</strong>
  `
  document.querySelector('.panel.price').innerHTML = newMenuHTML
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