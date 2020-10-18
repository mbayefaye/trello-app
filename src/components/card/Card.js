import React, { useState } from 'react';
import CheckList from '../checkList/CheckList';
import './style.css';
const Card = ({ id, title, tasks, description }) => {
  const [cardDetails, setCardDetails] = useState(false);

  const toggleDetails = () => {
    setCardDetails(!cardDetails);
  };
  return (
    <div className='card'>
      <div className='card_title' onClick={toggleDetails}>
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
