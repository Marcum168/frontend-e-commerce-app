// const baseURL =
//   process.env.NODE_ENV === "production"
//     ? "fill in once deplyed"
//     : "http://localhost:3001/";
// fetch(baseURL + "/login");
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

export const cartAddRequest = (cart) => {
  return fetch(baseURL + "cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      cart,
    }),
  }).then((res) => res.json());
};
export const cartGetRequest = (cart) => {
  return fetch(baseURL + "/cart",).then((res) => res.json());
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
  
  
  return fetch(baseURL + "auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const logoutRequest = (_id) => {

  return fetch(baseURL + "auth/logout", {
    headers: { Authorization: "Bearer " + _id },
  }).then((res) => res.json())
}
export const createUser = (user) => {
  return fetch(baseURL + "", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user,
    }),
  }).then((res) => res.json());
};
