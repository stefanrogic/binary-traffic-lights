import { createContext, useState } from "react";

export const RandomNumContext = createContext();

export const RandomNumContextProvider = ({ children }) => {
  const [num, setNum] = useState({ decimal: "Generating new number...", binary: "22222222" });

  const newNumCall = async () => {
    try {
      // SET YELLOW UNTILL NEW NUMBER (2s COLOR THE LIGHTS TO YELLOW)
      setNum({ decimal: num.decimal, binary: "22222222" });

      //    CALL NEW DECIMAL NUMBER
      const call = fetch("https://www.random.org/integers/?num=1&min=0&max=255&col=1&base=10&format=plain&rnd=new");
      const res = (await call).json();
      const decimal = await res;

      //   TURN DECIMAL NUMBER INTO BINARY
      const binary = decimal.toString(2);
      const binaryAddedZeros = `${"0".repeat(8 - binary.length)}${binary}`;
      setNum({ decimal: decimal, binary: binaryAddedZeros });
    } catch (err) {
      console.log(err);
    }
  };

  return <RandomNumContext.Provider value={{ num, newNumCall }}>{children}</RandomNumContext.Provider>;
};
