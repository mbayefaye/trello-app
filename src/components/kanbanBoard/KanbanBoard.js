import React from 'react';
import List from '../list/List';
import './style.css';

const KanbanBoard = ({ cards }) => {
  return (
    <div className='kanboard'>
      <List
        id='to do'
        title='To Do'
        cards={cards.filter((card) => card.status === 'todo')}
      />
      <List
        id='in-progress'
        title='in Progress'
        cards={cards.filter((card) => card.status === 'in-progress')}
      />

      <List
        id='done'
        title='Done'
        cards={cards.filter((card) => card.status === 'done')}
      />
    </div>
  );
};

export default KanbanBoard;
