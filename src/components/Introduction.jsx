import React from "react";
import userimage from "../assets/images/user-image.png";

const Introduction = () => {
  return (
    <section className="introduction">
      <img className="introduction__img" src={userimage} alt="" />
      <div className="information">
        <span className="information__job-title">
          Full Stack JavaScript Developer
        </span>
        <h1 className="information__name">Edilberto Vazquez Luna</h1>
        <p className="information__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          explicabo neque optio minima quo velit voluptate unde. Consequuntur
          dolore reiciendis ipsum, sunt quam veniam facere optio provident
          laudantium! Nulla, consectetur?
        </p>
        <div className="information__btn">
          <button>Download CV</button>
          <a href="mailto:edi_vazquez12@hotmail.com">
            <button>Contact</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
