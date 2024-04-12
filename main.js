'use strict';

const kittenList = document.querySelector('.js-list');
const addKittenSection = document.querySelector('.js-new-kitten');
const newForm = document.querySelector('.js-new-form');
const showFormButton = document.querySelector('.js-kitten-add');
const inputImage = document.querySelector('.js-input-image');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-raza');
const inputDesc = document.querySelector('.js-input-desc');
const alertMessage = document.querySelector('.js-alert');
const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector('.js_in_search_race');
const searchBtn = document.querySelector('.js_search_btn');

const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name:'Anastacio',
  desc:  'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: '',
};
const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name:'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: '',
};

const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name:'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race:'maine coon',
};


/*const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenData_1.image}"
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenData_1.name}</h3>
  <h4 class="card_race">${kittenData_1.race}</h4>
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
  <h3 class="card_title">${kittenData_2.name}</h3>
  <h4 class="card_race">${kittenData_2.race}</h4>
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
  <h3 class="card_title">${kittenData_3.name}</h3>
  <h4 class="card_race">${kittenData_3.race}</h4>
  <p class="card_description">${kittenData_3.desc}</p>
</article>
</li>`;*/


// Plantilla de tarjeta de gatito
function renderKitten(kittenData) {
  return `
    <li class="card">
      <article>
        <img class="card_img" src="${kittenData.image}" alt="cat" />
        <h3 class="card_title">${kittenData.name}</h3>
        <h4 class="card_race">${kittenData.race}</h4>
        <p class="card_description">${kittenData.desc}</p>
      </article>
    </li>`;
}

// Agregar los gatitos iniciales al DOM
kittenList.innerHTML = renderKitten(kittenData_1) + renderKitten(kittenData_2) + renderKitten(kittenData_3);


function showNewCatForm() {
  addKittenSection.classList.remove('collapsed');
}
function hideNewCatForm() {
  addKittenSection.classList.add('collapsed');
}


showFormButton.addEventListener('click', () => {
  if (addKittenSection.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
});

//Crear la función que vamos a pasar de parámetro en el event listener con el código que se va a ejecutar al hacer click 

/*function handleClickNewCatForm(event) {
  event.preventDefault();
  if (addKittenSection.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}*/

//Escuchar el evento sobre el botón 

/*showFormButton.addEventListener('click', handleClickNewCatForm);*/
const cancelButton = document.querySelector('.js-button-cancel');
cancelButton.addEventListener('click', (event) => {
  event.preventDefault();
  newForm.reset(); // Resetear el formulario
  hideNewCatForm(); // Ocultar el formulario
});


newForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Obtener valores de los inputs
  const url = inputImage.value;
  const name = inputName.value;
  const race = inputRace.value;
  const desc = inputDesc.value;

  // Verificar que todos los campos están completos
  if (url !== '' && name !== '') {
    const newKittenData = {
      image: url,
      name: name,
      race: race,
      desc: desc
    };

    // Agregar la nueva tarjeta de gatito al html
    kittenList.innerHTML += renderKitten(newKittenData);

    // Resetear el formulario y ocultar el formulario
    newForm.reset();
    hideNewCatForm();
    alertMessage.textContent = '';
  } else {
    alertMessage.textContent = 'Por favor, complete todos los campos.';
  }
});

const filterKitten = () => {
  const searchText = input_search_desc.value;
  const cards = document.querySelectorAll('.card');
  let found = false;

  cards.forEach(card => {
    const desc = card.querySelector('.card_description').textContent;
    if (desc.includes(searchText)) {
      card.style.display = 'block';
      found = true;
    } else {
      card.style.display = 'none';
    }
});

  if (!found) {
    alertMessage.textContent = 'No hay ningún gatito con esa descripción.';
  } else {
    alertMessage.textContent = '';
  }
};

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("Botón de búsqueda clicado");
  filterKitten(); // Filtrar por descripción primero
  /*filterRaceKitten(); // Luego filtrar por raza*/
}); 

// raza FUNCIONA

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




/*buttonCancel.addEventListener('click', (event)=>{
  addKittenSection.classList.add('collapsed');
  newForm.reset();
});*/



//declarar variables con los input de desc, name, race, url




//Entonces tenemos que hacer una función que cree una card nueva con los parámetros que queremos que tenga.

/*const kittenData = {
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
    <h4 class="card_race">${kittenData.race}</h4>
    <p class="card_description">${kittenData.desc}</p>
  </article>
  </li>`; 
  return newCat;
}*/

//Y después creamos una función que recoja el value de cada input que hemos llamado con las variables anteriores, cada value en una variable una variable. Y le decimos que lo sume a la lista de gatos que tenemos invoando a la función que crea la tarjeta, pasando esas variables como argumentos



/*const handleNewKitten = (event) => {
  const valueInput = event.target.value;
  const idInput = event.target.id;
  kittenData[idInput] = valueInput;
  kittenList.innerHTML += renderKitten(kittenData);
}



kittenList.addEventListener('input', handleNewKitten);*/





/*function addNewKitten(event) {
  

  const url = inputImage.value;
  const name = inputName.value;
  const raza = inputRace.value;
  const desc = inputDesc.value;

  // Estábamos pasando la función sin pasarle los argumentos
  kittenList.innerHTML += renderKitten(url, name, raza, desc);
}*/


/*const alertEmptyFields = ()=>{
  const raza = inputRace.value;
  const desc = inputDesc.value;
  const alert = document.querySelector('.js-alert');

  if(raza === "" || desc === ""){
    alert.textContent = 'Por favor, complete ambos campos.';
  } else {
    alert.textContent = '';
    handleNewKitten()
    hideNewCatForm();;
  }
}*/

// Se escucha al boton de añadir que al hacer click ejecuta la función que añade un gato nuevo, que a su vez recoge los valores de los inputs del formulario e invoca a la función que crea la tarjeta 

/*const handleClickaddNewKitten = (event)=>{
  event.preventDefault();
  alertEmptyFields();
};

addKittenButton.addEventListener('click', handleClickaddNewKitten);*/







//Buscar por descripción


/*const filterKitten = (event) => {
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
};*/

//Búsqueda por raza NO FUNCIONA

/*const filterRaceKitten = (event) => {
  const descrSearchRace = input_search_desc.value;
  kittenList.innerHTML = " ";
  if(kittenOneRace === descrSearchRace) {
    kittenList.innerHTML += kittenOne;
  } 
  if(kittenTwoRace === descrSearchRace) {
    kittenList.innerHTML += kittenTwo;
  }
  if(kittenThreeRace === descrSearchRace) {
    kittenList.innerHTML += kittenThree;
  } 
  if(kittenOneRace !== descrSearchRace && kittenTwoRace !== descrSearchRace && kittenThreeRace !== descrSearchRace){
    kittenList.innerHTML ='<p class="noKitten">No hay ningún gatito de esa raza.<p>';
  }
};*/


/*const handleClickSearch = (event)=>{
    event.preventDefault();
    filterKitten() && filterRaceKitten();
   alertEmptyFields();
};*/

/*searchBtn.addEventListener('click', handleClickSearch);*/



