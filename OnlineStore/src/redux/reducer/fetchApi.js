import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "../actions";

const initialState = {
  products: [],
  error: null,
};

export default productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        error: null,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
