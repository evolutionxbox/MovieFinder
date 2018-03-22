import React, { Component } from 'react';
import Header from './Header/Header';
import Filter from './Filter/Filter';

class MovieFinder extends Component {
  render() {
    return (
      <div className="MovieFinder">
        <Header title="Movie Finder" />
        <Filter name="Genre" items={[{name: 'Hello', id: 'hello1'}]} />
      </div>
    );
  }
}

export default MovieFinder;
