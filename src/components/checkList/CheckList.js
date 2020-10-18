import React from 'react';
import './style.css';
const CheckList = ({ cardId, tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <li className='checkList_task' key={cardId}>
          <input type='checkbox' defaultChecked={task.done} />
          {task.name}
          <a href='#che' className='checkList_task--remove' />
        </li>
      ))}
    </div>
  );
};

export default CheckList;
