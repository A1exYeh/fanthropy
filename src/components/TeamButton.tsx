import React from 'react';

//interface to represent the attributes of the team button
interface TeamButtonProps {
    onClick: () => void; //function to handle on click behavior
    imgSrc: string; //some string value meant to represent an src for img element
    label: string; //to represent the team/theme
    bgColor:string;
}

//declare functional component for button, destructure '{}' to include direct references to TeamButtonProps variables
const TeamButton : React.FC <TeamButtonProps> = ({onClick, imgSrc, label, bgColor}) => {
    
    return (
        <>
        <button onClick={onClick} style={{backgroundColor: bgColor}} className='flex p-4 text-xl justify-start items-center rounded-xl w-[200px]'>
            <img src={imgSrc} alt="" className='w-8 h-8'/>
            {/* renders label div in for button if it's true */}
            {label && 
            <div className='text-white'>{label}</div>
            } 
        </button>
        </>
    )
}

export default TeamButton;