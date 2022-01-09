import React from "react";
import userimage from "../assets/images/user-image.png";

const Introduction = () => {
  return (
    <section>
      <img src={userimage} alt="" />
      <div>
        <span>Full Stack JavaScript Developer</span>
        <h1>Edilberto Vazquez Luna</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          explicabo neque optio minima quo velit voluptate unde. Consequuntur
          dolore reiciendis ipsum, sunt quam veniam facere optio provident
          laudantium! Nulla, consectetur?
        </p>
        <div>
          <button>Download CV</button>
          <button>Contact</button>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
