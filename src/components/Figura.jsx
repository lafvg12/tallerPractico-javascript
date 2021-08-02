import React, { useState } from "react";

function Figura() {
  const [unidad, setUnidad] = useState("");

  const handleChange = (event) => {
    let entrada = event.target.value.toString();
    entrada === "cm" ? setUnidad("cm2") : setUnidad("m2");
  };

  const perimetroCuadrado = (lado) => {
    return lado * 4;
  };

  const areaCuadrado = (ladoCuadrado) => {
    return ladoCuadrado * ladoCuadrado;
  };

  const calcularPerimetroCuadrado = () => {
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;
    const perimetro = perimetroCuadrado(valor);
    document.querySelector(
      "#result"
    ).innerHTML = `El perímetro es ${perimetro} ${unidad.substring(
      0,
      unidad.length - 1
    )}`;
  };
  const calcularAreaCuadrado = () => {
    const area = document.getElementById("InputCuadrado").value;
    const areas = areaCuadrado(area);
    document.querySelector(
      "#result"
    ).innerHTML = `El área es: ${areas} ${unidad}`;
  };

  return (
    <div className="border border-4 border-dark  rounded-3 bg-info p-3">
      <h3 className="text-center fw-bold   mt-2">
        CALCULA EL PERÍMETRO Y ÁREA DE UN CUADRADO
      </h3>
      <h5 className="text-center fw-normal mt-3 text-dark">
        Ingresa cuanto mide uno de los lados del cuadrado:
      </h5>
      <div className="input-group mb-3 mt-5  ">
        <span className="input-group-text border-dark " id="input-cuadrado">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          </svg>
        </span>
        <input
          id="InputCuadrado"
          input
          type="number"
          className="form-control border-dark  "
          placeholder="valor 1 lado del cuadrado"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>
      </div>
      <select
        onChange={handleChange}
        className="form-select border-dark  "
        id="validationCustom04"
        required
      >
        <option selected disabled value="">
          unidad de medida
        </option>
        <option value="cm">cm</option>
        <option value="m">m</option>
      </select>
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button
          onClick={calcularAreaCuadrado}
          className="btn btn-warning text-dark border-dark btn-lg"
          type="button"
        >
          <strong className="fs-5">Área</strong>
        </button>
        <button
          onClick={calcularPerimetroCuadrado}
          className="btn btn-warning text-dark border-dark btn-lg"
          type="button"
        >
          <strong className="fs-5">Perímetro</strong>
        </button>
        <div className="d-flex  justify-content-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          </svg>
        </div>
      </div>
      <h3 className="mt-4 text-center  ">
        Resultado : {<p className="text-danger mt-3" id="result"></p>}
      </h3>
    </div>
  );
}

export default Figura;
