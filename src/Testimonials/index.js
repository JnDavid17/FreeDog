import React from "react";
import "./index.css";
function Testimonials(props) {
  return (
    <div id="testimonialDiv" className="testimonialContainer">
      <div className="testimonialCard">
        <div className="testimonialCard__quoteMark">
          <img
            src="https://img.icons8.com/ios-filled/30/26e07f/quote-right.png"
            alt="jeje"
          />
        </div>
        <p className="testimonialCard__quote">{props.quote}.</p>
        <h2 className="testimonialCard__name"> {props.name} </h2>
        <div className="testimonialCard__media"><img src={props.source} alt="Red-social"></img></div>
      </div>
    </div>

  );
}

export { Testimonials };
