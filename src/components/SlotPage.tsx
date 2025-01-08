import ThreeSquareLogo from '../assets/three-square-logo.png';

const SlotPage = () => {

    return (
        <>
        <div className='flex flex-col mx-auto justify-start items-center max-w-screen-sm gap-8 h-screen py-16 px-8'>
            <h1 className='text-4xl font-bold'>ThreeSquare</h1>
            <img src={ThreeSquareLogo} alt="ThreeSquare Logo" />
            <h1 className='text-3xl font-bold'>7:00 AM - 10:00 AM</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate odio sequi repellat explicabo consectetur obcaecati aspernatur natus autem iusto. Quisquam sequi voluptate eligendi ea illo cum sunt vel? Illum ipsum aperiam, facilis vitae ab inventore animi exercitationem a ad?</p>
            
            <div className='flex flex-col justify-center items-center gap-8 bg-gray-200 rounded-lg p-4 w-full'>
                <div className='flex justify-center items-center w-fit p-2 bg-green-500 rounded-lg'>
                    <h1>CONFIRM</h1> 
                </div>
            </div>
        </div>
        </>
    )
}

export default SlotPage;