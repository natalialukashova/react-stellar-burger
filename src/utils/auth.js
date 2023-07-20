import { useContext, useState, createContext } from "react";
import { api } from "../Api/Api";

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

  const signIn = async (form) => {
    const data = await api
      .loginRequect(form)
      .then((res) => res.json())
      .then((data) => data);

      if(data.success) {
        setUser({...data.user, id: data.user._id})
      }
  };

  return {
    user,
    signIn,
  }
}
