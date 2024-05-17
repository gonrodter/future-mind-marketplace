import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
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
import FAQ from "./components/FAQ/FAQ";
import AboutUs from "./components/AboutUs/AboutUs";
import FAQGettingStarted from "./components/FAQ/FAQGettingStarted";
import FAQBuying from "./components/FAQ/FAQBuying";
import FAQSelling from "./components/FAQ/FAQSelling";
import Collection from "./components/Collection/Collection";
import { AddressProvider } from "./contexts/AddressContext";
import MarketplaceSearchBar from "./components/Marketplace/MarketplaceSearchBar";
import TopCollectionsList from "./components/Marketplace/TopCollectionsList";




function App () {
  const [accounts, setAccounts] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <Router>
      <div>
        <AddressProvider>
          <Navbar accounts={accounts} setAccounts={setAccounts} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <TopCollections />
                  <Advices />
                </>
              }
            ></Route>
            <Route
              path="/futuremind"
              element={
                <>
                  <MainMint accounts={accounts} setAccounts={setAccounts} />
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
                  <ProfileSection search={search} setSearch={setSearch} />
                  <OwnedNFTsList search={search} />
                </>
              }
            ></Route>
            <Route
              path="/marketplace"
              element={
                <>
                  <MarketplaceSearchBar />
                  <TopCollectionsList />
                </>
              }
            ></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route
              path="/faq/getting-started"
              element={<FAQGettingStarted />}
            ></Route>
            <Route path="/faq/buying" element={<FAQBuying />}></Route>
            <Route path="/faq/selling" element={<FAQSelling />}></Route>
            <Route path="/collection" element={<Collection />}></Route>
            <Route path="/nft" element={<NFTView />}></Route>
          </Routes>
          <Footer />
        </AddressProvider>
      </div>
    </Router>
  );
}

export default App;
