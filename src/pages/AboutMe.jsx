import React from "react";
import Introduction from "../components/Introduction";
import DescriptionCard from "../components/DescriptionCard";
import { WhatIDoList } from "../utils/information";

const AboutMe = () => {
  return (
    <main className="about-me">
      <Introduction />
      <div className="what-i-do">
        <h3 className="what-i-do__title">What I Do</h3>
        <div className="description-cards">
          {WhatIDoList.map((item, key) => (
            <DescriptionCard
              key={key}
              iconName={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
