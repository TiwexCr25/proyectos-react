import './index.css'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <div className='App'>
            <TwitterFollowCard
                userName="tiwexCR25"
                name="Cristian Vargas Arredondo"
            />
            <TwitterFollowCard
                userName="pedro"
                name="Pedro Torres"
            />
            <TwitterFollowCard
                userName="juan"
                name="Juan Perez"
            />
        </div>
    )
}