import "./light.scss";

const Light = ({ num }) => {
  const color = Number(num) === 2 ? "yellow" : Number(num) === 0 ? "red" : "green";

  return (
    <div className="light" style={{ backgroundColor: color }}>
      {/* 2 === GETTING NEW NUMBER - 2s WONT BE WRITTEN INSIDE THE LIGHT */}
      {Number(num) !== 2 && num}
    </div>
  );
};

export default Light;
