import { useState } from 'react'
import './taskList.css'
import { ButtonIcon } from './ButtonIcon'

export function TaskList({tasks,anyTask,onDelete,onEdit,onToggleTask}){
    const [editingId, setEditingId] = useState(null)
    const [newText,setNewText] = useState('')

    const editMode = (task) => {
        setEditingId(task.id)
        setNewText(task.text)
    }

    const saveEdit = (id) => {
        onEdit(id,newText)
        setEditingId(null)
    }

    return (
        <ul className='displayTask'>
            {
                tasks.length === 0
                ? <p>{anyTask ? 'No hay tareas en esta categoría' : 'No tienes ninguna tarea'}</p>
                : tasks.map((task,index) => {
                    return (
                    <li className='elementTask' key={task.id}>
                        <div className='row'>
                            <input type="checkBox" checked={task.completed} onChange={() => onToggleTask(task.id)}/>
                            { editingId === task.id 
                                ? <input type='text' value={newText} onChange={e => setNewText(e.target.value)}/>
                                : <p>{task.text}</p>
                            }
                        </div>
                        <div className='row'>
                            { editingId === task.id 
                                ? <ButtonIcon icon="done" onClick={() => saveEdit(task.id)}/>
                                : <ButtonIcon icon="edit" onClick={() => editMode(task)}/>
                            }
                            <ButtonIcon icon="delete" onClick={() => onDelete(task.id)}/>
                        </div>
                    </li>
                    )
                })
            }
        </ul>
    )
}