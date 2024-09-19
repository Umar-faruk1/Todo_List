import React, { useState } from 'react'

const TodoList = () => {
    const [tasks, setTasks] = useState(['Take a bow', 'Drink some water'])
  const [newTask, setNewTask] = useState('')

  const handleInputChange = (e) =>{
    setNewTask(e.target.value)
  }

  const addTask = () =>{
    if(newTask.trim()!== ''){
      setTasks(prevTask => [...prevTask, newTask])
      setNewTask('')
    }
    
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };
  const deletTask = (index) =>{
    const updatedTask = tasks.filter((_, i) => i !== index)
    setTasks(updatedTask)
  }
  const moveTaskUp = (index) =>{
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }
  const moveTaskDown = (index) =>{
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }
  return (
    <div className='to-do-list'>
        <h1>My Todo List</h1>
      <div>
        <input className='input-field' type="text" placeholder='Enter a todo...' value={newTask} onChange={(e)=>handleInputChange(e)} onKeyDown={handleKeyDown} />
        <button className='add-btn' onClick={()=>addTask()}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index)=> <li key={index}><span className='text'>{task}</span>
        <button className='delete-btn' onClick={()=>deletTask(index)}>Delete</button>
        <button className='move-btn' onClick={()=>moveTaskUp(index)}>Up</button>
        <button className='move-btn' onClick={()=>moveTaskDown(index)}>Down</button>
        </li>)}
      
      </ol>
    </div>
  )
}

export default TodoList