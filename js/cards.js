
//card
//const imgMovies = document.querySelectorAll(".imgMovie");

//open the modal
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

};



//addEventListener("click", openModal);
//close the modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};


//create the modal
//card modal
async function modalDOM(){
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  
  const imgModal = document.getElementsByName('backdrop');

  imgModal.setAttribute('id', 'movie.id');
  imgModal.setAttribute('src', 'arton14118.png');

  titleModal.textContent = 'Title';

  genreModal.textContent = 'Action';

  overviewModal.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio quidem quibusdam necessitatibus aliquid illum repellat tenetur consectetur dolores quia. Libero atque aliquam iure quaerat voluptatum et nobis, doloremque accusantium quia!';

  voteModal.textContent = '6,7';

  voteCountModal.textContent = '74';
  
  //close the modal
  buttonModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
}


modalDOM()