import React, { createContext, useContext, useState } from "react";

const EnquireModalContext = createContext();

export const EnquireModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <EnquireModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </EnquireModalContext.Provider>
  );
};

export const useEnquireModal = () => {
  const context = useContext(EnquireModalContext);
  if (!context) {
    throw new Error("useEnquireModal must be used within EnquireModalProvider");
  }
  return context;
};
