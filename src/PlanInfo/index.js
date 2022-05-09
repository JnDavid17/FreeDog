import React from "react";
import "./index.css";

function PlanInfo(props) {




  const showFormUserButton = () => {

    if (props.showFormUser === false) {
      props.setShowFormUser(true)
    }else{
      props.setShowFormUser(false)
    }
  };

    return (
      <div id="containerPlan" className="containerCardPlan">
        <div className="cardPlan">
          <h1 className="cardPlan__planName"> Titulo plan </h1>
          <div className="etiquet-price">
          <p>15.000</p>
          <div></div>
      </div>
          <h2 className="cardPlan__description"> Descripcion</h2>
          <button onClick={showFormUserButton} className="--elementButton">Elegir</button>
        </div>
        
        <div className="cardPlan">
          <h1 className="cardPlan__planName"> Titulo plan </h1>
          <div className="etiquet-price">
          <p>20.000</p>
          <div></div>
      </div>
          <h2 className="cardPlan__description"> Descripcion</h2>
          <button onClick={showFormUserButton} className="--elementButton">Elegir</button>
        </div>
  
        <div className="cardPlan">
          <h1 className="cardPlan__planName"> Titulo plan </h1>
          <div className="etiquet-price">
          <p>35.000</p>
          <div></div>
      </div>
          <h2 className="cardPlan__description"> Descripcion</h2>
          <button onClick={showFormUserButton} className="--elementButton">Elegir</button>
        </div>
  
        <div className="cardPlan">
          <h1 className="cardPlan__planName"> Titulo plan </h1>
          <div className="etiquet-price">
          <p>45.000</p>
          <div></div>
      </div>
          <h2 className="cardPlan__description"> Descripcion</h2>
          <button onClick={showFormUserButton} className="--elementButton">Elegir</button>
        </div>
      </div>
    );
  }



export { PlanInfo };
