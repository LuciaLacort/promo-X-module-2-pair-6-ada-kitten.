'use strict';

const kittenList = document.querySelector('.js-list');

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="siames-cat"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race"></h4>
  <p class="card_description">
    Porte elegante, su patrón de color tan característico y sus ojos
    de un azul intenso, pero su historia se remonta a Asía al menos
    hace 500 años, donde tuvo su origen muy posiblemente.
  </p>
</article>
</li>`; 

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/sphynx-gato.webp"
  alt="sphynx-cat"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race2"></h4>
<p class="card_description">
  Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.
</p>
</li>`

const kittenThree = ` <li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/maine-coon-cat.webp"
  alt="maine-coon-cat"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race3">Maine Coon</h4>
<p class="card_description">
  Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.
</p>
</li>`;

kittenList.innerHTML = kittenOne + kittenTwo + kittenThree;


//Definir query selectors

const addKittenSection = document.querySelector('.js-new-kitten');

const newForm = document.querySelector('.js-new-form');

const showFormButton = document.querySelector('.js-kitten-add');

const addKittenButton = document.querySelector('.js-btn-add');



function showNewCatForm() {
  addKittenSection.classList.remove('collapsed');
}
function hideNewCatForm() {
  addKittenSection.classList.add('collapsed');
}

/*showFormButton.addEventListener("click", (event)=>{
  addKittenSection.classList.toggle('collapsed');
  console.log(event.currentTarget);
  console.log(event.target);
});*/

//Crear la función que vamos a pasar de parámetro en el event listener con el código que se va a ejecutar al hacer click 

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (addKittenSection.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

//Escuchar el evento sobre el botón 

showFormButton.addEventListener('click', handleClickNewCatForm);


const buttonCancel = document.querySelector('.js-button-cancel');

buttonCancel.addEventListener('click', (event)=>{
  addKittenSection.classList.add('collapsed');
  newForm.reset();
});

const input_search_desc = document.querySelector('.js_in_search_desc');
const searchBtn = document.querySelector('.js_search_btn');

searchBtn.addEventListener('click', (event)=>{
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  kittenList.innerHTML = " ";
  
  if(kittenOne.includes(descrSearchText)) {
      kittenList.innerHTML += kittenOne;
    } 
  
  if(kittenTwo.includes(descrSearchText)) {
      kittenList.innerHTML += kittenTwo;
    }
    
  if(kittenThree.includes(descrSearchText)) {
      kittenList.innerHTML += kittenThree;
    } 

  if(kittenOne.includes(descrSearchText) === false && kittenTwo.includes(descrSearchText) === false && kittenThree.includes(descrSearchText) === false){
      kittenList.innerHTML ='<p class="noKitten">No hay ningún gatito con esa característica.<p>';
    } 

});

//cómo hacer que dé igual si se escribe con mayúscula o no y cómo checkear que sean palabras importantes las de la búsqueda (que si la búsqueda tiene la, todos tienen esa palabra en la descripción)



//declarar variables con los input de desc, name, race, url



const inputImage = document.querySelector('.js-input-image');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-raza');
const inputDesc = document.querySelector('.js-input-desc');

//Sacar el valor de cada input con un listener

//El addeventlistener de abajo no sirve porque es para luego modificar un html y en este caso no se puede porque el html lo metemos desde JS

/*newForm.addEventListener('input', (event)=>{
  const input = event.target.id; //obtener id del input
  const valueInput = event.target.value; //obtener valor input
  console.log("working input");

  if (input === 'catImage'){
      .innerHTML = valueInput;
  } else if (input === 'catName'){
      .innerHTML = valueInput;
  } else if (input === 'catRace'){
      .innerHTML = valueInput;
  } else if (input === 'catDesc'){
       .inner.HTML= valueInput;
  } 
});*/

//Entonces tenemos que hacer una función que cree una card nueva con los parámetros que queremos que tenga.

function renderKitten(url, name, raza, desc){

  const newCat = `<li class="card">
  <article>
    <img
      class="card_img"
      src=${url}
      alt="siames-cat"
    />
    <h3 class="card_title">${name}</h3>
    <h4 class="card_race">${raza}</h4>
    <p class="card_description">${desc}</p>
  </article>
  </li>`; 
  return newCat;
}

//Y después creamos una función que recoja el value de cada input que hemos llamado con las variables anteriores, cada value en una variable una variable. Y le decimos que lo sume a la lista de gatos que tenemos invoando a la función que crea la tarjeta, pasando esas variables como argumentos


function addNewKitten(event) {
  event.preventDefault();

  const url = inputImage.value;
  const name = inputName.value;
  const raza = inputRace.value;
  const desc = inputDesc.value;

  // Estábamos pasando la función sin pasarle los argumentos
  kittenList.innerHTML += renderKitten(url, name, raza, desc);
}

// Se escucha al boton de anadir que al hacer click ejecuta la función que añade un gato nuevo, que a su vez recoge los valores de los inputs del formulario e invoca a la función que crea la tarjeta 

addKittenButton.addEventListener('click', addNewKitten);




// raza

const kittenRace1 = document.querySelector(".card_race");
const race = kittenRace1.innerHTML;

console.log(race);

if (race === "") {
  kittenRace1.innerHTML = `<p class="card_race">Uy que despiste, no sabemos su raza</p>`;
} else {
  kittenRace1.innerHTML = `<h3 class="card_race">${race}</h3>`;
}

const kittenRace2 = document.querySelector(".card_race2");
const race2 = kittenRace2.innerHTML;


if (race2 === "") {
  kittenRace2.innerHTML = `<p class="card_race2">Uy que despiste, no sabemos su raza</p>`;
} else {
  kittenRace2.innerHTML = `<h3 class="card_race2">${race2}</h3>`;
}

const kittenRace3 = document.querySelector(".card_race3");
const race3 = kittenRace3.innerHTML;


if (race3 === "") {
  kittenRace3.innerHTML = `<p class="card_race3">Uy que despiste, no sabemos su raza</p>`;
} else {
  kittenRace3.innerHTML = `<h3 class="card_race3">${race3}</h3>`;
}

// Buscador de raza: NO funciona


// const input_search_race = document.querySelector('.js_in_search_race');

// searchBtn.addEventListener('click', (event)=>{
//   event.preventDefault();
//   const searchRaceValue = document.querySelector(input_search_race.value);
//   kittenList.innerHTML = " ";

// if(kittenOne.includes(searchRaceValue)) {
//       kittenList.innerHTML += kittenOne;
//     } 
  
//   if(kittenTwo.includes(searchRaceValue)) {
//       kittenList.innerHTML += kittenTwo;
//     }
    
//   if(kittenThree.includes(searchRaceValue)) {
//       kittenList.innerHTML += kittenThree;
//     } 

//   if(kittenOne.includes(searchRaceValue) === false && kittenTwo.includes(searchRaceValue) === false && kittenThree.includes(searchRaceValue) === false){
//       kittenList.innerHTML =`<p class="noKittenRace">No hay ningún gatito de la raza $={searchRaceValue}.<p>`;
//     } 

// });       