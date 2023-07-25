import { getCookie } from "../utils/getCockie";

export class Api {
  constructor({
    baseUrl,
    ingredients,
    order,
    login,
    register,
    verification,
    resetPassword,
    getUser,
    logout,
  }) {
    this._baseUrl = baseUrl;
    this._ingredients = ingredients;
    this._order = order;
    this._login = login;
    this._register = register;
    this._verification = verification;
    this._resetPassword = resetPassword;
    this._getUser = getUser;
    this._logout = logout;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((err) => {
      err.statusCode = res.status;
      return Promise.reject(err);
    });
  }

  getIngredients = () => {
    return fetch(`${this._baseUrl}${this._ingredients}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  };

  getOrderDetails = (ingredientsList) => {
    return fetch(`${this._baseUrl}${this._order}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredientsList,
      }),
    }).then(this._checkResponse);
  };

  loginRequect = async (form) => {
    return await fetch(`${this._baseUrl}${this._login}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    });
  };

  registerRequest = async (form) => {
    return await fetch(`${this._baseUrl}${this._register}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
      }),
    });
  };

  verificationRequect = async (form) => {
    return await fetch(`${this._baseUrl}${this._verification}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        email: form.email,
      }),
    });
  };

  resetPasswordRequest = async (form) => {
    return await fetch(`${this._baseUrl}${this._resetPassword}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        password: form.password,
        token: form.token,
      }),
    });
  };

  getUserRequest = async () => {
    return await fetch(`${this._baseUrl}${this._getUser}`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    });
  };

  patchUserRequest = async (form) => {
    return await fetch(`${this._baseUrl}${this._getUser}`, {
      method: "PATCH",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password,
      }),
    });
  };

  logoutRequest = async (user) => {
    return await fetch(`${this._baseUrl}${this._logout}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getCookie("token"),
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        token: user.refreshToken,
      })
    });
  };
}

const config = {
  baseUrl: "https://norma.nomoreparties.space/api",
  ingredients: "/ingredients",
  order: "/orders",
  login: "/auth/login",
  register: "/auth/register",
  verification: "/password-reset",
  resetPassword: "/password-reset/reset",
  getUser: "/auth/user",
  logout: "/auth/logout",
};

const api = new Api(config);
export { api };
