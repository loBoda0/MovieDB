import fetchMovies from './movies/fetchMovies'
import './styles/main.scss'
import logo from './assets/tmdb-logo.svg'
import plus from './assets/plus.svg'
import displayMovies from './movies/displayMovies'

const logoImg = document.getElementById('logoImg')
logoImg.src = logo

const plusImg = document.getElementById('plusImg')
plusImg.src = plus

const movies = await fetchMovies()

displayMovies(movies)