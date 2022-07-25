import { useState } from "react";
import { useDispatch } from "react-redux";
import { txtAction } from "../redux/outputSlice";

const Script = () => {
  const [txt, setTxt] = useState("");

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(txtAction(txt));
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <input
        type="text"
        placeholder="Script"
        onChange={(e) => setTxt(e.target.value)}
      />

      <button onClick={addHandler}>Add Script</button>
    </div>
  );
};

export default Script;
