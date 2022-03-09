const Viaje = require("../models/viajes");

const viajesControllers = {
  agregarViaje: async (req, res) => {
    const nuevoViaje = new Viaje({ ...req.body });
    try {
      await nuevoViaje.save();
      return res.json({
        mensaje: "Agregado con exito",
        success: true,
        res: nuevoViaje,
      });
    } catch (err) {
      return res.status(400).json({
        message: "failed request ",
        res: err.message,
      });
    }
  },
  obtenerTodosViajes: async (req, res) => {
    if (req.user.rol === "directora") {
      try {
        let viajes = await Viaje.find();
        res.json({ success: true, res: viajes });
      } catch (err) {
        return res.json({
          message: "error en la petecion",
          res: err.message,
        });
      }
    }else{
      try {
        let viajes = await Viaje.find({usuario:req.user._id});
        res.json({ success: true, res: viajes });
      } catch (err) {
        return res.json({
          message: "error en la petecion",
          res: err.message,
        });
      }
    }
  },
  modificarViaje: async (req, res) => {
    Viaje.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body },
      { new: true }
    )
      .then((response) => res.json({ success: true, respuesta: response }))
      .catch((error) => res.json({ success: false, response: error.message }));
  },
  borrarViaje: async (req, res) => {
    try {
      let viaje = await Viaje.findOneAndDelete({ _id: req.params.id });
      res.json({ res: viaje });
    } catch (err) {
      return res.status(400).json({
        message: "error en la petecion",
        res: err.message,
      });
    }
  },
};

module.exports = viajesControllers;
