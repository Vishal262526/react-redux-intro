import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import accountReducer from "./featires/account/accountSlice";
import customerReducer from "./featires/customer/customerSlice";

const rotReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rotReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
