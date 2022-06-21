import React, {useContext, useEffect, useState, createContext} from 'react';
export const BackdropContext = createContext({});

export const BackdropProvider = ({children}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <BackdropContext.Provider
          value={{
           isActive,
           setIsActive,
          }}>
          {children}
        </BackdropContext.Provider>
      );
    };