import { createContext, useContext, useState } from "react";

interface IDisplayContext {
  display: any;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
}

// criar o context
export const DisplayContext = createContext<IDisplayContext>({
  display: "",
  setDisplay: () => "",
});

// criar o provider
export const DisplayProvider = ({ children }: any) => {
  const [display, setDisplay] = useState<string>("");

  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      {children}
    </DisplayContext.Provider>
  );
};

export const useDisplay = () => useContext(DisplayContext);
