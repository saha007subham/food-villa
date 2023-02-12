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
          .map((div, idx) => (
            <div className="shimmer-card" key={idx}></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
