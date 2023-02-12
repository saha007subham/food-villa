import "./Shimmer.css";

const Shimmer = () => {
  return (
    <>
      <div className="shimmer-header">
        <p style={{ color: "lightgray" }}>Loading</p>
      </div>
      <div className="shimmer-div">
        {Array(10)
          .fill("")
          .map((div) => (
            <div className="shimmer-card"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
