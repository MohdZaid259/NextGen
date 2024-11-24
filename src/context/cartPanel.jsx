import React, { createContext, useState } from "react";

export const CardPanelContext = createContext();

export const CardPanelProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => setIsOpen((prev) => !prev);

  return (
    <CardPanelContext.Provider value={{ isOpen, togglePanel }}>
      {children}
    </CardPanelContext.Provider>
  );
};
