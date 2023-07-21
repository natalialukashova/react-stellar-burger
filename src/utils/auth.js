import { useContext, useState, createContext } from "react";
import { api } from "../Api/Api";
import { setCookie } from "./setCockie";

const AuthContext = createContext(undefined);

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export function useProvideAuth() {
  const [user, setUser] = useState(null);

  const registrationUser = async (form) => {
    const data = await api
      .registerRequest(form)
      .then((res) => res.json())
      .then((data) => data);
    if (data.success) {
      setUser({...data.user, id: data.user._id})
    }
  };

  const signIn = async (form) => {
    const data = await api
      .loginRequest(form)
      .then((res) => {
        let authToken;

        res.headers.forEach((header) => {
          if (header.indexOf("Bearer") === 0) {
            authToken = header.split("Bearer ")[1];
          }
        });
        if (authToken) {
          setCookie("token", authToken);
        }
        return res.json();
      })
      .then((data) => data);

    if (data.success) {
      setUser({ ...data.user, id: data.user._id });
    }
  };

  return {
    user,
    signIn,
    registrationUser,
  };
}
