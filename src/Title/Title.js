import React from 'react';

const Title = ({ title, level = 1 }) => {
  const Level = `h${level}`

  return (
      <Level>{title}</Level>
  );
}

export default Title;
