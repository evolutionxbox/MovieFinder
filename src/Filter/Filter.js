import React from 'react';
import Title from '../Title/Title';

const Filter = ({name, items}) => {
  return (
    <div className="filter">
      <Title title={name} level="3" />
      <ul>
        {items.map(item => {
          return <li key={item} onClick={() => console.log(item)}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default Filter;
