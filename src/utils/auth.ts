import { useContext, useState, createContext, ReactElement } from "react";
import { api } from "../Api/Api";
import { setCookie } from "./setCockie";
import { deleteCookie } from "./deleteCockie";
import { AuthContext, TAuth } from "./context";

// export function ProvideAuth({ children }: {children: ReactElement}) {
//   const auth = useProvideAuth();
//   // @ts-ignore
//   return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
// }

export type TProvideAuth = {
  children: ReactElement;
};

export function ProvideAuth({ children }: TProvideAuth) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={undefined}>{children}</AuthContext.Provider>;
};

export function useAuth() {
 return useContext<TAuth>(AuthContext);
}

export function useProvideAuth(): TAuth {
  const [user, setUser] = useState(null);

  const registrationUser = async (form) => {
    const data = await api
      .registerRequest(form)
      .then((res) => res.json())
      .then((data) => data);
    if (data.success) {
      setUser({ ...data.user, id: data.user._id });
    }
  };

  const signIn = async (form) => {
    const data = await api
      .loginRequect(form)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const authToken = data.accessToken.split("Bearer ")[1];

        if (authToken) {
          setCookie("token", authToken, { expires: 1200 });
        }
        return data;
      });

    if (data.success) {
      setUser({
        ...data.user,
        id: data.user._id,
        refreshToken: data.refreshToken,
      });
    }
  };

  const signOut = async () => {
    await api.logoutRequest(user);
    setUser(null);
    deleteCookie('token');
  }

  const verificationUser = async (form) => {
    const data = await api
      .verificationRequect(form)
      .then((res) => res.json())
      .then((data) => data);
    if (data.success) {
      setUser({ user });
    }
  };

  const resetUserPassword = async (form) => {
    const data = await api
      .resetPasswordRequest(form)
      .then((res) => res.json())
      .then((data) => data);
    if (data.success) {
      setUser({ ...data.user, password: data.user.password });
    }
  };

  const updateUser = async (form) => {
    const data = await api
      .patchUserRequest(form)
      .then((res) => res.json())
      .then((data) => data);
    if (data.success) {
      setUser({ name: data.user.name, email: data.user.email, password: data.user.password });
    }
  };

  return {
    user,
    signIn,
    registrationUser,
    verificationUser,
    resetUserPassword,
    updateUser,
    signOut,
  };
}
