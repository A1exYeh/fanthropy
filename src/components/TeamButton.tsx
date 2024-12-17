import React from 'react';

//interface to represent the attributes of the team button
interface TeamButtonProps {
    onClick: () => void; //function to handle on click behavior
    imgSrc: string; //some string value meant to represent an src for img element
    label: string; //to represent the team/theme
}

//declare functional component for button, destructure '{}' to include direct references to TeamButtonProps variables
const TeamButton : React.FC <TeamButtonProps> = ({onClick, imgSrc, label}) => {
    
    return (
        <>
        <button onClick={onClick}>
            <img src={imgSrc} alt="" />
            {/* renders label div in for button if it's true */}
            {label && <div>{label}</div>} 
        </button>
        </>
    )
}

export default TeamButton;