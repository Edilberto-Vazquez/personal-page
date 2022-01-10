import React from "react";
import userimage from "../assets/images/user-image.png";

const UserProfileCard = () => {
  return (
    <section className="user-profile-card">
      <img className="user-profile-card__img" src={userimage} alt="" />
      <div className="information-card">
        <span className="information-card__job-title">
          Full Stack JavaScript Developer
        </span>
        <h1 className="information-card__name">Edilberto Vazquez Luna</h1>
        <p className="information-card__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          explicabo neque optio minima quo velit voluptate unde. Consequuntur
          dolore reiciendis ipsum, sunt quam veniam facere optio provident
          laudantium! Nulla, consectetur?
        </p>
        <div className="information-card__btn">
          <button>Download CV</button>
          <a href="mailto:edi_vazquez12@hotmail.com">
            <button>Contact</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UserProfileCard;
