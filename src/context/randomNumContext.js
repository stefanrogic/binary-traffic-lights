import { createContext, useState } from "react";
import { fetchNewNumber } from "../api/fetchNewNumber";

export const RandomNumContext = createContext();

export const RandomNumContextProvider = ({ children }) => {
  const [num, setNum] = useState({ decimal: "Fetching new number...", binary: "????????" });

  const newNumCall = () => {
    //  SET YELLOW UNTILL NEW NUMBER
    setNum({ decimal: num.decimal, binary: "????????" });

    //  FETCH NEW DECIMAL NUMBER
    fetchNewNumber().then((decimal) => {
      //   TURN DECIMAL NUMBER INTO BINARY
      const binary = decimal.toString(2);
      const binaryAddedZeros = `${"0".repeat(8 - binary.length)}${binary}`;
      setNum({ decimal: decimal, binary: binaryAddedZeros });
    });
  };

  return <RandomNumContext.Provider value={{ num, newNumCall }}>{children}</RandomNumContext.Provider>;
};
