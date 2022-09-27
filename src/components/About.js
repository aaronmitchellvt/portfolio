import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Aaron, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about developing excellent applications that make
              a difference in the lives of those that use it. My focus has been
              creating software based on the PERN stack but I am adaptable and
              ready to use my experience to work within your tech
              infrastructure. I am a junior full stack developer that is eager
              to learn and contribute.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
