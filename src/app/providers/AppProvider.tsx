import { createContext, useContext, useState } from "react";

type AppContextType = {
  isFileHaveChanges: boolean;
  setIsFileHaveChanges: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [isFileHaveChanges, setIsFileHaveChanges] = useState(false);

  return (
    <AppContext.Provider value={{ isFileHaveChanges, setIsFileHaveChanges }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw new Error("useAppContext has to be used within <AppProvider>");
  }

  return appContext;
};
