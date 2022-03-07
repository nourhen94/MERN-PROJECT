import axios from "axios";
import {
  ADD_PRODUCTS,
  ADD_PRODUCTS_FAIL,
  ADD_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS,
  DELETE_PRODUCTS_FAIL,
  DELETE_PRODUCTS_SUCCESS,
  EDIT_PRODUCTS,
  EDIT_PRODUCTS_FAIL,
  EDIT_PRODUCTS_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
} from "../actionsTypes";

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS,
  });
  try {
    const { data } = await axios.get("/product/get_products");
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: error.response.data,
    });
  }
};

export const DeleteProducts = () => async (dispatch) => {
  dispatch({
    type: DELETE_PRODUCTS,
  });
  try {
    const { data } = await axios.delete("/product/delete_products/:id");
    dispatch({
      type: DELETE_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCTS_FAIL,
      payload: error.response.data,
    });
  }
};

export const EditProducts = () => async (dispatch) => {
  dispatch({
    type: EDIT_PRODUCTS,
  });
  try {
    const { data } = await axios.put("/product/edit_products/:id");
    dispatch({
      type: EDIT_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_PRODUCTS_FAIL,
      payload: error.response.data,
    });
  }
};

export const AddProducts = () => async (dispatch) => {
  dispatch({
    type: ADD_PRODUCTS,
  });
  try {
    const { data } = await axios.post("/product/add_products");
    dispatch({
      type: ADD_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PRODUCTS_FAIL,
      payload: error.response.data,
    });
  }
};
