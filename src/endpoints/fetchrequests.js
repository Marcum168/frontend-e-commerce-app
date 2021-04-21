const url =
  process.env.NODE_ENV === "production"
    ? "fill in once deplyed"
    : "http://localhost:3001/";
fetch(url + "/login");
const baseURL = "http://localhost:3000/";

export const filterRequest = (products) => {
  return fetch(url + "", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      products,
    }),
  }).then((res) => res.json());
};
export const searchRequest = (products) => {
  return fetch(url + ":id", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      products,
    }),
  }).then((res) => res.json());
};
export const cartAddRequest = (products) => {
  return fetch(baseURL + "/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      products,
export const cartAddRequest = (cart) => {
  return fetch(url + "cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      cart,
    }),
  }).then((res) => res.json());
};

export const cartDeleteRequest = (cart) => {
  return fetch(baseURL + "cart", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      cart,
    }),
  }).then((res) => res.json());
};

export const purchaseRequest = (cart, spent, balance) => {
  return fetch(baseURL + "/purchase", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      cart,
      spent,
      balance,
    }),
  }).then((res) => res.json());
};

export const manageBalanceRequest = (balance) => {
  return fetch(baseURL + "auth/login", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      balance,
    }),
  }).then((res) => res.json());
};

export const loginRequest = (username, password) => {
  return fetch(url + "auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const createUser = (username, password) => {
  return fetch(url + "signUp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};
