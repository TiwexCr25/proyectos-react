import { useState } from 'react'

export function Contador(){
    const [count, setCount] = useState(0)

    const sumar = () => {
        setCount(count + 1)
    }
    const restar = () => {
        setCount(count - 1)
    }
    const reiniciar = () => {
        setCount(0)
    }
    return (
        <>
            <h1>Contador Interactivo</h1>
            <span>{count}</span>
            <button onClick={sumar}>Sumar</button>
            <button onClick={reiniciar}>Reiniciar</button>
            <button onClick={restar}>Restar</button>
        </>
    )
}