import React, { Component } from 'react';
import Header from './Header/Header';

class MovieFinder extends Component {
  render() {
    return (
      <div className="MovieFinder">
        <Filter name="Genre" items={[{name: 'Hello', id: 'hello1'}]} />
      </div>
    );
  }
}

export default MovieFinder;
