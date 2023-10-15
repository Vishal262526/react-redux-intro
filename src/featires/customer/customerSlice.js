const initStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const customerReducer = (state = initStateCustomer, action) => {
  switch (action.type) {
    case "customer/create":
      console.log(action.payload.nationalId);
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
};

const createCustomer = (fullName, nationalId) => {
  return {
    type: "customer/create",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
};

const updateName = (fullName) => {
  return { type: "customer/updateName", payload: fullName };
};

export { createCustomer, updateName };
export default customerReducer;
