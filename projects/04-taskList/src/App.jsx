import { useState, useEffect } from 'react'
import './App.css'
import './taskList.css'
import { TaskList } from './taskList.jsx'
import { FilterButtons } from './filterButtons.jsx'

function App() {
  const [text,setText] = useState('')
  const [tasks,setTasks] = useState(() => {
    const savedTask = localStorage.getItem('tasks');
    return savedTask ? JSON.parse(savedTask) : [];
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks])

  const addTask = () =>{
    if (text.trim() === '') return
    const newTask = {
      id: tasks.length + 1,
      text: text,
      completed: false
    }
    
    setTasks([...tasks,newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const editTask = (id,newText) => {
    setTasks(tasks => tasks.map(task =>
      task.id === id
      ? {...task,text: newText}
      : task
    ))
  }

  const toggleTask = (id) => {
    setTasks(tasks => tasks.map(task =>
      task.id === id
      ? {...task,completed: !task.completed}
      : task
    ))
  }

  return (
    <div className='mainContainer'>
      <h1>Lista de Tareas</h1>

      <div className='InputTaskContainer'>
        <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTask}>Agregar Tarea</button>
      </div>

      <FilterButtons/>

      <hr />

      <TaskList tasks={tasks} 
      onDelete={deleteTask} 
      onEdit={editTask}
      onToggleTask={toggleTask}
      />
    </div>
  )
}

export default App
