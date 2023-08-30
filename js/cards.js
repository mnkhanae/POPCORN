
//card
//const imgMovies = document.querySelectorAll(".imgMovie");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
//open the modal
const openModal = function (movieID) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  modalDOM(movieID)

};



//addEventListener("click", openModal);
//close the modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

async function fetchMovieById(movieId) {
  const TMDB_AUTH_TOKEN = "f1abd4ebd24b4591245c41c076422929";
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_AUTH_TOKEN}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

//create the modal
//card modal
async function modalDOM(movieID){

  await fetchMovieById(movieID).then(data => {
    console.log(JSON.stringify(data));

    const imgModal = document.getElementsByClassName('backdrop')[0];

    imgModal.id = data.id;  // Set ID from data
    imgModal.setAttribute('src', `https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`);  // Set image src from data

    const titleModal = document.getElementById('title');
    titleModal.textContent = data.title;  // Set title from data

    const genreModal = document.getElementById('genre');
    genreModal.textContent = data.genres.map(genre => genre.name).join(', ');  // Set genres from data

    const overviewModal = document.getElementById('overview');
    overviewModal.textContent = data.overview;  // Set overview from data

    const voteModal = document.getElementById('vote');
    voteModal.textContent = data.vote_average;  // Set vote average from data

    const voteCountModal = document.getElementById('voteCount');
    voteCountModal.textContent = data.vote_count;  // Set vote count from data
  });


  
  //close the modal
  const buttonModal= document.getElementsByClassName("btn-close")[0]
  buttonModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
}


