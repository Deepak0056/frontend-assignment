import { applyMiddleware, combineReducers, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {productReducer} from './reducer/fetchApi';


const reducer = combineReducers({
  productReducer
})
const store = configureStore({
  reducer,
})
export default store;
// const rootReducer = combineReducers({
//   products: productReducer,
// });

// const store = configureStore({reducer: productReducer}, compose(applyMiddleware(thunk)));

// export default store;


