import React from "react";
import Figura from "./components/Figura";
import Triangulo from "./components/Triangulo";
import Circulo from "./components/Circulo";
import AreaTrian from "./components/AreaTrian";

function App() {
  return (
    <div className="container mt-5 ">
      <h1 className="d-flex justify-content-center text-decoration-underline fs-1 text-warning">
        TALLER DE GEOMETRÍA
      </h1>
      <div className="row mt-5">
        <div className="col">
          <Figura />
        </div>
        <div className="col">
          <Triangulo />
        </div>
        <div className="col">
          <Circulo />
        </div>
      </div>
    </div>
  );
}

export default App;
