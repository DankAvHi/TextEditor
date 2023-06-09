import { createContext, useContext, useState } from "react";

type AppContextType = {
  isFileHaveChanges: boolean;
  setIsFileHaveChanges: React.Dispatch<React.SetStateAction<boolean>>;
  editableFileName: string;
  setEditableFileName: React.Dispatch<React.SetStateAction<string>>;
};

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [isFileHaveChanges, setIsFileHaveChanges] = useState(false);
  const [editableFileName, setEditableFileName] = useState("Untitled");

  return (
    <AppContext.Provider
      value={{
        isFileHaveChanges,
        setIsFileHaveChanges,
        editableFileName,
        setEditableFileName,
      }}>
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
