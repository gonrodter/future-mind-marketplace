import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import MainMint from "./MainMint";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Advices from "./components/Advices";
import Footer from "./components/Footer";
import CollectionInfo from "./components/CollectionInfo";
import CollectionAboutUs from "./components/CollectionAboutUs";
import CollectionRoadmap from "./components/CollectionRoadmap";
import CollectionTeam from "./components/CollectionTeam";
import CollectionFAQ from "./components/CollectionFAQ";



function App () {
  const [accounts, setAccounts] = useState([]);

  return (
    <Router>
      <div>
        <Navbar accounts={accounts} setAccounts={setAccounts} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar accounts={accounts} setAccounts={setAccounts} />
                <Home />
                <Advices />
              </>
            }
          ></Route>
          <Route
            path="/futuremind"
            element={
              <>
                <MainMint accounts={accounts} setAccounts={setAccounts} />
                <CollectionInfo /> <CollectionAboutUs /> <CollectionRoadmap />
                <CollectionTeam /> <CollectionFAQ />
              </>
            }
          ></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
