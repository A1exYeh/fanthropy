import UNLV_Logo from "../assets/UNLV-Arch-Color.png";
import Vite from "../assets/vite.svg"
export const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary min-h-[50vh] h-fit flex justify-center items-center drop-shadow-md py-16">
        <div className="flex flex-col justify-center items-center w-full h-full px-8 gap-12">
          <h1 className="text-5xl font-bold">WHAT IS FANTHROPY?</h1>
          <h4 className="text-2xl font-light max-w-[75%]">
            Fanthropy is a web application solution that connects nonprofits to
            volunteers, leveraging Las Vegas' growing sports industry to reward
            users.
          </h4>
         
        </div>
      </section>

      {/* Story */}
      <section className="bg-background min-h-[50vh] h-fit flex flex-col justify-center items-center drop-shadow-md py-64">
        <h1 className="text-5xl font-bold mx-auto pb-32">Our Story</h1>
        <div className="flex flex-row justify-evenly items-center w-full h-full px-0 md:w-3/4 md:px-0 gap-12 flex-wrap md:flex-nowrap">
          {/* STORY COL */}
          
          <div className="flex flex-col justify-center items-start gap-6 w-3/4">
            
            <h4 className="text-2xl font-light">
              Fanthropy was created for UNLV's 4th annual President's Innovation Challenge by the 4Front team: Aryah, Alex, Jennifer, and Tania. 
              <br/>
              <br/>
              The question we set out to answer was <strong className="font-semibold">"how can professional sports in Las Vegas be leveraged to address social issues, foster economic diversity, and increase community engagement, creating a more inclusive, supportive, and vibrant local society?"
                 </strong>

              <br/>
              <br/>
              Our Answer? A application that allows the Vegas community to give back to the city by contributing to non-profit organizations in exchange for sports-related perks.
              </h4>
          </div>

          {/* STORY IMAGE */}
          <div className="flex flex-col justify-center items-center gap-6 w-1/2">
            
            <a href="https://www.unlv.edu/president/initiatives/presidents-innovation-challenge" target="_blank" rel="noopener norefferer">
            <img src={UNLV_Logo} alt="UNLV LOGO" />
            </a>
          </div>
        </div>
      </section>

      {/* Headshots */}
      <section className="bg-primary min-h-[50vh] h-fit flex flex-col justify-center items-center drop-shadow-md py-64">
      <h1 className="text-5xl font-bold mx-auto pb-32">The Team</h1>
        <div className="flex flex-row items-center justify-center px-12 pb-32 w-full flex-wrap md:flex-nowrap md:max-w-3/4 gap-8">
          {/* Profile Card */}
          <div className="p-8 rounded-lg bg-red-500 flex flex-col justify-center items-center gap-4 hover:scale-105 transition-all ease-in-out">
            <h3 className="text-2xl font-bold">First Last</h3>
            <img src={Vite} alt=""  className="rounded-full w-32 h-32 bg-green-400 p-4"/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam laborum doloribus quod nostrum asperiores vel cumque necessitatibus! Asperiores ab blanditiis velit quam voluptatum quas, iusto, voluptatem repellendus maiores illum dolor!</p>
          </div>
          {/* Profile Card */}
          <div className="p-8 rounded-lg bg-red-500 flex flex-col justify-center items-center gap-4 hover:scale-105 transition-all ease-in-out">
            <h3 className="text-2xl font-bold">First Last</h3>
            <img src={Vite} alt=""  className="rounded-full w-32 h-32 bg-green-400 p-4"/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam laborum doloribus quod nostrum asperiores vel cumque necessitatibus! Asperiores ab blanditiis velit quam voluptatum quas, iusto, voluptatem repellendus maiores illum dolor!</p>
          </div>
          {/* Profile Card */}
          <div className="p-8 rounded-lg bg-red-500 flex flex-col justify-center items-center gap-4 hover:scale-105 transition-all ease-in-out">
            <h3 className="text-2xl font-bold">First Last</h3>
            <img src={Vite} alt=""  className="rounded-full w-32 h-32 bg-green-400 p-4"/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam laborum doloribus quod nostrum asperiores vel cumque necessitatibus! Asperiores ab blanditiis velit quam voluptatum quas, iusto, voluptatem repellendus maiores illum dolor!</p>
          </div>
          {/* Profile Card */}
          <div className="p-8 rounded-lg bg-red-500 flex flex-col justify-center items-center gap-4 hover:scale-105 transition-all ease-in-out">
            <h3 className="text-2xl font-bold">First Last</h3>
            <img src={Vite} alt=""  className="rounded-full w-32 h-32 bg-green-400 p-4"/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam laborum doloribus quod nostrum asperiores vel cumque necessitatibus! Asperiores ab blanditiis velit quam voluptatum quas, iusto, voluptatem repellendus maiores illum dolor!</p>
          </div>
        </div>
      </section>
    </>
  );
};
