import { useState } from "react"

export function Contador() {
    const [count,setCount] = useState(0)
    const [display,setDisplay] = useState(true)
    const [history,setHistory] = useState([])

    const addValue = (value) => {
        const result = count + value
        if (result < 0 || result > 10) {
            return
        }
        const operation = 
        `
        ${count} -> ${result} --- ${value > 0 ? 'Sumaste 1' : 'Restaste 1'}
        `
        setCount(result)
        setHistory(history => 
            [
                ...history,
                {
                    text: operation,
                    type: value > 0 ? 'suma' : 'resta',
                    previous: count
                }
            ]
        )
    }

    const multiplyValue = () => {
        let result = count * 2
        if (result > 10) result = 10
        const operation = 
        `
        ${count} -> ${result} --- ${result >= 10 ? 'Limite alcanzado' : 'Multiplicaste por 2'}
        `
        setCount(result)
                setHistory(history => 
            [
                ...history,
                {
                    text: operation,
                    type: 'mult',
                    previous: count
                }
            ]
        )
    }

    const resetValue = () => {
        setCount(0)
        setHistory([])
    }

    const toggleDisplay = () => {
        setDisplay(display => !display)
    }

    const deleteOperation = (index) => {
        setHistory(history => history.filter((_,currentIndex) => currentIndex !== index))
    }

    const undo = () => {
        const lastOp = history[history.length - 1];
        if (!lastOp) return
        setCount(lastOp.previous)
        setHistory(history => history.slice(0,-1))
    }

    return (
        <div className="countContainer">
            <h1>Contador</h1>
            <div className="displayCount">
                <p>Valor: </p>
                <span>{`${display ? count : ''}`}</span>
                <button onClick={toggleDisplay}>{`${display ? 'Ocultar' : 'Mostrar'}`}</button>
            </div>
            <hr />
            <button onClick={() => addValue(1)} disabled={count === 10} >+</button>
            <button onClick={resetValue} >Reiniciar</button>
            <button onClick={() => addValue(-1)} disabled={count === 0} >-</button>
            <button onClick={multiplyValue}>x2</button>
            <button onClick={undo} disabled={history.length === 0}>Deshacer</button>
            <h1>Historial:</h1>
            <ul>
                {
                    history.map((h,index) => {
                        return <li key={index}>
                            {h.text}
                            <button onClick={() => deleteOperation(index)}>Eliminar</button>
                            </li>
                    })
                }
            </ul>
        </div>
    )
}