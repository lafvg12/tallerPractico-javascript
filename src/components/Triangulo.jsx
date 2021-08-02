import React, { useState } from "react";
import Circulo from "./Circulo";
import AreaTrian from "./AreaTrian";
import Perimetrotrian from "./Perimetrotrian";

function Triangulo() {
  const [valor, setValor] = useState(<AreaTrian />);

  function handleChange(e) {
    const valores = e.target.value;
    valores === "si" ? setValor(<Perimetrotrian />) : setValor(<AreaTrian />);
  }

  return (
    <div className="border border-4 border-dark rounded-3 bg-info p-3">
      <h3 className="text-center  fw-bold mt-2">
        CALCULA EL PERÍMETRO Y ÁREA DE UN TRIÁNGULO
      </h3>
      <h5 className="text-center fw-normal mt-3">
        Click en el check para calcular área y perímetro :
      </h5>
      <div className="form-check">
        <input
          onChange={handleChange}
          class="form-check-input"
          type="checkbox"
          value="si"
          id="flexCheckChecked"
        ></input>
        <label className="form-check-label mb-3" for="flexCheckChecked">
          <strong className="fs-5 text-primary">
            Check para calcular el Perímetro
          </strong>
        </label>
      </div>
      <div className="form-check">
        <input
          onChange={handleChange}
          className="form-check-input"
          type="checkbox"
          value="no"
          id="flexCheckChecked"
        ></input>
        <label className="form-check-label mb-3" for="flexCheckChecked">
          <strong className="fs-5 text-primary">
            {" "}
            Check para calcular el Área
          </strong>
        </label>
      </div>
      <div>{valor}</div>
    </div>
  );
}

export default Triangulo;
