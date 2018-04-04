import React from 'react';
import Header from './Header/Header';
import Filter from './Filter/Filter';
import Data from './fake-data';

const filterTypes = ['Director', 'Country', 'Year', 'Genre'];

const filterValues = (data, filterType) => {
  return [...new Set(data.map(movie => movie[filterType].split(/\s?,\s?/)).reduce((acc, curr) => acc.concat(curr), []))];
}

const Movie = (data) => {
  return (
    <li>
      <article className="movie">
        <img src="//unsplash.it/100x150?random" alt="" />
        <header>
          <h1>{data['Title']}</h1>
        </header>
        <p>{data['Plot']}</p>
        <footer>
          <ul className="tags">
            <li>{data['Director']}</li>
            <li>{data['Country']}</li>
            <li>{data['Year']}</li>
            <li>{data['Genre']}</li>
            <li>{data['Runtime']}</li>
            <li>{data['imdbID']}</li>
          </ul>
        </footer>
      </article>
    </li>
  )
}

const MovieFinder = (props) => {
  return (
    <div className="MovieFinder">
      <Header title="Movie Finder" />

      {filterTypes.map(filter => <Filter key={filter} name={filter} items={filterValues(Data, filter)} />)}

      <main>
        <h2>Showing {Data.length} films</h2>
        <ul>
          {Data.map(movie => <Movie key={movie['imdbID']} {...movie} />)}
        </ul>
      </main>
    </div>
  );
}

export default MovieFinder;
