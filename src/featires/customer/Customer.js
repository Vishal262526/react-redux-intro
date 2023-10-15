import { useSelector } from "react-redux";

const Customer = () => {
  const fullName = useSelector((store) => store.customer.fullName);

  return (
    <div className="container">
      <h2 className="py-4 text-center fw-bold text-dark">Welcome {fullName}</h2>
    </div>
  );
};

export default Customer;
