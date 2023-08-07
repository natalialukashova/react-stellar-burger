import { createContext } from "react";

export type TAuth = {
  user: any;
  signIn: any;
  registrationUser: any;
  verificationUser: any;
  resetUserPassword: any;
  updateUser: any;
  signOut: any;
};

export const AuthContext = createContext<TAuth | undefined>(undefined);
