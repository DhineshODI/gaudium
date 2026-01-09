import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menushow, setMenuShow] = useState(false);

  const menuOnclick = () => {
    setMenuShow((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuShow(false);
  };

  return (
    <MenuContext.Provider value={{ menushow, menuOnclick, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
