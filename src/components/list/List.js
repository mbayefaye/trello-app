import React from 'react';
import Card from '../card/Card';
import PropTypes from 'prop-types';

import './style.css';
const List = ({ title, cards }) => {
  return (
    <div className='list'>
      <h1>{title}</h1>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          color={card.color}
          title={card.title}
          description={card.description}
          tasks={card.tasks}
        />
      ))}
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default List;
