import { useEffect, useContext } from "react";
import { RandomNumContext } from "../../context/randomNumContext";

import Light from "../../components/light/Light";

import "./binaryTraficLights.scss";

const BinaryTraficLights = () => {
  const { num, newNumCall } = useContext(RandomNumContext);

  useEffect(() => {
    const interval = setInterval(() => {
      newNumCall();
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="container">
      <h1>{num.decimal}</h1>
      <div className="lights">
        {[...num.binary].map((c, i) => (
          <Light num={c} key={i} />
        ))}
      </div>
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
