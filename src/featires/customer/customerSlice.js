import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare: (fullName, nationalId) => {
        console.log("Prepare is running");
        console.log(`Full name is ${fullName}`);
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer: (state, action) => {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName: (state, action) => {
      state.fullName = action.payload;
    },
  },
});

// const customerReducer = (state = initStateCustomer, action) => {
//   switch (action.type) {
//     case "customer/create":
//       console.log(action.payload.nationalId);
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt,
//       };

//     case "customer/updateName":
//       return { ...state, fullName: action.payload };

//     default:
//       return state;
//   }
// };

// const createCustomer = (fullName, nationalId) => {
//   return {
//     type: "customer/create",
//     payload: { fullName, nationalId, createdAt: new Date().toISOString() },
//   };
// };

// const updateName = (fullName) => {
//   return { type: "customer/updateName", payload: fullName };
// };

// export { createCustomer, updateName };
export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
