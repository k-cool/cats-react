import React from 'react';
import './Card.scss';

export const Card = props => {
  const { cat } = props;
  return (
    <div className="Card">
      <img
        className="img"
        alt="cat"
        src={`https://robohash.org/${cat.id}?set=set4&size=180x180`}
      />
      <h2 className="name">{cat.name}</h2>
    </div>
  );
};
