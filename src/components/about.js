import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Atul Vats, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                After completing my secondary education, I embarked on a journey to nurture my passion for programming. This path led me to enroll in a Computer Science Bachelor's program at VIT College, where my focus was on Information Technology, deepening my comprehension of programming. Currently, I'm in the final year of my academic journey.What fascinates me most about programming is its inherent problem-solving aspect. There's an unparalleled feeling of achievement when I conquer intricate challenges and find workable solutions. As I approach the transition into the professional world, I'm enthusiastic about the opportunity to apply my skills and knowledge as an intern.
                Beyond the realm of coding, I find joy in various activities such as painting, dancing, enjoying movies, and cherishing quality time with my family. I possess an insatiable curiosity and relish the process of acquiring new knowledge and skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;