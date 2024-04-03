import {
  CURRENT_USER,
  ERROR,
  LOADING,
  LOGIN_USER,
} from "../constants/actions-types";
import axios from "axios";
import { url } from "../../utils";

export const login = ({loginDetails,navigate}) => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .post(`${url}/api/v1/auth/login`, loginDetails)
    .then((response) =>
    {
      dispatch({ type: LOGIN_USER, payload: response.data.data });
navigate("/dashboard");
    }
    )
    .catch((err) => {
      dispatch({ type: ERROR, payload: err.response.data.message });
    });
};
export const current = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("accessToken"),
      },
    };
    let result = await axios
      .get(`${url}/api/user/loggedUser`, config)
      .catch((err) => {
        if (err.response.data.message === "Invalid token") {
          localStorage.removeItem("accessToken");
          window.location.reload();
        }
      });
    if (result.data.status) {
      dispatch({ type: CURRENT_USER, payload: result.data });
    }
  } catch (error) {
    console.log(error);
  }
};
export const register = ({ user, logined }) => dispatch => {
  dispatch({ type: LOADING });

  axios.post(`/api/v1/auth/register`, user)
    .then(response => {
      logined()
     // dispatch({ type: REGISTER_USER, payload: response.data });
      // Assuming successful registration should navigate to a certain page
      // navigate("/login"); // You might want to navigate to login page or home page after registration
    })
    .catch(err => {
      dispatch({ type: ERROR, payload:
err });
    });
};
