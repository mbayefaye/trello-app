import React from 'react';
import KanbanBoard from './kanbanBoard/KanbanBoard';

const KanbanBoardContainer = ({ cards }) => {
  return (
    <div>
      <KanbanBoard cards={cards} />
    </div>
  );
};

export default KanbanBoardContainer;
