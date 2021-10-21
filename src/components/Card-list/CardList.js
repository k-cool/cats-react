import React from 'react';
import { Card } from '../Card/Card';
import './CardList.scss';

export const CardList = props => {
  const { cats } = props;
  return (
    <div className="CardList">
      {cats.map(cat => (
        <Card key={cat.id} cat={cat} />
      ))}
    </div>
  );
};
