import React from "react";
import HTML from "../assets/html.png";
import Postgres from "../assets/postgres_logo.png";
import Bootstrap from "../assets/bootstrap_logo.png";
import Next from "../assets/next-js.png";
import CSS from "../assets/css.png";
import TypeScript from "../assets/typescript-logo.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import NextAuth from "../assets/next-auth.png";
import GitHub from "../assets/github.png";
import Query from "../assets/react-query-logo.png";
import Tailwind from "../assets/tailwind.png";
import Vue from "../assets/vue-logo.png";
import Jenkins from "../assets/pipeline-logo.png";
import Python from "../assets/python-logo.png";
import Selenium from "../assets/selenium-logo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-4" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-4" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-3"
              src={Tailwind}
              alt="Tailwind icon"
            />
            <p className="my-4">Tailwind</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-7"
              src={Bootstrap}
              alt="HTML icon"
            />
            <p className="my-4">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={Postgres} alt="HTML icon" />
            <p className="my-4">Postgres</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto mt-5"
              src={TypeScript}
              alt="HTML icon"
            />
            <p className="my-4">TypeScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-5" src={Next} alt="HTML icon" />
            <p className="my-4">Next</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-4" src={NextAuth} alt="HTML icon" />
            <p className="my-2">Next Auth</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-6" src={Query} alt="HTML icon" />
            <p className="my-4">React Query</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-6" src={Vue} alt="Vue icon" />
            <p className="my-4">Vue 3</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-6" src={Python} alt="Python icon" />
            <p className="my-4">Python</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-25 h-20 mx-auto mt-6" src={Jenkins} alt="HTML icon" />
            <p className="my-4 pt-1">Jenkins & CI/CD Pipelines</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto mt-6" src={Selenium} alt="selenium icon" />
            <p className="my-4">Selenium</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
