import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Aaron Mitchell
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        {/* <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a passionate junior full stack developer, driven by a deep love
          for technology and a desire to create innovative solutions. My primary
          area of expertise is in React. During my 3-month co-op, I gained
          hands-on experience working with technologies such as Next,
          TypeScript, REST APIs, and Node. I also completed a full stack coding
          bootcamp, where I honed my skills and deepened my understanding of web
          development. With my skills and experience, I am confident in my
          ability to bring value to any team and any project.{" "}
        </p> */}
        <div>
          <Link to="experience" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Experience
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
