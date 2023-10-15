import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposite, withdrawal, requestLoan, paidLoan } from "./accountSlice";

const AccountOperation = () => {
  const dispatch = useDispatch();
  const [depositeAmount, setDepositeAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("INR");

  const { isLoading } = useSelector((store) => store.account);

  const handleDeposite = () => {
    dispatch(deposite(depositeAmount, currency));
    setDepositeAmount("");
    setCurrency("INR");
  };
  const handleWithdrawal = () => {
    dispatch(withdrawal(withdrawalAmount));
    setWithdrawalAmount("");
  };

  const handleRequestLoan = () => {
    if (!loanAmount || !loanPurpose) return;

    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  };

  const handlePaidLoan = () => {
    dispatch(paidLoan());
    setLoanAmount(0);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3 bg-light p-5">
            <label className="form-label" htmlFor="full_name">
              Deposite
            </label>
            <input
              className="form-control"
              onChange={(e) => setDepositeAmount(e.target.value)}
              value={depositeAmount}
              type="number"
            />
            <div className="mt-2">
              <label htmlFor="currency">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                id="currency"
                className="form-select"
                aria-label="Default select example"
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
              </select>
            </div>
            <div className="text-center mt-3">
              <button onClick={handleDeposite} className="btn btn-dark">
                {isLoading
                  ? "Converting..."
                  : `Deposite ${depositeAmount} ${currency}`}
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3 bg-light p-5">
            <label className="form-label" htmlFor="full_name">
              Customer Nationa ID
            </label>
            <input
              className="form-control"
              onChange={(e) => setWithdrawalAmount(e.target.value)}
              value={withdrawalAmount}
              type="text"
            />
            <div className="text-center mt-3">
              <button onClick={handleWithdrawal} className="btn btn-dark">
                Create
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3 bg-light p-5">
            <label className="form-label" htmlFor="full_name">
              Loan Amount
            </label>
            <input
              className="form-control"
              onChange={(e) => setLoanAmount(e.target.value)}
              value={loanAmount}
              type="text"
            />
            <label className="form-label" htmlFor="full_name">
              Loan Purpose
            </label>
            <input
              className="form-control"
              onChange={(e) => setLoanPurpose(e.target.value)}
              value={loanPurpose}
              type="text"
            />
            <div className="text-center mt-3">
              <button onClick={handleRequestLoan} className="btn btn-dark mx-2">
                Request Loan
              </button>

              <button onClick={handlePaidLoan} className="btn btn-dark mx-2">
                Pay Loan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOperation;
