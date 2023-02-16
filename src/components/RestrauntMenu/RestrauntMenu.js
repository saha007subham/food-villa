import { useParams } from "react-router-dom";

const RestrauntMenu = () => {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h1>Cards</h1>
      <h1>Restaurant ID : {id}</h1>
    </div>
  );
};

export default RestrauntMenu;
