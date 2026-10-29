import './App.css'
import './taskList.css'
import { TaskList } from './taskList.jsx'

function App() {

  const tasks = [
    { id: 1, text: "Estudiar React", completed: false },
    { id: 2, text: "Practicar CSS", completed: true },
    { id: 3, text: "Repasar JavaScript", completed: false }
  ]

  return (
    <div className='mainContainer'>
      <h1>Lista de Tareas</h1>
      <input type="text" name="" id="" />
      <button>Agregar Tarea</button>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default App
