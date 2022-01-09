import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="navbar__name">Edilberto</span>
      <input className="navbar__menu-icon" type="checkbox" />
      <div className="navbar-options">
        <div className="sections">
          <span className="sections__about-me">About Me</span>
          <span className="sections__resume">Resume</span>
          <span className="sections__portafolio">Portafolio</span>
        </div>
        <div className="social-networks-icons">
          <a
            className="social-networks-icons__github"
            href="https://github.com/Edilberto-Vazquez"
          />
          <a
            className="social-networks-icons__linkedin"
            href="https://www.linkedin.com/in/edilberto-vazquez-luna-7a038621b/"
          />
          <a
            className="social-networks-icons__twitter"
            href="https://twitter.com/edivazquez98"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
