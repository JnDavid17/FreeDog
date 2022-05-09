import React from "react";
import "./index.css";
function AboutUs() {
  const [showText, setShowText] = React.useState(false);
  const [showText2, setShowText2] = React.useState(false);
  const [showText3, setShowText3] = React.useState(false);

  const showFirstText = () => {
    console.log("Hola1");
    setShowText(!showText);
  };

  const showSecondText = () => {
    console.log("Hola2");
    setShowText2(!showText2);
  };

  const showThirdText = () => {
    console.log("Hola3");
    setShowText3(!showText3);
  };

  return (
    <div id="aboutUsDiv" className="AboutUs__section">
      <div className="AboutUs__section--row">
        <div className="AboutUs__section--block1"></div>
        <div className="AboutUs__section--text">
          <h1>Titulo</h1>

          {showText ? (
            <div className="textHide">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ) : null}

          <button onClick={showFirstText} className="--elementButton">
            {" "}
            Ver más{" "}
          </button>
        </div>
      </div>

      <div className="AboutUs__section--row">
        <div className="AboutUs__section--text">
          <h1>Titulo</h1>

          {showText2 ? (
            <div className="textHide">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ) : null}

          <button onClick={showSecondText} className="--elementButton">
            Ver más
          </button>
        </div>
        <div className="AboutUs__section--block2"></div>
      </div>

      <div className="AboutUs__section--row">
        <div className="AboutUs__section--block3"></div>
        <div className="AboutUs__section--text">
          <h1>Titulo</h1>

          {showText3 ? (
            <div className="textHide">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ) : null}

          <button onClick={showThirdText} className="--elementButton">
            {" "}
            Ver más{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export { AboutUs };
