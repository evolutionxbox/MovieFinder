import React from 'react';
import { connect } from 'react-redux'
import Header from './Header/Header';
import Filter from './Filter/Filter';

const mapStateToProps = (state, ownProps) => {
  return {
    types: state.types,
    filters: state.filters,
    movies: state.movies
  }
}

const Movie = (data) => {
  return (
    <article className="movie">
      <a href="">
        <img src={data['Poster']} alt="" />
        <header>
          <h1>{data['Title']}</h1>
        </header>
        <p>{data['Plot']}</p>
        <footer>
          <ul className="tags">
            <li>{data['Director'].join(', ')}</li>
            <li>{data['Country'].join(', ')}</li>
            <li>{data['Year'].join(', ')}</li>
            <li>{data['Genre'].join(', ')}</li>
            <li>{data['Runtime']}</li>
            <li>{data['imdbID']}</li>
          </ul>
        </footer>
      </a>
    </article>
  )
}

const getEnabledFilters = filters => filters.filter(({ isEnabled }) => isEnabled)

const getFilteredMovies = (movies, enabledFilters) => movies.filter(movie => {
  return enabledFilters.filter( ({type, value}) => {
    return movie[type].indexOf(value) !== -1
  }).length === enabledFilters.length
})

const pluralise = string => count => (count > 1 || count === 0) ? `${string}s` : string

const MovieFinder = ({types, filters, movies}) => {
  const enabledFilters = getEnabledFilters(filters)
  const filteredMovies = getFilteredMovies(movies, enabledFilters)

  return (
    <div className="MovieFinder">
      <Header title="Movie Finder" />
      {
        types.map(type => {
          return {
            type,
            items: filters.filter(filter => filter.type === type)
          }
        }).map(type => <Filter key={type.type} type={type.type} items={type.items} />)
      }
      <main>
        <h2>Showing {filteredMovies.length} {pluralise('film')(filteredMovies.length)}</h2>
        {filteredMovies.map(movie => <Movie key={movie['imdbID']} {...movie} />)}
      </main>
    </div>
  )
}

export default connect(mapStateToProps)(MovieFinder);
