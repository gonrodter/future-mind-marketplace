import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import MainMint from "./components/FutureMind/MainMint";
import Navbar from "./components/Reutilized/Navbar";
import Home from "./components/MainPage/Home";
import TopCollections from "./components/MainPage/TopCollections";
import Advices from "./components/MainPage/Advices";
import Footer from "./components/Reutilized/Footer";
import CollectionInfo from "./components/FutureMind/CollectionInfo";
import CollectionAboutUs from "./components/FutureMind/CollectionAboutUs";
import CollectionRoadmap from "./components/FutureMind/CollectionRoadmap";
import CollectionTeam from "./components/FutureMind/CollectionTeam";
import CollectionFAQ from "./components/FutureMind/CollectionFAQ";
import OwnedNFTsList from "./components/MyWallet/OwnedNFTsList";
import ProfileSection from "./components/MyWallet/ProfileSection";
import NFTView from "./components/BuySell/NFTView";
import FAQ from "./components/FooterPages/FAQ";




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
                <Home />
                {/* <TopCollections /> */}
                <Advices />
              </>
            }
          ></Route>
          <Route
            path="/futuremind"
            element={
              <>
                <MainMint accounts={accounts} setAccounts={setAccounts} />{" "}
                <CollectionInfo />
                <CollectionAboutUs />
                <CollectionRoadmap />
                <CollectionTeam /> <CollectionFAQ />
              </>
            }
          ></Route>
          <Route
            path="/mywallet"
            element={
              <>
                {/* <ProfileSection /> */}
                <OwnedNFTsList />
              </>
            }
          ></Route>
          <Route 
            path="/marketplace" 
            element=
              {<NFTView />}>
          </Route>
          <Route 
            path="/faq" 
            element=
              {<FAQ />}>
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
