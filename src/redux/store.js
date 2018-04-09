import { createStore } from 'redux'
import movieFinderApp from './reducers'
import fakeData from '../fake-data'
import { concatAll, concatMap, unique, csvLineToArray } from '../utils'

const getMovies = (movies) => {
  return movies.map(movie => {
    return {
      ...movie,
      Year: csvLineToArray(movie.Year),
      Genre: csvLineToArray(movie.Genre),
      Director: csvLineToArray(movie.Director),
      Writer: csvLineToArray(movie.Writer),
      Actors: csvLineToArray(movie.Actors),
      Country: csvLineToArray(movie.Country)
    }
  })
}

const getFilters = (movies, types) => {
  return concatMap(type => {
    return unique(concatAll(movies.reduce((acc, movie) => {
      return [...acc, movie[type]];
    }, []))).map(value => {
      return {
        id: value,
        type,
        value,
        isEnabled: false
      }
    })
  }, types)
}

const types = ['Director', 'Country', 'Year', 'Genre']
const movies = getMovies(fakeData)
const filters = getFilters(movies, types)

const initialState = {
  types: types,
  filters: filters,
  movies: movies
}

const store = createStore(movieFinderApp, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
