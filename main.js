'use strict';

const kittenList = document.querySelector('.js-list');

const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name:'Anastacio',
  desc:  'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: '',
}
const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name:'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: '',
}

const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name:'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race:'maine coon',
}



const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenData_1.image}"
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenData_1.name.toUpperCase()}</h3>
  <h4 class="card_race js-race1">${kittenData_1.race.toUpperCase()}</h4>
  <p class="card_description">${kittenData_1.desc}</p>
</article>
</li>`; 


const kittenTwo = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenData_2.image}"
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenData_2.name.toUpperCase()}</h3>
  <h4 class="card_race js-race2">${kittenData_2.race.toUpperCase()}</h4>
  <p class="card_description">${kittenData_2.desc}</p>
</article>
</li>`;


const kittenThree = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenData_3.image}"
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenData_3.name.toUpperCase()}</h3>
  <h4 class="card_race js-race3">${kittenData_3.race.toUpperCase()}</h4>
  <p class="card_description">${kittenData_3.desc}</p>
</article>
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

const kittenData = {
  image: '',
  name: '',
  desc: '',
  race: '',
};




function renderKitten(kittenData){

  const newCat = `<li class="card">
  <article>
    <img
      class="card_img"
      src=${kittenData.image}
      alt="cat"
    />
    <h3 class="card_title">${kittenData.name}</h3>
    <h4 class="card_race js-race">${kittenData.race}</h4>
    <p class="card_description">${kittenData.desc}</p>
  </article>
  </li>`; 
  return newCat;
}

//Y después creamos una función que recoja el value de cada input que hemos llamado con las variables anteriores, cada value en una variable una variable. Y le decimos que lo sume a la lista de gatos que tenemos invoando a la función que crea la tarjeta, pasando esas variables como argumentos



const handleNewKitten = (event) => {
  const valueInput = event.target.value;
  const idInput = event.target.id;
  kittenData[idInput] = valueInput;
  
  console.log(event.target.value);
}


newForm.addEventListener('input', handleNewKitten);





/*function addNewKitten(event) {
  

  const url = inputImage.value;
  const name = inputName.value;
  const raza = inputRace.value;
  const desc = inputDesc.value;

  // Estábamos pasando la función sin pasarle los argumentos
  kittenList.innerHTML += renderKitten(url, name, raza, desc);
}*/


const alertEmptyFields = ()=>{
  const raza = inputRace.value;
  const desc = inputDesc.value;
  const alert = document.querySelector('.js-alert');

  if(raza === "" || desc === ""){
    alert.textContent = 'Por favor, complete ambos campos.';
  } else {
    alert.textContent = '';
    kittenList.innerHTML += renderKitten(kittenData);
    // handleNewKitten();
    hideNewCatForm();
  }
}

// Se escucha al boton de añadir que al hacer click ejecuta la función que añade un gato nuevo, que a su vez recoge los valores de los inputs del formulario e invoca a la función que crea la tarjeta 

const handleClickaddNewKitten = (event)=>{
  event.preventDefault();
  alertEmptyFields();
};

addKittenButton.addEventListener('click', handleClickaddNewKitten);




// raza ya FUNCIONA

const noRace = () =>{

const kittenRace1 = document.querySelector(".js-race1");
if (kittenData_1.race === "") {
  kittenRace1.innerHTML = `Uy que despiste, no sabemos su raza`;
} 

const kittenRace2 = document.querySelector(".js-race2");
if (kittenData_2.race === "") {
  kittenRace2.innerHTML = `Uy que despiste, no sabemos su raza`;
} 

const kittenRace3 = document.querySelector(".js-race3");
if (kittenData_3.race === "") {
  kittenRace3.innerHTML = `Uy que despiste, no sabemos su raza`;
} 

};

noRace();





//Buscar por descripción



const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector('.js_in_search_race');
const searchBtn = document.querySelector('.js_search_btn');

const filterKitten = () => {
  const descSearchText = input_search_desc.value;
  const descSearchTextUpper = descSearchText.toUpperCase();

  const kittenOneUpper = kittenOne.toUpperCase();
  const kittenTwoUpper = kittenTwo.toUpperCase();
  const kittenThreeUpper = kittenThree.toUpperCase();

  kittenList.innerHTML = " ";

  if(kittenOneUpper.includes(descSearchTextUpper)) {
    kittenList.innerHTML += kittenOne;
  } 
  if(kittenTwoUpper.includes(descSearchTextUpper)) {
    kittenList.innerHTML += kittenTwo;
  }
  if(kittenThreeUpper.includes(descSearchTextUpper)) {
    kittenList.innerHTML += kittenThree;
  } 
  if(kittenOneUpper.includes(descSearchTextUpper) === false && kittenTwoUpper.includes(descSearchTextUpper) === false && kittenThreeUpper.includes(descSearchTextUpper) === false){
    kittenList.innerHTML ='<p class="noKitten">No hay ningún gatito con esa característica.<p>';
  }

  
};


// Búsqueda por raza FUNCIONA SÓLO UNA BÚSQUEDA A LA VEZ

const filterRaceKitten = (event) => {
  const raceSearchText = input_search_race.value;
  const raceSearchTextUpper = raceSearchText.toUpperCase();
  
  kittenList.innerHTML = " ";

  if(kittenData_1.race.toUpperCase() === raceSearchTextUpper) {
    kittenList.innerHTML += kittenOne;
  } 
  if(kittenData_2.race.toUpperCase() === raceSearchTextUpper) {
    kittenList.innerHTML += kittenTwo;
  }
  if(kittenData_3.race.toUpperCase() === raceSearchTextUpper) {
    kittenList.innerHTML += kittenThree;
  } 

  console.log(raceSearchTextUpper);
  
  // if(kittenData_1.race.toUpperCase() !== raceSearchTextUpper && kittenData_2.race.toUpperCase !== raceSearchTextUpper && kittenData_3.race.toUpperCase !== raceSearchTextUpper){
  // kittenList.innerHTML ='<p class="noKitten">No hay ningún gatito de esa raza.<p>';
  // }
};


const handleClickSearch = (event)=>{
    event.preventDefault();
    // filterKitten();
    filterRaceKitten();;
    
   /* alertEmptyFields();*/
};

searchBtn.addEventListener('click', handleClickSearch);



