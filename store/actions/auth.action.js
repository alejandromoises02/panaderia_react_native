
import { URL_AUT_API } from "../../constants/database";

export const SIGNUP = "SIGNUP";

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(URL_AUT_API, {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
    });
    const data = await response.json();
    dispatch({
        type:SIGNUP,
        token: data.idTikon,
        userId: data.localId,
    });
  };
};
