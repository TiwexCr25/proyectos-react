import './taskList.css'

export function TaskList({tasks}){
    return (
        <ul className='displayTask'>
            {
                tasks.map((task,index) => {
                    return (
                    <li className='elementTask' key={index}>
                        <input type="checkBox" />
                        <p>{task.text}</p>
                    </li>
                    )
                })
            }
        </ul>
    )
}