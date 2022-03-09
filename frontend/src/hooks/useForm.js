import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import usersAction from "../redux/actions/usersAction";
import { toast } from "react-toastify";
export const useForm = () => {
  const [inputs, setInputs] = useState({ user: "", password: "", });

  const dispatch = useDispatch();

  const usuario = useRef();
  const password = useRef();

  const login = (e) => {
    e.preventDefault();
    const check = inputCheck();
    if (check) {
      dispatch(
        usersAction.signIn({
          user: usuario.current.value,
          password: password.current.value,
        })
      )
        .then((res) => {
          if (res.data.success) {
              toast.success("Bienvenido", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            usuario.current.value = "";
            password.current.value = "";
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
      toast.error("Revise los campos", {
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

  const registro = (e)=>{
      e.preventDefault()
      const check = inputCheck();
      if(check){
          dispatch(usersAction.signUp({
            user: usuario.current.value,
            password: password.current.value,
          })
          ).then((res) => {
            if (res.data.success) {
              toast.success("Cuenta registrada", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              usuario.current.value = "";
              password.current.value = "";
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
      }
  }

  const inputCheck = () => {
    const user = /^[A-Za-z]{3,12}$/;
    const pw = /^[a-zA-Z0-9]{8,16}$/;
    let aux = {
      user: user.test(usuario.current.value) ? "input__check" : "input__error",
      password: pw.test(password.current.value)
        ? "input__check"
        : "input__error",
    };
    setInputs(aux);
    return user.test(usuario.current.value) && pw.test(password.current.value)
      ? true
      : false;
  };

  return {
    inputs,
    login,
    registro,
    usuario,
    password,
  };
};