import axios from "axios";

const URL = "http://localhost:4000/api/";

const userActions = {
  signUp: ({ user, password }) => {
    return async (dispatch) => {
      const res = await axios.post(`${URL}signup`, { user, password });
      if (!res.data.success) {
        return res;
      } else {
        localStorage.setItem("token", res.data.response.token);

        dispatch({
          type: "signIn",
          payload: {
            user: res.data.response.usuario.user,
            rol: res.data.response.usuario.rol,
            id: res.data.response.usuario._id,
          },
        });
        return res;
      }
    };
  },
  signIn: ({ user, password }) => {
    return async (dispatch) => {
      const res = await axios.post(`${URL}signin`, { user, password });
      if (!res.data.success) {
        return res;
      } else {
        localStorage.setItem("token", res.data.response.token);
        dispatch({
          type: "signIn",
          payload: {
            user: res.data.response._doc.user,
            rol: res.data.response._doc.rol,
            id: res.data.response._doc._id,
          },
        });
        return res;
      }
    };
  },
  signUpWithToken: (token) => {
    return async (dispatch) => {
      try {
        const res = await axios.post(
          `${URL}/signin/token`,
          {},
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        res.data.success &&
          dispatch({
            type: "signIn",
            payload: {
              user: res.data.response.user,
              rol: res.data.response.rol,
              id: res.data.response.id,
            },
          });
        return res.data.success ? res.data : null;
      } catch (err) {
        console.log(err);
      }
    };
  },
  logout: () => {
    return (dispatch) => {
      localStorage.clear();
      dispatch({ type: "logout", payload: {} });
    };
  },
};

export default userActions;
