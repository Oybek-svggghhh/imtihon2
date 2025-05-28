let currentMovies = [...movies]; 
console.log(currentMovies)
const movie = [
    {
        title: "Peter Rabbit",
        year: 2018,
        rating: 6.6,
        duration: "1 hr 35 min",
        genre: "Adventure Animation Comedy",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvakm_zio2J6a-PadL8SE6DjgZOB_5FlJz3w&s"
    }
];
  
function displayMovies(list) {
    const container = document.getElementById("moviesContainer");
    let html = "";
    list.slice(0, 18).forEach(movie => {
        html += `
        <div class="movie-card">
            <img src="${movie.ImageURL}" alt="${movie.title}" />
            <h3>${movie.Title}</h3>
            <div class="info">${movie.imdb_rating} | ${movie.movie_year} | ${movie.runtime}</div>
            <div class="info">${movie.Categories}</div>
            <button>More Info</button>
        </div>
        `;
    });
    container.innerHTML = html;
}

function searchMovies() {
    const query = document.getElementById("searchInput").value;
    const filteredMovies = movies.filter((movie) => {
       return String(movie.Title).toLowerCase().includes(query.toLowerCase())
    })
    displayMovies(filteredMovies);
}

function sortMovies() {
    currentMovies.sort((a, b) => b.rating - a.rating);
    displayMovies(currentMovies);
}

function filterByGenre() {
    const genre = document.getElementById("genreFilter").value;
    if (genre === "all") {
        currentMovies = [...movies];
    } else {
        currentMovies = movies.filter(m => m.Categories.includes(genre));
    }
    displayMovies(currentMovies);
}

document.getElementById("genreFilter").addEventListener("change", filterByGenre);

window.onload = () => {
    displayMovies(currentMovies);
};
