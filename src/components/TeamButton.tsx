import React from 'react';

//interface to represent the attributes of the team button
interface TeamButtonProps {
  onClick: () => void; //function to handle on click behavior
  imgSrc: string; //some string value meant to represent an src for img element
  label: string; //to represent the team/theme
  bgColor: string;
}

//declare functional component for button, destructure '{}' to include direct references to TeamButtonProps variables
const TeamButton: React.FC<TeamButtonProps> = ({
  onClick,
  imgSrc,
  label,
  bgColor,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        style={{ backgroundColor: bgColor }}
        className='flex w-[200px] items-center justify-center gap-4 rounded-xl border-2 border-zinc-900 p-4 text-xl'
      >
        <img src={imgSrc} alt='' className='h-16 w-16' />
        {/* renders label div in for button if it's true */}
        {label && <div className='font-semibold text-white'>{label}</div>}
      </button>
    </>
  );
};

export default TeamButton;
