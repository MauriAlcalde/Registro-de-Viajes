import axios from "axios";

const URL = "http://localhost:4000/api/";
const viajesActions = {

  cargarViaje: (data) => {
    return async () => {
      try{
        let token = localStorage.getItem("token");
        const res = await axios.post(`${URL}viajes`, { ...data },{
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        if (!res.data.success) {
          return res;
        } else {
          return res.data;
        }
      }catch (err) {console.log(err)}
      };
  },
  obtenerViajes : () =>{
    return async (dispatch) => {
      try{
        let token = localStorage.getItem("token");
        const res = await axios.get(`${URL}viajes`,{
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        return res.data.res
      }catch (err) {console.log(err)}
      
    }
  }
};

export default viajesActions;