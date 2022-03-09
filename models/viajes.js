const mongoose = require("mongoose");

const viajesSchema = new mongoose.Schema({
  direccionPartida: { type: String, required: true },
  direccionDestino: { type: String, required: true },
  medioTransporte: { type: String, required: true },
  distancia: { type: Number, required: true },
  nombresTrabajadores: { type: Array, required: true },
  nombreRegistro : { type: String, required: true },
  soloIda : { type: Boolean, required: true },
  factorEmision : { type: Number, required: true },
  usuario : {type:mongoose.Types.ObjectId, required: true},
  fecha: { type: String, required: true },
});

const Viaje = mongoose.model("viajes", viajesSchema);

module.exports = Viaje;