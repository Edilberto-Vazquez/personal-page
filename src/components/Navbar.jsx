import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="navbar__name">Edilberto</span>
      <input className="navbar__icon-menu" type="checkbox" />
      <div className="information">
        <div className="sections">
          <span className="sections__about-me">About Me</span>
          <span className="sections__resume">Resume</span>
          <span className="sections__portafolio">Portafolio</span>
        </div>
        <div className="social-networks-icons">
          <span className="social-networks-icons__github" />
          <span className="social-networks-icons__linkedin" />
          <span className="social-networks-icons__twitter" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
