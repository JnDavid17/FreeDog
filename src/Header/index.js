import React from "react";
import './index.css'
function Header() {
  return (
    <header className="headerMenu">
      <div className="logo">
      <li className="headerMenu__logo"><img src="https://img.icons8.com/glyph-neue/60/26e07f/man-with-dog.png" alt="logo"></img></li>
      <h3>FreeDog</h3>
      </div>
      <nav className="headerMenu__menu">
        <ul className="headerMenu__menu--list">
        <a href="#containerPlan"><button  className="--elementButton headerMenu__button">Nuestros planes</button></a>
          <a href="#aboutUsDiv"><li className="headerMenu__menu--element">Quienes somos</li></a>
          <a href="#teamDiv"><li className="headerMenu__menu--element">Nuestro personal</li></a>
          <a href="#testimonialDiv"><li className="headerMenu__menu--element">Testimonios</li></a>
        </ul>
      </nav>
    </header>
  );
}

export {Header};
