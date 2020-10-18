import React from 'react';
import './style.css';
const CheckList = ({ cardId, tasks }) => {
  return (
    <div className='checklist'>
      <ul>
        {tasks.map((task) => (
          <li className='checkList_task' key={cardId}>
            <input type='checkbox' defaultChecked={task.done} />
            {task.name}
            <a href='#che' className='checkList_task--remove' />
          </li>
        ))}
      </ul>
      <input
        type='text'
        className='checkList--add-task'
        placeholder='type then hit enter to add task'
      />
    </div>
  );
};

export default CheckList;
