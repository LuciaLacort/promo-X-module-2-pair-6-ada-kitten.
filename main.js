'use strict';

const kittenList = document.querySelector('.js-list');

const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio';
const kittenOneNameUpper = kittenOneName.toUpperCase();
const kittenOneDesc =
  'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenOneImage}"
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenOneNameUpper}</h3>
  <h4 class="card_race">${kittenOneRace}</h4>
  <p class="card_description">${kittenOneDesc}</p>
</article>
</li>`; 

const kittenTwoImage = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenTwoName = 'Fiona';
const kittenTwoNameUpper = kittenTwoName.toUpperCase();
const kittenTwoDesc =
  'Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenTwoRace = 'Sphynx';

const kittenTwo = `<li class="card">
<img
  class="card_img"
  src="${kittenTwoImage}"
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenTwoNameUpper}</h3>
<h4 class="card_race2">${kittenTwoRace}</h4>
<p class="card_description">${kittenTwoDesc}</p>
</li>`;

const kittenThreeImage = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenThreeName = 'Cielo';
const kittenThreeNameUpper = kittenThreeName.toUpperCase();
console.log(kittenThreeNameUpper);
const kittenThreeDesc =
  'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThreeRace = 'Maine Coon';

const kittenThree = ` <li class="card">
<img
  class="card_img"
  src="${kittenThreeImage}"
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenThreeNameUpper}</h3>
<h4 class="card_race3">${kittenThreeRace}</h4>
<p class="card_description">${kittenThreeDesc}</p>
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






//declarar variables con los input de desc, name, race, url



const inputImage = document.querySelector('.js-input-image');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-raza');
const inputDesc = document.querySelector('.js-input-desc');



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
  

  const url = inputImage.value;
  const name = inputName.value;
  const raza = inputRace.value;
  const desc = inputDesc.value;

  // Estábamos pasando la función sin pasarle los argumentos
  kittenList.innerHTML += renderKitten(url, name, raza, desc);
}



const alertEmptyFields = ()=>{
  const raza = inputRace.value;
  const desc = inputDesc.value;
  const alert = document.querySelector('.js-alert');

  if(raza === "" || desc === ""){
    alert.textContent = 'Por favor, complete ambos campos.';
  } else {
    alert.textContent = '';
  }
}

// Se escucha al boton de añadir que al hacer click ejecuta la función que añade un gato nuevo, que a su vez recoge los valores de los inputs del formulario e invoca a la función que crea la tarjeta 

const handleClickaddNewKitten = (event)=>{
  event.preventDefault();
  /*hideNewCatForm();*/
  alertEmptyFields();
  addNewKitten();
  
};

addKittenButton.addEventListener('click', handleClickaddNewKitten);




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



//Buscar por descripción



const input_search_desc = document.querySelector('.js_in_search_desc');
const searchBtn = document.querySelector('.js_search_btn');

const filterKitten = (event) => {
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
};


const handleClickAlert = (event)=>{
    event.preventDefault();
    filterKitten();
   /* alertEmptyFields();*/
};

searchBtn.addEventListener('click', handleClickAlert);



