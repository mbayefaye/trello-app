import React from 'react';
import Card from '../card/Card';
import './style.css';
const List = ({ title, cards }) => {
  return (
    <div className='list'>
      <h1>{title}</h1>
      {cards.map((card) => (
        <Card
          id={card.id}
          title={card.title}
          description={card.description}
          tasks={card.tasks}
        />
      ))}
    </div>
  );
};

export default List;
