<<<<<<< HEAD
const url =
  process.env.NODE_ENV === "production"
    ? "fill in once deplyed"
    : "http://localhost:3000/";
fetch(url + "/login");
=======
// const baseURL =
//   process.env.NODE_ENV === "production"
//     ? "fill in once deplyed"
//     : "http://localhost:3001/";
// fetch(baseURL + "/login");
>>>>>>> STORE_REQUESTS
const baseURL = "http://localhost:3000/";

export const filterRequest = (products) => {
  return fetch(baseURL + "",).then((res) => res.json());
};
export const searchRequest = (products) => {
  return fetch(baseURL + ":id", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      products,
    }),
  }).then((res) => res.json());
};
<<<<<<< HEAD

export const cartAddRequest = (products) => {
  return fetch(url + "/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      products,
    }),
  }).then((res) => res.json());
};
export const cartAddRequest1 = (cart) => {
  return fetch(url + "cart", {
=======
export const cartAddRequest = (cart) => {
  return fetch(baseURL + "cart", {
>>>>>>> STORE_REQUESTS
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      cart,
    }),
  }).then((res) => res.json());
};
<<<<<<< HEAD

export const cartDeleteRequest = (cart) => {
  return fetch(url + "cart", {
    method: "PATCH",
=======
export const cartGetRequest = (cart) => {
  return fetch(baseURL + "cart",).then((res) => res.json());
}
// export const cartAddRequest = (products) => {
//   return fetch(basebaseURL + "/products", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       products,
//     })
// }).then((res) => res.json());
// }
export const cartDeleteRequest = (cart) => {
  return fetch(baseURL + "cart", {
    method: "DELETE",
>>>>>>> STORE_REQUESTS
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      cart,
    }),
  }).then((res) => res.json()).then((cart)=> console.log(cart));
};

export const purchaseRequest = (cart, spent, balance) => {
  return fetch(url + "/purchase", {
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
  return fetch(url + "auth/login", {
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

export const logoutRequest = (_id) => {
  return fetch(url + "auth/logout", {
    headers: { Authorization: "Bearer " + _id },
<<<<<<< HEAD
  }).then((res) => res.json());
};

export const createUser = (username, password) => {
  return fetch(baseURL + "signUp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
=======
  }).then((res) => res.json())
}
export const createUser = (user) => {
  return fetch(baseURL + "", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user,
>>>>>>> STORE_REQUESTS
    }),
  }).then((res) => res.json());
};
