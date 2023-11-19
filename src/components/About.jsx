import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          explicabo aspernatur repellat fugiat perferendis molestiae dolorum
          excepturi non ut deleniti quisquam similique, amet natus consequuntur.
          Nulla esse, eius numquam officiis dicta saepe beatae incidunt a ipsa
          laboriosam excepturi quod tempora rem et porro expedita eveniet
          aperiam sunt fugiat delectus? Quia!
        </p>

        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          ipsum eaque odit expedita totam harum, dicta architecto ducimus
          consequuntur. Cumque praesentium quo maxime aut, et debitis nesciunt,
          veniam molestiae reprehenderit in expedita animi dolorem deleniti
          perspiciatis? Ex tempora deleniti amet, dolorum illum iste praesentium
          rem sed quo magni aspernatur ratione?
        </p>
      </div>
    </div>
  );
};

export default About;