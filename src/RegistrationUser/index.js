import React from "react";
import "./index.css";

function RegistrationUser(props) {
    




  if (props.showFormUser === false) {
    return null
  } else{
    return (
        <div className="containerRegistFormUser">
          <div className="registFormUser">
            <form>
              <div className="registFormUser__inputs">
                <input
                  id="nameInputUser"
                  type="text"
                  placeholder="Nombre completo"
                ></input>
                <input
                  id="emailInputUser"
                  type="email"
                  placeholder="Correo electronico"
                ></input>
                <input
                  id="phoneInputUser"
                  type="tel"
                  placeholder="Telefono"
                ></input>
              </div>
              <div className="registFormUser__button">
                <button type="button"  className="--elementButton registration__button">
                <span>Enviar</span><img className='registration__button--image' src='https://img.icons8.com/glyph-neue/50/ffffff/checkmark.png'></img>
                </button>
              </div>
            </form>
          </div>
        </div>
      );
  }

}

export { RegistrationUser };
