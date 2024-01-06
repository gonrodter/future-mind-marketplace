import React, { createContext, useContext, useState, useEffect } from "react";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState(() => {
    // Retrieve the address from localStorage on initial load
    return localStorage.getItem("userAddress") || null;
  });

  const setDynamicAddress = (newAddress) => {
    setAddress(newAddress);
  };

  useEffect(() => {
    // Save the address to localStorage whenever it changes
    localStorage.setItem("userAddress", address);
  }, [address]);

  return (
    <AddressContext.Provider value={{ address, setDynamicAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error("useAddress must be used within an AddressProvider");
  }
  return context;
};