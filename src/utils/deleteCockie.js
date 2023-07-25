import { setCookie } from "./setCockie";

export function deleteCookie(name) {
  setCookie(name, null, { expires: -1 });
}
