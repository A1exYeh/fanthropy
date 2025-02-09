import UNLV_Logo from "../assets/UNLV-Arch-Color.png";

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
      <section className="bg-background min-h-[50vh] h-fit flex flex-col justify-center items-center drop-shadow-md py-16">
      <h1 className="text-5xl font-bold mx-auto pb-32">Our Story</h1>
        <div className="flex flex-row justify-evenly items-center w-full h-full px-8 gap-12 flex-wrap md:flex-nowrap">
          {/* STORY COL */}
          
          <div className="flex flex-col justify-center items-start gap-6 w-1/2">
            
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
            <img src={UNLV_Logo} alt="UNLV LOGO" />
          </div>
        </div>
      </section>
    </>
  );
};
