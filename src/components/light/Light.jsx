import "./light.scss";

const Light = ({ num }) => {
  const color = num === "?" ? "yellow" : Number(num) === 0 ? "red" : "green";

  return (
    <div className="light" style={{ backgroundColor: color }}>
      {/* ? === GETTING NEW NUMBER - ?s WONT BE WRITTEN INSIDE THE LIGHT */}
      {num !== "?" && num}
    </div>
  );
};

export default Light;
