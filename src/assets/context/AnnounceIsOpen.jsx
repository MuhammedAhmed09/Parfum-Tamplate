import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AnnounceContext = createContext();

const AnnounceProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnnounceContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </AnnounceContext.Provider>
  );
};

export default AnnounceProvider;
