export class Api {
  constructor({ baseUrl, ingredients, order }) {
    this._baseUrl = baseUrl;
    this._ingredients = ingredients;
    this._order = order;
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
}

const config = {
  baseUrl: "https://norma.nomoreparties.space/api",
  ingredients: "/ingredients",
  order: "/orders",
};

const api = new Api(config);
export { api };
