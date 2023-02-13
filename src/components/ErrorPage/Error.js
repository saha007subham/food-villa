import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Opps, something went wrong.....</h1>
      <h2 style={{ textAlign: "center", color: "red" }}>
        {err.status + " " + err.statusText}
      </h2>
    </div>
  );
};

export default Error;
