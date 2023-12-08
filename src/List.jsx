import React, { useState } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import Button from 'react-bootstrap/Button';
import './App.css';

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
       <div className='container'>
  <input className="c-checkbox" type="checkbox" id="checkbox" />
  <div className="c-formContainer">
    <form className="c-form" action="">
        <ListGroup className="list-group-flush">
          
        <input
        className="c-form__input"
        placeholder="Add To DO Here !"
            type="text"
        
            value={newTask}
            onChange={handleInputChange}
          />
       
      <label className="c-form__buttonLabel" htmlFor="checkbox"><button className="c-form__button" type="button" onClick={handleAddTask}>
            Add To List
          </button></label>
          
          {tasks.map((task, index) => (
            <ListGroup.Item key={index}>
              {task}
              <Button
                variant="danger"
                size="sm"
                style={{ float: 'right' }}
                onClick={() => handleDeleteTask(index)}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <label
        className="c-form__toggle"
        htmlFor="checkbox"
        data-title="Notify me"
      />
        </form>
  </div>
</div>
   
    
  );
};

export default List;
