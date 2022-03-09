import React from "react";
import "./cardviajes.scss";
const CardViajes = ({ data }) => {
  return (
    <div className="card__viajes">
      <div className="card__viajes__campos">
            <span>Destino</span>
            <p> Partida : {data.direccionPartida}</p>
            <p> Destino : {data.direccionDestino}</p>
            <span></span>
      </div>
      <div className="card__viajes__campos">
            <span>Distancia</span>
            <p> {data.distancia} km</p>
      </div>
      <div className="card__viajes__campos">
            <span>Medio de transporte</span>
            <p> {data.medioTransporte}</p>
      </div>
      <div className="card__viajes__campos">
            <span>Trabajadores</span>
            <p> Registrado por : <span className="registrado">{data.nombreRegistro}</span></p>
            {data.nombresTrabajadores.map((trabajador,index) => <p key={`${trabajador} ${index}`}>{`Trabajador: ${trabajador}`}</p>)}
      </div>
      <div className="card__viajes__campos">
            <span>Solo ida / ida y vuelta</span>
            <p> {`${data.soloIda ? "Solo ida" : "Ida y vuelta"}`}</p>
      </div>
      <div className="card__viajes__campos">
            <span>Factor de emision</span>
            <p>Viaje : {data.factorEmision.toFixed(2)} kgCO2</p>
            <p>Por persona : {(data.factorEmision / data.nombresTrabajadores.length).toFixed(2)} kgCO2</p>
      </div>
      <div className="card__viajes__campos">
            <span>Fecha del registro</span>
            <p> {data.fecha}</p>
      </div>
    </div>
  );
};

export default CardViajes;
