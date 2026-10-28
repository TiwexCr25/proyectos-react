import { useState } from "react"
import './App.jsx'

export function Contador() {
    const [count,setCount] = useState(0);

    const addValue = (value) => {
        const result = count + value
        if (result < 0 || result > 10) {
            return
        }
        setCount(result)
    }

    const resetValue = () => {
        setCount(0)
    }

    return (
        <div className="countContainer">
            <h1>Contador</h1>
            <p>Valor: </p>
            <span>{count}</span>
            <hr />
            <button onClick={() => addValue(1)} >+</button>
            <button onClick={resetValue} >Reiniciar</button>
            <button onClick={() => addValue(-1)} >-</button>
        </div>
    )
}