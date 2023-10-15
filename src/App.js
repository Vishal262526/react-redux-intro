import { useSelector } from "react-redux";
import CreateCusotomer from "./featires/customer/CreateCusotomer";
import Customer from "./featires/customer/Customer";
import Header from "./components/Header";
import AccountOperation from "./featires/account/AccountOperation";

function App() {
  const fullName = useSelector((store) => store.customer.fullName);

  return (
    <>
      <Header />
      {fullName === "" ? (
        <CreateCusotomer />
      ) : (
        <>
          <Customer />
          <AccountOperation />
        </>
      )}
    </>
  );
}

export default App;
