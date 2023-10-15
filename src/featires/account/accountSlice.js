import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposite: function (state, action) {
      state.balance += parseInt(action.payload);
      state.isLoading = false;
    },
    withdrawal: function (state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare: function (amount, purpose) {
        console.log(`Amout is ${amount}`);
        console.log(`Purpose is ${purpose}`);
        return {
          payload: {
            amount,
            purpose,
          },
        };
      },

      reducer: function (state, action) {
        if (state.loan > 0) return;

        state.loan = parseInt(action.payload.amount);
        state.loanPurpose = action.payload.purpose;
        state.balance += parseInt(action.payload.amount);
      },
    },
    paidLoan: function (state) {
      if (state.loan > 0) return;
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency: function (state, action) {
      state.isLoading = true;
    },
  },
});

export const deposite = (amount, currency) => {
  if (currency === "INR")
    return { type: "account/deposite", payload: parseInt(amount) };

  return async function (dispatch, getState) {
    // API Call
    try {
      dispatch({ type: "account/convertingCurrency" });
      const host = "api.frankfurter.app";
      const res = await fetch(
        `https://${host}/latest?amount=${amount}&from=${currency}&to=INR`
      );

      if (!res.ok) {
        throw new Error("Problem with the server");
      }

      const data = await res.json();
      const convertedAmount = data.rates.INR;
      console.log(convertedAmount);

      dispatch({
        type: "account/deposite",
        payload: parseInt(convertedAmount),
      });
    } catch (e) {
      console.log(e.message);
    }

    return;
  };
};

console.log(accountSlice);

// const accountReducer = (state = initStateAccount, action) => {
//   switch (action.type) {
//     case "account/deposite":
//       console.log(action.payload);
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };

//     case "account/withdrawal":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/convertingCurrency":
//       return { ...state, isLoading: true };

//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     default:
//       return state;
//   }
// };

// const deposite = (amount, currency) => {
//   if (currency === "INR")
//     return { type: "account/deposite", payload: parseInt(amount) };

//   return async function (dispatch, getState) {
//     // API Call
//     try {
//       dispatch({ type: "account/convertingCurrency" });
//       const host = "api.frankfurter.app";
//       const res = await fetch(
//         `https://${host}/latest?amount=${amount}&from=${currency}&to=INR`
//       );

//       if (!res.ok) {
//         throw new Error("Problem with the server");
//       }

//       const data = await res.json();
//       const convertedAmount = data.rates.INR;
//       console.log(convertedAmount);

//       dispatch({
//         type: "account/deposite",
//         payload: parseInt(convertedAmount),
//       });
//     } catch (e) {
//       console.log(e.message);
//     }

//     return;
//   };
// };
// const withdraw = (amount) => {
//   return { type: "account/withdrawal", payload: amount };
// };
// const requestLoan = (amount, purpose) => {
//   return {
//     type: "account/requestLoan",
//     payload: {
//       amount: parseInt(amount),
//       purpose: purpose,
//     },
//   };
// };
// const payLoan = () => {
//   return {
//     type: "account/payLoan",
//   };
// };

export const { paidLoan, withdrawal, requestLoan } = accountSlice.actions;
// export const {deposite};
export default accountSlice.reducer;
