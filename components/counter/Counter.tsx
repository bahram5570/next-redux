import { useDispatch } from "react-redux";
import { decreaseAction, increaseAction } from "../redux/outputSlice";

const Counter = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex" }}>
      <button
        style={{ margin: "0 10px" }}
        onClick={() => dispatch(decreaseAction())}
      >
        Decrease
      </button>
      
      <button
        style={{ margin: "0 10px" }}
        onClick={() => dispatch(increaseAction())}
      >
        Increase
      </button>
    </div>
  );
};

export default Counter;
