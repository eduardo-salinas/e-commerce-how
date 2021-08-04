import axios from "axios";
import {
  GET_ORDERS,
  GET_ORDER_DETAIL,
  GET_PRODUCTS_ALL,
  GET_PRODUCTS_FOR_CATEGORY,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCTS_BY_BARCODE,
  GET_PRODUCT_DETAIL,
  GET_URL,
  GET_USERS,
  GET_USER_DETAIL,
  GET_VARIETALS,
  LOAD_PROFILE,
  GET_ORDERS_FOR_STATUS,
  LOADING,
  GET_ORDERS_FOR_USER,
  LOAD_NEWSLETTERS,
  GET_PRODUCTS_BY_VINEYARD
} from "./constant";

export const getProductsAll = () => {
  return async (dispatch) => {
    try {
      const products = await axios.get(`${GET_URL}products`);
      return dispatch({ type: GET_PRODUCTS_ALL, payload: products.data });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_PRODUCTS_ALL, payload: [] });
    }
  };
};

export const getProductsByName = (name) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const products = await axios.get(`${GET_URL}products?name=${name}`);
      return dispatch({
        type: GET_PRODUCTS_BY_NAME,
        payload: products.data,
      });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_PRODUCTS_BY_NAME, payload: [] });
    }
  };
};

export const getProductsByVineyard = (vineyard) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const products = await axios.get(`${GET_URL}products?vineryard=${vineyard}`);
       console.log(products.data)
      return dispatch({
        type: GET_PRODUCTS_BY_VINEYARD,
        payload: products.data,
      });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_PRODUCTS_BY_VINEYARD, payload: [] });
    }
  };
};

export const getProductsByBarcode = (barcode) => {
  return async (dispatch) => {
    // dispatch({ type: LOADING });
    try {
      const products = await axios.get(`${GET_URL}products?barcode=${barcode}`);
      // console.log(products.data);
      return dispatch({
        type: GET_PRODUCTS_BY_BARCODE,
        payload: products.data,
      });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_PRODUCTS_BY_BARCODE, payload: [] });
    }
  };
};

export const getProductsForCategory = (category) => {
  return async (dispatch) => {
    try {
      const products = await axios.get(
        `${GET_URL}products?category=${category}`
      );
      return dispatch({
        type: GET_PRODUCTS_FOR_CATEGORY,
        payload: products.data,
      });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_PRODUCTS_FOR_CATEGORY, payload: [] });
    }
  };
};

export const getProductDetail = (id) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const products = await axios.get(`${GET_URL}products/${id}`);
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: products.data,
      });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_PRODUCT_DETAIL, payload: [] });
    }
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const users = await axios.get(`${GET_URL}users/allusers`, {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      return dispatch({ type: GET_USERS, payload: users.data });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_USERS, payload: [] });
    }
  };
};

export const getUserDetail = (id) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const users = await axios.get(`${GET_URL}users/${id}`, {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      return dispatch({ type: GET_USER_DETAIL, payload: users.data });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_USER_DETAIL, payload: {} });
    }
  };
};

export const getOrders = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const orders = await axios.get(`${GET_URL}orders`, {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      return dispatch({ type: GET_ORDERS, payload: orders.data });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_ORDERS, payload: [] });
    }
  };
};

export const getOrderDetail = (id) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const order = await axios.get(`${GET_URL}orders/${id}`, {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      return dispatch({ type: GET_ORDER_DETAIL, payload: order.data });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_ORDER_DETAIL, payload: {} });
    }
  };
};

export const getOrderForStatus = (status) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const order = await axios.get(`${GET_URL}orders?state=${status}`, {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      return dispatch({ type: GET_ORDERS_FOR_STATUS, payload: order.data });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_ORDERS_FOR_STATUS, payload: [] });
    }
  };
};

export const getOrderForUser = (user) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const order = await axios.get(`${GET_URL}orders?user=${user}`, {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      return dispatch({ type: GET_ORDERS_FOR_USER, payload: order.data });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_ORDERS_FOR_USER, payload: [] });
    }
  };
};

export const getVarietals = () => {
  return async (dispatch) => {
    // dispatch({ type: LOADING });
    try {
      const varietals = await axios.get(`${GET_URL}varietal`);
      return dispatch({ type: GET_VARIETALS, payload: varietals.data });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_VARIETALS, payload: [] });
    }
  };
};

export const getProfile = () => {
  let apiRes;
  return async (dispatch) => {
    try {
      apiRes = await axios.get(`${GET_URL}users`, {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      dispatch({
        type: LOAD_PROFILE,
        payload: { user: apiRes.data, log: "on" },
      });
    } catch (err) {
      // apiRes = err.response.data.message;
      dispatch({ type: LOAD_PROFILE, payload: { log: "off" } });
    }
  };
};

export const getNewsletters = () => {
  let apiRes;
  return async (dispatch) => {
    try {
      apiRes = await axios.get(`${GET_URL}sendMail/newsletters`, {
        headers: {
          authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      dispatch({
        type: LOAD_NEWSLETTERS,
        payload: { newsletters: apiRes.data },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
