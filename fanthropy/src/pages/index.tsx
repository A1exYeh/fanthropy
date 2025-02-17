import Logo from "../assets/logo.png";

export const Index = () => {
  return (
    <>
      {/* Hero */}
      <section id="indexHero" className="bg-primary min-h-screen h-fit flex justify-center items-center drop-shadow-md py-16">
        <div className="flex flex-col justify-center items-center w-full h-full px-8 gap-12">
          <img src={Logo} alt="Fanthropy Logo" className="w-full h-full md:w-3/4 md:h-3/4 lg:w-2xl lg:h-2xl" />
          <h3 className="text-5xl md:text-6xl pb-24 font-semibold">
            Volunteer for your community and earn big rewards
          </h3>
          <div className="flex flex-row justify-center items-center gap-4 pb-24 flex-wrap">
            <button className="text-xl p-2 px-3 rounded-full bg-text/45 cursor-pointer hover:bg-text/55 transition-all ease-in-out">
              Learn More
            </button>
            <button className="text-xl p-2 px-3 rounded-full bg-text/45 cursor-pointer hover:bg-text/55 transition-all ease-in-out">
              Sign Up
            </button>
            <button className="text-xl p-2 px-3 rounded-full bg-text/45 cursor-pointer hover:bg-text/55 transition-all ease-in-out">
              Organizer? Click Here
            </button>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-background min-h-[50vh] h-fit flex justify-center items-center drop-shadow-md mx-auto py-32">
        <div className="flex flex-col justify-start items-center w-full h-full px-8 gap-12 flex-wrap">
          <h1 className="text-5xl py-24 font-semibold">How It Works</h1>
          <div className="flex flex-col md:flex-row justify-center items-start gap-8 pb-24 flex-wrap">
            <div className="p-4 rounded-xl bg-text/15 font-medium flex-1 hover:scale-110 ease-in-out transition-all w-full">
              <h2 className="text-2xl font-semibold pb-4">STEP 1</h2>
              <p>Choose a team to support.</p>
            </div>

            <div className="p-4 rounded-xl bg-text/15 font-medium flex-1 hover:scale-110 ease-in-out transition-all w-full">
              <h2 className="text-2xl font-semibold pb-4">STEP 2</h2>
              <p>Select a cause you're interested in.</p>
            </div>

            <div className="p-4 rounded-xl bg-text/15 font-medium flex-1 hover:scale-110 ease-in-out transition-all w-full">
              <h2 className="text-2xl font-semibold pb-4">STEP 3</h2>
              <p>
                Find a volunteering slot that works for your schedule and sign
                up.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-text/15 font-medium flex-1 hover:scale-110 ease-in-out transition-all w-full">
              <h2 className="text-2xl font-semibold pb-4">STEP 4</h2>
              <p>
                Follow the volunteering instructions and attend the session.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-text/15 font-medium flex-1 hover:scale-110 ease-in-out transition-all w-full">
              <h2 className="text-2xl font-semibold pb-4">STEP 5</h2>
              <p>Earn points!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
