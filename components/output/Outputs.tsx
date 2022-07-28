import { useSelector } from "react-redux";
import { AppState  } from "../redux/store";

const Outputs = () => {
  const { txt, no } = useSelector((x: AppState ) => x.outputReducer);

  return (
    <div>
      <h2>{`Script --> ${txt}`}</h2>
      <h2>{`Counter --> ${no}`}</h2>
    </div>
  );
};

export default Outputs;
