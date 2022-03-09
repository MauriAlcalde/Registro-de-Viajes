import React from 'react'

import {useForm} from '../hooks/useForm'

import {Link} from 'react-router-dom'

const Registro = () => {

  const {inputs,registro,usuario,password} = useForm()

  return (
    <div className="container__login">
        <form className="container__login__form" onSubmit={(e) => registro(e)}>
          <h2>Bienvenido</h2>
          <span className="border__bot mb-15 ">
          </span>
          <input type="text" name="usuario" placeholder="Nombre" ref={usuario} className={inputs.user} />
          <input type="password" name="password" placeholder="Contraseña" ref={password} className={inputs.password}/>
          <input type="submit" value="Registrarse"/>
        </form>
        <div className="container__login__btn__registro">
          <span>¿Tiene una cuenta?</span>
          <Link to="/login" >
            <button>Iniciar sesion</button>  
          </Link>
        </div>
    </div>
  )
}

export default Registro