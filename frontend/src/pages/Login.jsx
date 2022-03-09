import React from 'react'

import {useForm} from '../hooks/useForm'

import {Link} from 'react-router-dom'

const Login = () => {

  const {inputs,login,usuario,password} = useForm()

  return (
    <div className="container__login">
        <form className="container__login__form" onSubmit={(e) => login(e)}>
          <h2>Inicie sesion para utilizar la aplicación</h2>
          <span className="border__bot mb-15 ">
          </span>
          <input type="text" name="usuario" placeholder="Nombre" ref={usuario} className={inputs.user} />
          <input type="password" name="password" placeholder="Contraseña" ref={password} className={inputs.password}/>
          <input type="submit" value="Iniciar sesión"/>
        </form>
        <div className="container__login__btn__registro">
          <span>¿No tiene una cuenta?</span>
          <Link to="/registro" >
             Registro
          </Link>
        </div>
    </div>
  )
}

export default Login