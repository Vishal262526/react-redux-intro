import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer, updateName } from "./customerSlice";

const CreateCusotomer = () => {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  const handleCreateCustomer = () => {
    if (!fullName || !nationalId) return;

    dispatch(createCustomer(fullName, nationalId));
  };

  return (
    <div className="container ">
      <h2 className="text-center py-4">Create new Customer</h2>
      <div className="form bg-light border border-dark p-5">
        <div className="mb-3">
          <label className="form-label" htmlFor="full_name">
            Customer Full Name
          </label>
          <input
            className="form-control"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="full_name">
            Customer Nationa ID
          </label>
          <input
            className="form-control"
            onChange={(e) => setNationalId(e.target.value)}
            value={nationalId}
            type="text"
          />
        </div>
        <div className="text-center">
          <button onClick={handleCreateCustomer} className="btn btn-dark">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCusotomer;
