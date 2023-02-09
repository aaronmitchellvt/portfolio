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
              a difference in the lives of those that use it. I have completed a
              3-month co-op, where I gained hands-on experience working with
              technologies such as Next, TypeScript, REST APIs, and Node. I also
              completed a full stack coding bootcamp, where I honed my skills
              and deepened my understanding of web development. With my skills
              and experience, I am confident in my ability to bring value to any
              team and any project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
