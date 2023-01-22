import { useState } from "react";
import { fetchNewNumber } from "../api/fetchNewNumber";

export const useGetRandomNumber = () => {
  const [num, setNum] = useState({ decimal: "Fetching new number...", binary: "Fetching new number..." });
  const [isLoading, setIsLoading] = useState(true);

  const getRandomNumber = () => {
    setIsLoading(true);

    fetchNewNumber()
      .then((decimal) => {
        //   TURN DECIMAL NUMBER INTO BINARY
        const binary = decimal.toString(2);
        const binaryExtended = `${"0".repeat(8 - binary.length)}${binary}`;
        setNum({ decimal: decimal, binary: binaryExtended });
      })
      .then(() => setIsLoading(false));
  };

  return { num, isLoading, getRandomNumber };
};
