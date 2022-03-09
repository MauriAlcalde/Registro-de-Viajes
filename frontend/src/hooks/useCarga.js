import { useState, useRef } from "react";
import viajesActions from "../redux/actions/viajesActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const medios = [
  "Tren",
  "Subway",
  "Subterráneo",
  "Auto",
  "Camioneta",
  "Motocicleta",
  "Bus Transantiago",
  "Bus",
  "Avión (Nacional)",
  "Avión (Internacional)",
  "Caminando",
];

export const useCarga = () => {
  const initialValues = {
    direccionPartida: "",
    direccionDestino: "",
    medioTransporte: "",
    distancia: "",
    nombresTrabajadores: "",
    nombreRegistro: "",
    soloIda: "",
  };
  const dispatch = useDispatch();
  const usuarioId = useSelector((store) => store.usersReducer.id);
  const [values, setValues] = useState(initialValues);

  const direccionPartida = useRef();
  const direccionDestino = useRef();
  const medioTransporte = useRef();
  const distancia = useRef();
  const nombresTrabajadores = useRef();
  const nombreRegistro = useRef();
  const soloIda = useRef();

  const handleForm = () => {
    const aux = {
      direccionPartida: direccionPartida.current.value,
      direccionDestino: direccionDestino.current.value,
      medioTransporte: medioTransporte.current.value,
      distancia: Number(distancia.current.value),
      nombresTrabajadores: nombresTrabajadores.current.value.split(","),
      nombreRegistro: nombreRegistro.current.value,
      soloIda: soloIda.current.value,
    };
    setValues(aux);
  };
  const cal = (transporte, km, ida) => {
    let factorUno;
    switch (transporte) {
      case "Tren":
        factorUno = 0.033;
        break;
      case "Subway":
        factorUno = 0.033;
        break;
      case "Subterráneo":
        factorUno = 0.033;
        break;
      case "Auto":
        factorUno = 0.21;
        break;
      case "Camioneta":
        factorUno = 0.0249;
        break;
      case "Motocicleta":
        factorUno = 0.0092;
        break;
      case "Bus Transantiago":
        factorUno = 0.0039;
        break;
      case "Bus":
        factorUno = 0.012;
        break;
      case "Avión (Nacional)":
        factorUno = 0.0279;
        break;
      case "Avión (Internacional)":
        factorUno = 0.179;
        break;
      case "Caminando":
        factorUno = 0;
        break;

      default:
        factorUno = 0;
    }
    const result = factorUno * km * ida;
    return result;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let f = new Date();

    const aux = { ...values };
    let ida = aux.soloIda === "true" ? 1 : 2;
    aux.usuario = usuarioId;
    aux.factorEmision = cal(aux.medioTransporte, aux.distancia, ida);
    aux.fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();

    const check = Object.values(aux).every((ele) => ele);
    if (check && aux.nombresTrabajadores.every((ele) => ele)) {
      dispatch(viajesActions.cargarViaje(aux))
        .then((res) => {
          if (res.success) {
            setValues(initialValues);
            toast.success("Viaje registrado", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            direccionPartida.current.value = "";
            direccionDestino.current.value = "";
            distancia.current.value = "";
            nombresTrabajadores.current.value = "";
            nombreRegistro.current.value = "";
          } else {
            toast.error(res.data.response[0].message, {
              theme: "colored",
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      toast.error("Todos los campos son obligatorios", {
        theme: "colored",
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return {
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
  };
};
