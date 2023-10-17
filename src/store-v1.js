import { configureStore } from "@reduxjs/toolkit";

import accountSlice from "./featires/account/accountSlice";
import customerSlice from "./featires/customer/customerSlice";

const store = configureStore({
  reducer: {
    account: accountSlice,
    customer: customerSlice,
  },
});

export default store;
