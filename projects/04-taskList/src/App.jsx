import { useState } from 'react'
import './App.css'
import './taskList.css'
import { TaskList } from './taskList.jsx'
import { FilterButtons } from './filterButtons.jsx'

function App() {
  const [text,setText] = useState('')
  const [tasks,setTasks] = useState(
    [
    { id: 1, text: "Estudiar React", completed: false },
    { id: 2, text: "Practicar CSS", completed: true },
    { id: 3, text: "Repasar JavaScript", completed: false }
    ]
  )

  const addTask = () =>{
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
      <TaskList tasks={tasks} onDelete={deleteTask}/>
    </div>
  )
}

export default App
