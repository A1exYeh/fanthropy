import ThreeSquareLogo from '../../../assets/three-square-logo.png';
import { useNavigate } from 'react-router';

const ThreeSquare = () => {
  let navigate = useNavigate();
  const goToSlot = () => {
    navigate('/orgs/slotpage');
  };

  return (
    <>
      <div className='mx-auto flex h-screen max-w-screen-sm flex-col items-center justify-start gap-8 px-8 py-16'>
        <h1 className='text-4xl font-bold'>ThreeSquare</h1>
        <img src={ThreeSquareLogo} alt='ThreeSquare Logo' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa
          aliquam aperiam nihil, tenetur voluptatum velit nobis id accusantium
          eveniet nulla reiciendis? Praesentium neque quidem tempore ullam sint.
          Officia sequi aliquid dolores eligendi consequatur minus?
        </p>
        <h1 className='text-3xl font-bold'>Volunteer Hours</h1>
        <div className='flex w-full flex-col items-center justify-center gap-8 rounded-lg bg-gray-200 p-4'>
          <button
            className='flex w-3/4 items-center justify-center rounded-lg bg-gray-400'
            onClick={goToSlot}
          >
            <h1>7:00 AM - 10:00 AM</h1>
          </button>
          <button
            className='flex w-3/4 items-center justify-center rounded-lg bg-gray-400'
            onClick={goToSlot}
          >
            <h1>7:00 AM - 10:00 AM</h1>
          </button>
          <button
            className='flex w-3/4 items-center justify-center rounded-lg bg-gray-400'
            onClick={goToSlot}
          >
            <h1>7:00 AM - 10:00 AM</h1>
          </button>
          <button
            className='flex w-3/4 items-center justify-center rounded-lg bg-gray-400'
            onClick={goToSlot}
          >
            <h1>7:00 AM - 10:00 AM</h1>
          </button>
        </div>
      </div>
    </>
  );
};

export default ThreeSquare;
