const axios = require("axios")


const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=cc8f455ba1e9727d0965c8b297527d8c'

const fetchMovies = async () => {
  const res = await axios.get(API_URL)
  const { data: { results } } = res
  return results
}

export default fetchMovies