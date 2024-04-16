'use strict';

const kittenList = document.querySelector('.js-list');
const addKittenSection = document.querySelector('.js-new-kitten');
const newForm = document.querySelector('.js-new-form');
const showFormButton = document.querySelector('.js-kitten-add');
const addKittenButton = document.querySelector('.js-btn-add');
const inputImage = document.querySelector('.js-input-image');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-raza');
const inputDesc = document.querySelector('.js-input-desc');
const buttonCancel = document.querySelector('.js-button-cancel');
const input_search_desc = document.querySelector('.js_in_search_desc');
const input_search_race = document.querySelector('.js_in_search_race');
const searchBtn = document.querySelector('.js_search_btn');


// const kittenDataList = [
//   {
//     image: 'https://dev.adalab.es/gato-siames.webp',
//     name:'Anastacio',
//     desc:  'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
//     race: '',
//   },
//   {
//     image: 'https://dev.adalab.es/sphynx-gato.webp',
//     name:'Fiona',
//     desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
//     race: '',
//   },
//   {
//     image: 'https://dev.adalab.es/maine-coon-cat.webp',
//     name:'Cielo',
//     desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
//     race:'Maine Coon',
//   }
// ]

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
  race:'Maine Coon',
}

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];
console.log(kittenDataList[0]);

// Raza

const noRace = (kitten) =>{

  
  if (kitten.race === '') {
    kitten.race = `Uy que despiste, no sabemos su raza`;
  } 
  
  };
  
  noRace(kittenData_1);
  noRace(kittenData_2);
  noRace(kittenData_3);


function renderKitten(kittenData){

  return `<li class="card">
  <article>
    <img
      class="card_img"
      src=${kittenData.image}
      alt="cat"
    />
    <h3 class="card_title">${kittenData.name.toUpperCase()}</h3>
    <h4 class="card_race js-race">${kittenData.race}</h4>
    <p class="card_description">${kittenData.desc}</p>
  </article>
  </li>`; 
  
}

function renderKittenList() {
  kittenList.innerHTML = "";
  for (const kitten of kittenDataList){
    kittenList.innerHTML += renderKitten(kitten);
  }

}

renderKittenList(kittenDataList);

// kittenList.innerHTML = renderKitten(kittenData_1) + renderKitten(kittenData_2) + renderKitten(kittenData_3);



//Show/Hide New Kitten form


function showNewCatForm() {
  addKittenSection.classList.remove('collapsed');
}
function hideNewCatForm() {
  addKittenSection.classList.add('collapsed');
}


function handleClickNewCatForm(event) {
  event.preventDefault();
  if (addKittenSection.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}


showFormButton.addEventListener('click', handleClickNewCatForm);

// Cancel Button

buttonCancel.addEventListener('click', (event)=>{
  addKittenSection.classList.add('collapsed');
  newForm.reset();
});


//New kitten

const kittenData = {
  image: '',
  name: '',
  desc: '',
  race: '',
};


const handleNewKitten = (event) => {
  const valueInput = event.target.value;
  const idInput = event.target.id;
  kittenData[idInput] = valueInput;
  
  console.log(event.target.value);
}

newForm.addEventListener('input', handleNewKitten);


const alertEmptyFields = ()=>{
  const raza = inputRace.value;
  const desc = inputDesc.value;
  const alert = document.querySelector('.js-alert');

  if(raza === "" || desc === ""){
    alert.textContent = 'Por favor, complete ambos campos.';
  } else {
    alert.textContent = '';
    kittenList.innerHTML += renderKitten(kittenData);
    hideNewCatForm();
  }
}


const handleClickaddNewKitten = (event)=>{
  event.preventDefault();
  alertEmptyFields();
};

addKittenButton.addEventListener('click', handleClickaddNewKitten);




//Buscar por descripción


const filterKitten = () => {
  // const descSearchText = input_search_desc.value;
  // let descSearchTextUpper = descSearchText.toUpperCase();
  // const raceSearchText = input_search_race.value;
  // const raceSearchTextUpper = raceSearchText.toUpperCase();

  // const kittenOneDescUpper = kittenData_1.desc.toUpperCase();
  // const kittenTwoDescUpper = kittenData_2.desc.toUpperCase();
  // const kittenThreeDescUpper = kittenData_3.desc.toUpperCase();

  kittenList.innerHTML = '';

  for (const kitten of kittenDataList){
    if (kitten.desc.includes(input_search_desc.value) || kitten.race.includes(input_search_race.value)){
      kittenList.innerHTML += renderKitten(kitten);

    }

    // if ((kitten.race === input_search_race.value) || (kitten.desc.includes(input_search_desc.value))){
    //   kittenList.innerHTML += renderKitten(kitten);
    // }
  }


  // if(descSearchTextUpper === ''){
  //   descSearchTextUpper = undefined;
  // }

  // if((kittenOneDescUpper.includes(descSearchTextUpper)) || (kittenData_1.race.toUpperCase() === raceSearchTextUpper)) {
  //   kittenList.innerHTML += renderKitten(kittenData_1);
  //   console.log(kittenOneDescUpper);
  //   console.log(descSearchTextUpper);
  // } 
  // if(kittenTwoDescUpper.includes(descSearchTextUpper) || kittenData_2.race.toUpperCase() === raceSearchTextUpper) {
  //   kittenList.innerHTML += renderKitten(kittenData_2);
  // }
  // if(kittenThreeDescUpper.includes(descSearchTextUpper) || kittenData_3.race.toUpperCase() === raceSearchTextUpper) {
  //   kittenList.innerHTML += renderKitten(kittenData_3);
  // } 
  
};


const handleClickSearch = (event)=>{
    event.preventDefault();
    filterKitten();
   
};

searchBtn.addEventListener('click', handleClickSearch);



