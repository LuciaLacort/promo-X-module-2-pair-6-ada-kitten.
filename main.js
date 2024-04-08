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
  <h4 class="card_race">Siamés</h4>
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
<h4 class="card_race">Sphynx</h4>
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
<h4 class="card_race">Maine Coon</h4>
<p class="card_description">
  Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.
</p>
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

const input_search_desc = document.querySelector('.js_in_search_desc');

/*const kittenDesc1 = document.querySelector('.card_description')
console.log(kittenDesc1);

const kittenDesc2 = document.querySelector('.card_description')
console.log(kittenDesc2);

const kittenDesc3 = document.querySelector('.card_description')
console.log(kittenDesc3);*/


const searchBtn = document.querySelector('.js_search_btn');

searchBtn.addEventListener('click', (ev)=>{
  const descrSearchText = input_search_desc.value;
  console.log(descrSearchText);

  if(kittenOne.includes(descrSearchText) ) {
    kittenOne.classList.remove('collapsed');
  } else{
      kittenOne.classList.add('collapsed');
    }

  if( kittenTwo.includes(descrSearchText) ) {
    kittenTwo.classList.remove('collapsed');
  } else{
      kittenTwo.classList.add('collapsed');
    }
  if( kittenThree.includes(descrSearchText) ) {
    kittenThree.classList.remove('collapsed');
  } else{
    kittenThree.classList.add('collapsed');
  }
  
});







