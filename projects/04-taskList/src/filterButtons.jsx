import './taskList.css'

export function FilterButtons(){
    return (
        <div className="filterButtons">
            <button disabled={false}>Todos</button>
            <button disabled>Pendientes</button>
            <button disabled>Completados</button>
        </div>
    )
}