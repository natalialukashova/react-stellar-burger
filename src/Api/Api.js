export class Api {
  constructor({ baseUrl, ingredients, order, login, register, verification }) {
    this._baseUrl = baseUrl;
    this._ingredients = ingredients;
    this._order = order;
    this._login = login;
    this._register = register;
    this._verification = verification;
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
}

const config = {
  baseUrl: "https://norma.nomoreparties.space/api",
  ingredients: "/ingredients",
  order: "/orders",
  login: "/auth/login",
  register: "/auth/register",
  verification: "/password-reset",
};

const api = new Api(config);
export { api };
