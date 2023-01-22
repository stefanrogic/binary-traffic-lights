import { useEffect } from "react";
import { useGetRandomNumber } from "../../hooks/useGetRandomNumber";

import Light from "../../components/light/Light";

import "./binaryTraficLights.scss";

const BinaryTraficLights = () => {
  //  CUSTOM HOOK
  const { num, isLoading, getRandomNumber } = useGetRandomNumber();

  useEffect(() => {
    const interval = setInterval(() => {
      getRandomNumber();
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="container">
      <h1>{num.decimal}</h1>
      <div className="lights">{[...num.binary].map((c, i) => i <= 7 && <Light data={isLoading ? isLoading : c} key={i} />)}</div>
      <p>
        Made by{" "}
        <a href="https://github.com/Rasgrin" target="_blank" rel="noreferrer">
          Stefan Rogic
        </a>
      </p>
    </div>
  );
};

export default BinaryTraficLights;
