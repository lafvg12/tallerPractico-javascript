import React, { useState } from "react";

function Circulo(props) {
  const [selectArea, setSelectArea] = useState("m");

  const selectAreaTriangulo = (e) => {
    let selectAreaTri = e.target.value;
    selectAreaTri === "cm" ? setSelectArea("cm2") : setSelectArea("m2");
  };

  function diametroCirculo(radioCirculo) {
    return radioCirculo * 2;
  }

  function perimetroCirculo(radio) {
    const pi = Math.PI;
    return pi * diametroCirculo(radio);
  }

  function areaCirculo(radioCirculo) {
    const pi = Math.PI;
    return radioCirculo * radioCirculo * pi;
  }

  function calcularDiametroCirculo() {
    const diametro = parseInt(document.getElementById("inputRadio").value);
    const diametroCirculos = diametroCirculo(diametro);
    document.querySelector("#circulo").innerHTML = diametroCirculos;
  }

  function calcularPerimetroCirculo() {
    const perimetro = parseInt(document.getElementById("inputRadio").value);
    const periCirculo = perimetroCirculo(perimetro);
    document.querySelector("#circulo").innerHTML = periCirculo + " m";
  }

  function calcularAreaCirculo() {
    const areaC = parseInt(document.getElementById("inputRadio").value);
    const areaCirculoResultado = parseInt(areaCirculo(areaC));
    document.querySelector("#circulo").innerHTML =
      areaCirculoResultado + " " + selectArea;
  }

  return (
    <div className="border border-4 border-dark rounded-3 bg-info p-3">
      <h3 className="text-center  fw-bold mt-2">
        CALCULA EL PERÍMETRO, ÁREA Y DIAMETRO DE UN CIRCULO
      </h3>
      <h5 className="text-center fw-normal mt-3 text-dark">
        Ingresa el valor del radio y presiona el botón
      </h5>
      <div className="input-group mb-2 mt-4 ">
        <span className="input-group-text border-dark " id="input-cuadrado">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
        </span>
        <input
          id="inputRadio"
          type="number"
          className="form-control border-dark  "
          placeholder="valor-Radio"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>
      </div>
      <select
        onChange={selectAreaTriangulo}
        className="form-select border-dark "
        id="validationCustom04"
        required
      >
        <option selected disabled value="">
          Unidad de medida
        </option>
        <option value="cm">cm</option>
        <option value="m">m</option>
      </select>
      <div className="d-grid gap-2 col-6 mx-auto mt-3">
        <button
          onClick={calcularAreaCirculo}
          className="btn btn-warning text-dark border-dark"
          type="button"
        >
          <strong className="fs-5">Área</strong>
        </button>
        <button
          onClick={calcularPerimetroCirculo}
          className="btn btn-warning text-dark border-dark"
          type="button"
        >
          <strong className="fs-5">Perímetro</strong>
        </button>
        <button
          onClick={calcularDiametroCirculo}
          className="btn btn-warning text-dark border-dark"
          type="button"
        >
          <strong className="fs-5">diametro</strong>
        </button>
        <div class="d-flex justify-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
        </div>
      </div>
      <h3 className="mt-3 text-center">
        Resultado : {<p className="text-danger mt-3" id="circulo"></p>}
      </h3>
    </div>
  );
}

export default Circulo;
