import ThreeSquareLogo from '../../../assets/three-square-logo.png';
import { useNavigate } from 'react-router';

const ThreeSquare = () => {
    let navigate = useNavigate();
    const goToSlot = () => {
        navigate('/orgs/slotpage');
    }

    return (
        <>
        <div className='flex flex-col mx-auto justify-start items-center max-w-screen-sm gap-8 h-screen py-16 px-8'>
            <h1 className='text-4xl font-bold'>ThreeSquare</h1>
            <img src={ThreeSquareLogo} alt="ThreeSquare Logo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa aliquam aperiam nihil, tenetur voluptatum velit nobis id accusantium eveniet nulla reiciendis? Praesentium neque quidem tempore ullam sint. Officia sequi aliquid dolores eligendi consequatur minus?</p>
            <h1 className='text-3xl font-bold'>Volunteer Hours</h1>
            <div className='flex flex-col justify-center items-center gap-8 bg-gray-200 rounded-lg p-4 w-full'>
                <button className='flex justify-center items-center w-3/4 bg-gray-400 rounded-lg' onClick={goToSlot}>
                    <h1>7:00 AM - 10:00 AM</h1>
                </button>
                <div className='flex justify-center items-center w-3/4 bg-gray-400 rounded-lg'>
                    <h1>7:00 AM - 10:00 AM</h1>
                </div>
                <div className='flex justify-center items-center w-3/4 bg-gray-400 rounded-lg'>
                    <h1>7:00 AM - 10:00 AM</h1>
                </div>
                <div className='flex justify-center items-center w-3/4 bg-gray-400 rounded-lg'>
                    <h1>7:00 AM - 10:00 AM</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default ThreeSquare;