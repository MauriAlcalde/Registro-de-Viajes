import React, { useState } from "react";
import "./navbar.scss";
import { FcMenu } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import userActions from '../../redux/actions/usersAction'
const Navbar = () => {
  const [display, setDisplay] = useState(true);
  const location = useLocation();
  const handleDisplay = () => setDisplay(!display);
  const user = useSelector((store) => {
    return({
      user: store.usersReducer.user,
      rol:store.usersReducer.rol
    }
     
    )
  });
  const dispatch = useDispatch();
  const logout = () => dispatch(userActions.logout())
  console.log(user)
  return (
    <>
      <div className="navbar">
        <FcMenu onClick={handleDisplay} className="btn__menu" />

        {display && (
          <div className="container__navbar">
              
            <div className="container__navbar__links">
              <h1>{user.user}</h1>
              <Link to="/">
                <span className={location.pathname === "/" ? "border_b30" : ""}>
                  {user.rol==="directora" ? "Todos los Viajes": "Mis Viajes"}
                </span>{" "}
              </Link>
              <Link to="/registro-viaje">
                <span
                  className={location.pathname === "/registro-viaje" ? "border_b30" : ""}
                >
                  Cargar Viaje
                </span>{" "}
              </Link>
              
            <Link to="/" onClick={logout}>LogOut</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
