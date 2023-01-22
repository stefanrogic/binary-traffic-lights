import "./light.scss";

const Light = ({ data }) => {
  // FIRST WE CHECK DOES DATA CONTAIN A DIGIT OR BOOLEAN (FOR LOADING)
  // IF ITS LOADING LIGHTS WILL TURN YELLOW
  // IF ITS NOT LOADING AND DATA CONTAINS A DIGIT LIGHTS WILL COLOR ACCORDING TO DIGIT (0 = RED : 1 = GREEN)
  const color = data === true ? "yellow" : Number(data) === 0 ? "red" : "green";

  return (
    <div className="light" style={{ backgroundColor: color }}>
      {data}
    </div>
  );
};

export default Light;
