import React from "react";
import "./index.css";
import { Spring } from "react-spring";

function TeamInfo(props) {
  return (
          <div className="card">
            <div className="card__header">
              <div className="card__image">
                <img src={props.photo} alt={props.name} />
              </div>
            </div>

            <h3 className="card__name">{props.name}</h3>

            <div className="card__description">
              Nombre: {props.name}
              <br></br>
              Edad: {props.age}
              <br></br>
              Email: {props.mail}
              <br></br>
              Pasatiempos: {props.hobbies}
            </div>

            <div className="card__socialMedia">
              <p className="card__socialMedia--listSocialMedia">
                <a href={props.facebook}>
                  <img src="https://img.icons8.com/glyph-neue/30/ffffff/facebook.png" className="socialMediaIcons" alt="Icono-facebook"></img>
                </a>
                <a href={props.linkedln}>
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png" className="socialMediaIcons" alt="Icono-Linkedln"></img>
                </a>
                <a href={props.twitter}>
                <img src="https://img.icons8.com/ios-filled/30/ffffff/twitter-squared.png" className="socialMediaIcons" alt="Icono-Twitter"></img>
                </a>
                <a href={props.instagram}>
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" className="socialMediaIcons" alt="Icono-Twitter"></img>
                </a>
              </p>
            </div>
          </div>
  );
}

export { TeamInfo };
