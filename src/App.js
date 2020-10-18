import React from 'react';
import './App.css';
import { Data } from '../src/dataModel';

import KanbanBoardContainer from './components/KanbanBoardContainer';

function App() {
  return (
    <div>
      <KanbanBoardContainer cards={Data} />
    </div>
  );
}

export default App;
