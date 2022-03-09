import React,{useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import usersAction from './redux/actions/usersAction'
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import Login from './pages/Login'
import Registro from './pages/Registro'
import Viajes from "./pages/Viajes";
import CargaViajes from "./pages/CargaViajes";

function App() {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.usersReducer.user);
  const token = localStorage.getItem('token')
  
  useEffect(() =>{
    token && dispatch(usersAction.signUpWithToken(token))
  },[])

  return (
    <>
      <BrowserRouter>
      <div className="main">
        {user && <Navbar />}
          <Routes>
            {user ? (
              <>
                <Route path="*" element={<Viajes />}></Route>
                <Route path="/registro-viaje" element={<CargaViajes />}></Route>
              </>
            ) : (
              <>
                <Route path="/registro" element={<Registro />}></Route>
                <Route path="*" element={<Login />}></Route>
              </>
            )}
          </Routes>
        </div>
        <ToastContainer
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
        />
      <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;