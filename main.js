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


const addKittenSection = document.querySelector('.js-new-kitten');

const newForm = document.querySelector(".js-new-form")

const newKittenButton = document.querySelector(".js-kitten-add");

newKittenButton.addEventListener("click", (event)=>{
  addKittenSection.classList.toggle('collapsed');
  console.log(event.currentTarget);
  console.log(event.target);
});


const buttonCancel = document.querySelector('.js-button-cancel');

buttonCancel.addEventListener('click', (event)=>{
  addKittenSection.classList.add('collapsed');
  newForm.reset();
});



//búsqueda

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




