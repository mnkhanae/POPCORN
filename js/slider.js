async function fetchMovies(type, category, containerClass) {
    const TMDB_AUTH_TOKEN = "f1abd4ebd24b4591245c41c076422929";
    try {
        const response = await fetch(`https://api.themoviedb.org/3/${category}/${type}?api_key=${TMDB_AUTH_TOKEN}`);
        const data = await response.json();
        const carousel = document.querySelector(`.${containerClass}`);

        data.results.forEach(movie => {
            const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            const carouselImage = document.createElement('div');
            carouselImage.classList.add('carouselImage');
            carouselImage.setAttribute('data-id', movie.id);  // Add this line

            const imgElement = document.createElement('img');
            imgElement.classList.add('imgMovie');
            imgElement.setAttribute('src', imageUrl);

            carouselImage.appendChild(imgElement);
            carousel.appendChild(carouselImage);
        });

        // Initialize Flickity
        const flkty = $(`.${containerClass}`).flickity({
            cellAlign: 'left',
            friction: 0.3,
            selectedAttraction: 0.1,
            autoPlay: getRandomDuration(),  // Set initial random duration
            wrapAround: true  // Enable infinite loop
        });

        // Function to get a random duration between 5 to 15 seconds
        function getRandomDuration() {
            return Math.floor(Math.random() * (1500 - 500 + 1)) + 5000;
        }

        // Update autoPlay duration on slide change
        flkty.on('change', function () {
            flkty.flickity('pausePlayer');  // Pause the current autoplay
            flkty.flickity('option', 'autoPlay', getRandomDuration());  // Update with new random duration
            flkty.flickity('playPlayer');  // Resume autoplay
        });


    } catch (error) {
        console.error("Error:", error);
    }
}

// Fetch Latest 2023 movies
fetchMovies('popular', 'movie', 'carouselOfLatest2023', 2023);
fetchMovies('top_rated', 'movie', 'carouselOfTopRatedMovies');
fetchMovies('upcoming', 'movie', 'carouselOfUpcomingMovies');
fetchMovies('now_playing', 'movie', 'carouselOfNowPlayingMovies');

// Fetch different types of TV shows
fetchMovies('popular', 'tv', 'carouselOfPopularTV');
fetchMovies('top_rated', 'tv', 'carouselOfTopRatedTV');
fetchMovies('on_the_air', 'tv', 'carouselOfOnTV');
fetchMovies('airing_today', 'tv', 'carouselOfAiringToday');


document.addEventListener('click', function (e) {
    if (e.target.closest('.carouselImage')) {
        const movieId = e.target.closest('.carouselImage').getAttribute('data-id');
        console.log('Clicked movie ID:', movieId);
    }
});
