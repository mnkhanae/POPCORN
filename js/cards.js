

//card
const imgMovie = document.querySelector("#imgMovie");


//open the modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
imgMovie.addEventListener("click", openModal);
//close the modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};


//create the modal
//card modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const headerModal = document.createElement('div');
headerModal.classList.add('moviePoster');
const imgModal = document.createElement('img');
headerModal.classList.add('moviePoster');
imgModal.setAttribute('id', 'backdrop');
imgModal.setAttribute('src', 'arton14118.png');

const buttonModal = document.createElement('button');
buttonModal.classList.add('btn-close');
buttonModal.textContent = 'X';

headerModal.appendChild(imgModal);
headerModal.appendChild(buttonModal);

modal.appendChild(headerModal);

const detailsModal = document.createElement('div');
detailsModal.classList.add('MovieDetails');
const titleModal = document.createElement('h2');
titleModal.setAttribute('id', 'title');
titleModal.textContent = 'Title';
const genreModal = document.createElement('h3');
genreModal.setAttribute('id', 'genre');
genreModal.textContent = 'Action';
const overviewModal = document.createElement('p');
overviewModal.setAttribute('id', 'overview');
overviewModal.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quidem quibusdam necessitatibus aliquid illum repellat tenetur consectetur dolores quia. Libero atque aliquam iure quaerat voluptatum et nobis, doloremque accusantium quia!';
const voteModal = document.createElement('h5');
voteModal.setAttribute('id', 'vote');
voteModal.textContent = '6,7';
const voteCountModal = document.createElement('h5');
voteCountModal.setAttribute('id', 'voteCount');
voteCountModal.textContent = 'Action';

detailsModal.appendChild(titleModal);
detailsModal.appendChild(genreModal);
detailsModal.appendChild(overviewModal);
detailsModal.appendChild(voteModal);
detailsModal.appendChild(voteCountModal);
modal.appendChild(detailsModal);
//close the modal
buttonModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
