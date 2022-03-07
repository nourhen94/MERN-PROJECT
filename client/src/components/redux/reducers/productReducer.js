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

const init = {
  products: [],
  loading: false,
  errors: [],
};

export const productReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
    case DELETE_PRODUCTS:
    case EDIT_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
    case DELETE_PRODUCTS_SUCCESS:
    case EDIT_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case GET_PRODUCTS_FAIL:
    case DELETE_PRODUCTS_FAIL:
    case EDIT_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        errors: [...state.errors, payload],
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, payload],
      };
    case ADD_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        errors: [...state.errors, payload],
      };

    default:
      return state;
  }
};

export default productReducer;
