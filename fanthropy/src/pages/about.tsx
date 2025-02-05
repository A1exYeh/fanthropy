import Logo from '../assets/logo.png'

export const About = () => {
  return (
    <>
    {/* Hero */}
      <section className="bg-primary min-h-[50vh] h-fit flex justify-center items-center drop-shadow-md py-16">
       <div className="flex flex-col justify-center items-center w-full h-full px-8 gap-12">
          <h1 className='text-5xl font-bold'>WHAT IS FANTHROPY?</h1>
          <h4 className='text-2xl font-light max-w-[75%]'>Fanthropy is a web application solution that connects nonprofits to volunteers, leveraging Las Vegas' growing sports industry to reward users.</h4>
          <div className='flex flex-row justify-center items-center gap-4'>
            <button className='p-2 px-3 rounded-full bg-text/15 cursor-pointer hover:bg-text/25 transition-all ease-in-out'>Learn More</button>
            <button className='p-2 px-3 rounded-full bg-text/15 cursor-pointer hover:bg-text/25 transition-all ease-in-out'>Sign Up</button>
            <button className='p-2 px-3 rounded-full bg-text/15 cursor-pointer hover:bg-text/25 transition-all ease-in-out'>Organizer? Click Here</button>
          </div>
       </div>
      </section>

      {/* Steps */}
      <section className="bg-background min-h-[50vh] h-fit flex justify-center items-center drop-shadow-md px-24 py-32">
        <div className="flex flex-col justify-start items-center w-full h-full px-8 gap-12 ">
          
          <h1 className='text-4xl font-semibold'>How It Works</h1>
          <div className='flex flex-row justify-center items-start gap-8 '>

            <div className='p-4 rounded-xl bg-text/15 font-medium flex-1 hover:scale-110 ease-in-out transition-all'>
              <h2 className='text-2xl font-semibold pb-4'>STEP 1</h2>
              <p>Choose a team to support.</p>
            </div>

            <div className='p-4 rounded-xl bg-text/15 font-medium flex-1 hover:scale-110 ease-in-out transition-all'>
              <h2 className='text-2xl font-semibold pb-4'>STEP 2</h2>
              <p>Select a cause you're interested in.</p>
            </div>

            <div className='p-4 rounded-xl bg-text/15 font-medium flex-1 hover:scale-110 ease-in-out transition-all'>
              <h2 className='text-2xl font-semibold pb-4'>STEP 3</h2>
              <p>Find a volunteering slot that works for your schedule and sign up.</p>
            </div>

            <div className='p-4 rounded-xl bg-text/15 font-medium flex-1 hover:scale-110 ease-in-out transition-all'>
              <h2 className='text-2xl font-semibold pb-4'>STEP 4</h2>
              <p>Follow the volunteering instructions and attend the session.</p>
            </div>

            <div className='p-4 rounded-xl bg-text/15 font-medium flex-1 hover:scale-110 ease-in-out transition-all'>
              <h2 className='text-2xl font-semibold pb-4'>STEP 5</h2>
              <p>Earn points!</p>
            </div>

          </div>
       </div>
      </section>
    </>
  );
};
