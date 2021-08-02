import React, { useState } from "react";

function AreaTrian(props) {
  const areaTriangulo = (alturaTriangulo, baseTriangulo) => {
    return (alturaTriangulo * baseTriangulo) / 2;
  };

  const [valores, setValores] = useState("");

  const valorArea = (e) => {
    let valorSelectArea = e.target.value;
    valorSelectArea === "cm" ? setValores("cm2") : setValores("m2");
  };

  const calcularAreaTriangulo = () => {
    const baseT = parseInt(document.getElementById("baseT").value);
    const alturaT = parseInt(document.getElementById("alturaT").value);
    let resultadoAreaTriangulo = areaTriangulo(alturaT, baseT);
    document.querySelector("#triangulo").innerHTML =
      resultadoAreaTriangulo + " " + valores;
  };

  return (
    <div>
      <div className="input-group mb-3 mt-1  ">
        <span className="input-group-text border-dark" id="input-cuadrado">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-triangle"
            viewBox="0 0 16 16"
          >
            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
          </svg>
        </span>
        <input
          id="alturaT"
          input
          type="number"
          className="form-control border-dark "
          placeholder="Altura"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>
      </div>
      <div className="input-group mb-3 mt-1  ">
        <span className="input-group-text border-dark" id="input-cuadrado">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-triangle"
            viewBox="0 0 16 16"
          >
            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
          </svg>
        </span>
        <input
          id="baseT"
          input
          type="number"
          className="form-control border-dark "
          placeholder="base del triángulo"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>
      </div>
      <select
        onChange={valorArea}
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
      <div className="d-flex justify-content-center mt-2 border-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="currentColor"
          className="bi bi-triangle "
          viewBox="0 0 16 16"
        >
          <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
        </svg>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto mt-3">
        <button
          onClick={calcularAreaTriangulo}
          className="btn btn-warning text-dark border-dark"
          type="button"
        >
          <strong className="fs-5">Área</strong>
        </button>
      </div>
      <h3 className="mt-3 text-center">
        Resultado : {<p className="text-danger mt-3" id="triangulo"></p>}
      </h3>
    </div>
  );
}

export default AreaTrian;
