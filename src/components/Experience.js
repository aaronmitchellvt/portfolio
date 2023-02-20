import React from "react";

const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full h-full bg-[#0a192f] text-gray-300 pt-8 pb-8"
    >
      <div className="text-center pb-4">
        <h1 className="text-4xl text-gray-300 font-bold underline decoration-pink-600">
          Experience
        </h1>
      </div>
      <div className=" flex flex-col sm:flex-row items-center justify-items-center justify-center ">
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-4">
          <div className="h-80 bg-gray-300 rounded-md text-center p-4">
            <p className="text-2xl text-center font-bold inline border-b-4 text-[#0a192f] border-pink-600">
              {" "}
              Brandon Systems
            </p>
            <div className="flex flex-col items-start justify-items-start text-start">
              <ul className="text-black list-disc p-4">
                <li>
                  Contributed to team implementing a secure insurance portal,
                  which was completed successfully
                </li>
                <li>
                  Implemented numerous features including claims page, pdf
                  retrieval, temporary card support
                </li>
                <li>
                  The project utilized Typescript, React, REST, NextJS, Azure
                  Table Storage
                </li>
                <li>
                  Built mobile-friendly, responsive UIs using Bootstrap and
                  Kendo UI
                </li>
              </ul>
            </div>
          </div>
          <div className="h-80 bg-gray-300 rounded-md text-center p-4">
            <p className="text-2xl text-center font-bold inline border-b-4 text-[#0a192f] border-pink-600">
              {" "}
              Cairn Surgical
            </p>
            <div className="flex flex-col items-start justify-items-start text-start">
              <ul className="text-black list-disc p-4">
                <li>
                  Part of a team delivering a web portal for custom medical
                  device manufacturing
                </li>
                <li>
                  Implemented automated Python Selenium test system used in
                  CI/CD Jenkins pipeline
                </li>
                <li>
                  Enhanced and fixed bugs in front end Vue.js components to
                  support European deployment
                </li>
                <li>
                  Added features to back end Python Flask system utilizing
                  PostgreSQL database
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
