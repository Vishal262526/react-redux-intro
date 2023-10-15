import { connect, useSelector } from "react-redux";

const Header = ({ balance, isLoading }) => {
  // const balance = useSelector((store) => store.account.balance);

  return (
    <div className="container-fluid bg-dark py-3">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="text-white m-0">Bank</h1>
        <p className="text-white m-0 fs-3 fw-bolder">
          {isLoading ? "Loading..." : balance} Rs
        </p>
      </div>
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    balance: state.account.balance,
    isLoading: state.account.isLoading,
  };
};

export default connect(mapStateToProp)(Header);
