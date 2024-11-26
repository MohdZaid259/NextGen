import React, { createContext, useState } from "react";

export const CardPanelContext = createContext();

export const CardPanelProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cartClassName = 'cart'

  const togglePanel = () => setIsOpen((prev) => !prev);

  return (
    <CardPanelContext.Provider value={{ isOpen, togglePanel, cartClassName }}>
      {children}
    </CardPanelContext.Provider>
  );
};
