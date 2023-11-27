import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Adept at conducting in-depth research, strategic planning, and
          crafting resilient web applications that impeccably align with client
          requisites. Showcases a proven prowess for collaborative teamwork,
          adept communication, and exemplary organizational acumen. Devoted to
          upholding punctual project delivery while unwaveringly adhering to the
          zenith of quality benchmarks
        </p>
        {/* 
        <br />
        <p className="text-xl">
        </p> */}
      </div>
    </div>
  );
};

export default About;
