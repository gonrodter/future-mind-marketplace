import { useState } from "react";

import MainMint from "./MainMint";
import NavBar from "./NavBar"

// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Advices from "./components/Advices";
// import Footer from "./components/Footer";

function App () {
  const [accounts, setAccounts] = useState([]);

  return (
    <div>
      <NavBar accounts={accounts} setAccounts={setAccounts} />
      <MainMint accounts={accounts} setAccounts={setAccounts} />
    </div>

    // <div>
    //   <Navbar />
    //   <Home />
    //   <Advices />
    //   <Footer />
    // </div>
  );
};

export default App;
