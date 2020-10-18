import React, { useState } from 'react';
import CheckList from '../checkList/CheckList';
import './style.css';
const Card = ({ id, title, tasks, description, color }) => {
  const [cardDetails, setCardDetails] = useState(false);

  const toggleDetails = () => {
    setCardDetails(!cardDetails);
  };

  const sideColor = {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    bottom: 0,
    width: 7,
    backgroundColor: color
  };
  return (
    <div className='card'>
      <div style={sideColor} />
      <div
        className={
          cardDetails ? 'card_title card_title--is-open' : 'card_title'
        }
        onClick={toggleDetails}>
        {title}
      </div>
      {cardDetails ? (
        <div className='card_details'>
          {description}
          <CheckList cardId={id} tasks={tasks} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Card;
