/**
 * Here is the best example I found for doing this in typescript
 * 
 * https://www.carlrippon.com/react-context-with-typescript-p1/
 * https://www.carlrippon.com/react-context-with-typescript-p2/
 */


import React from "react";

import { useState } from 'react';
import { ITestType } from "./data/adhoc";

type AppStateType = {
    activeEvidence? : Array<ITestType|string>;
}

type AppStateContextType = {
    state: AppStateType;
    setState: (value: AppStateType) => void;
}

type AppContextProviderProps = {
    children: React.ReactNode
};

const defaultState : AppStateType = {
    activeEvidence : []
};

const defaultStateContext : AppStateContextType = {
    state: defaultState,
    setState: (value: AppStateType) => {}
};

const AppContext = React.createContext<AppStateContextType>(defaultStateContext);

const AppContextProvider = ( { children }: AppContextProviderProps) => {
  const [state, setState] = useState(defaultState);

  return (
    <AppContext.Provider value={{state, setState}}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };

export const useAppState = () => React.useContext(AppContext);