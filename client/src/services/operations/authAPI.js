import { toast } from "react-hot-toast";
import { setLoading, setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiconnector";
import { authEndpoints } from "../apis";

const { SIGNUP_API, LOGIN_API } = authEndpoints;

export function signUp(username, email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Registering...");
    dispatch(setLoading(true));
    try {
      const res = await apiConnector("POST", SIGNUP_API, {
        username,
        email,
        password,
      });

      console.log("SIGNUP API RESPONSE............", res);

      if (!res.data.success) {
        throw new Error(res.data.message);
      }

      toast.success("Signup Successful");
      navigate("/login");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Logging in...");
    dispatch(setLoading(true));
    try {
      const res = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });

      console.log("LOGIN API RESPONSE............", res);

      if (!res.data.success) {
        throw new Error(res.data.message);
      }

      toast.success("Login Successful");
      dispatch(setToken(res.data.token));
      dispatch(setUser(res.data.user));

      // Save user details and token to local storage
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error("Login Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

/**
 * Handles user logout
 * @param {function} navigate - Navigation function
 */
export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/");
  };
}
