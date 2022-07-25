import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {numberAction} from '../redux/outputSlice'

const Counter = () => {
  const [no, setNo] = useState(0);

  useEffect( () => {
    dispatch(numberAction(no))
  }, [no])

  const dispatch = useDispatch()

  return (
    <div style={{display: "flex"}}>
      <button onClick={() => setNo(no - 1)}>Decrease</button>
      <h4 style={{margin: "0 20px"}}>{no}</h4>
      <button onClick={() => setNo(no + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
