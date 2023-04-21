const moviesWrapper = document.getElementById("movies-wrapper")

const displayMovies = (movies) => {
  console.log(movies)
  movies.forEach(movie => {
    generateMovieCard(movie)
  });
}

const generateMovieCard = (movie) => {
  const movieEl = document.createElement('div')
  movieEl.classList.add('card')

  movieEl.innerHTML = `
    <img
      src="https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}"
      alt="supermario"
    />
    <div class="content">
      <h2>${movie.title}</h2>
      <p>${movie.release_date}</p>
    </div>`

  moviesWrapper.appendChild(movieEl)
}

export default displayMovies