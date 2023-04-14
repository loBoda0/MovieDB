const axios = require("axios")


const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=cc8f455ba1e9727d0965c8b297527d8c'

async function fetchMovies() {
  const res = await axios.get(API_URL)
  const { data: { results } } = res
  results.forEach(result => {
    console.log(result.title)
  });
}

export default fetchMovies