import ThreeSquareLogo from '../assets/three-square-logo.png';

const SlotPage = () => {
  return (
    <>
      <div className='mx-auto flex h-screen max-w-screen-sm flex-col items-center justify-start gap-8 px-8 py-16'>
        <h1 className='text-4xl font-bold'>ThreeSquare</h1>
        <img src={ThreeSquareLogo} alt='ThreeSquare Logo' />
        <h1 className='text-3xl font-bold'>VOLUNTEERING CONFIRMATION</h1>
        <h1 className='text-3xl font-bold'>7:00 AM - 10:00 AM</h1>
        <div className='flex w-fit items-center justify-center gap-2 rounded-lg bg-black p-2 text-2xl font-bold text-white'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z' />
          </svg>
          <h1>150 PTS</h1>
        </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          magni excepturi adipisci. Consequuntur illo maxime mollitia quod
          libero, vitae non!
        </p>
        <div className='flex w-full flex-col items-center justify-center gap-8 rounded-lg bg-gray-200 p-4'>
          <button className='flex w-fit items-center justify-center rounded-lg bg-green-500 p-2'>
            <h1>CONFIRM</h1>
          </button>
        </div>
      </div>
    </>
  );
};

export default SlotPage;
