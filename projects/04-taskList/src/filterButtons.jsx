import { useState } from 'react'
import './taskList.css'

export function FilterButtons({onFilter}){
    const [arrayBolean,setArrayBolean] = useState([1,0,0])

    const changeFilter = (bolean) => {
        switch (bolean) {
            case null:
                setArrayBolean([1,0,0])
                break;
            case false:
                setArrayBolean([0,1,0])
                break;
            case true:
                setArrayBolean([0,0,1])
                break;
        }
        onFilter(bolean)
    }

    return (
        <div className="filterButtons">
            <button onClick={() => changeFilter(null)} disabled={arrayBolean[0] ? true : false}>Todos</button>
            <button onClick={() => changeFilter(false)} disabled={arrayBolean[1] ? true : false} >Pendientes</button>
            <button onClick={() => changeFilter(true)} disabled={arrayBolean[2] ? true : false}>Completados</button>
        </div>
    )
}