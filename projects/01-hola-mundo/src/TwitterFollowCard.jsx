import { useState } from "react";
 
export function TwitterFollowCard({userName = 'unknown',name = 'unknown'}){
    const [isFollowing, setIsFollowing] = useState(false);
    
    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';

    const imgSource = `https://unavatar.io/github/${userName}`;
    
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="El avatar"
                    src={imgSource}
                />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}