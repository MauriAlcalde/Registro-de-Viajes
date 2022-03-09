import React from "react";
import { useCarga } from "../hooks/useCarga";

const CargaViajes = () => {
  const {
    direccionPartida,
    direccionDestino,
    medioTransporte,
    distancia,
    nombresTrabajadores,
    nombreRegistro,
    soloIda,
    handleForm,
    handleSubmit,
    medios,
  } = useCarga();

  return (
    <div className="container__views">
      <div className="container__form__viajes">
        <h2>Complete el formulario</h2>
        <form  onChange={handleForm} onSubmit={handleSubmit}>
          <div className="cajaForm">
              <div className="cajaUno">
                  <div className="cajaInput">
                    {" "}
                    Lugar de origen
                    <input
                      type="text"
                      placeholder="Lugar de origen"
                      ref={direccionPartida}
                    />
                  </div>
                  <div className="cajaInput">
                    {" "}
                    Lugar de destino
                    <input
                      type="text"
                      placeholder="Lugar de destino"
                      ref={direccionDestino}
                    />
                  </div>
              </div>
              <div className="cajaDos">
                  <div className="cajaInput">
                    {" "}
                    Medio de transporte
                    <select ref={medioTransporte}>
                      {medios.map((medio) => {
                        return (
                          <option value={medio} key={medio}>
                            {medio}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="cajaInput">
                    Cantidad de kilometros
                    <input type="number" placeholder="Cantidad de Km" min="0" ref={distancia} />
                  </div>  
              </div>
              <div className="cajaTres">
                  <div className="cajaInput">
                  {" "}
                    Su nombre
                    <input className="inputNombre" type="text" placeholder="Su nombre" ref={nombreRegistro} />
                  </div>
                  <div className="cajaInput">
                    ¿Solo ida o ida y vuelta?
                    <select ref={soloIda}>
                      <option value={true}>Solo ida</option>
                      <option value={false}>Ida y vuelta</option>
                    </select>
                  </div>
              </div>
              <div>
                Nombre de los trabajadores
                <textarea
                  placeholder="Ingrese los nombres de los trabajadores separados por comas ','"
                  ref={nombresTrabajadores}
                  className="textarea"
                ></textarea>
              </div>
              <input type="submit" value="Cargar viaje" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default CargaViajes;
