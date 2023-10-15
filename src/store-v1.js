import { configureStore } from "@reduxjs/toolkit";

import accountSlice from "./featires/account/accountSlice";
import customerReducer from "./featires/customer/customerSlice";

const store = configureStore({
  reducer: {
    account: accountSlice,
    customer: customerReducer,
  },
});

export default store;
