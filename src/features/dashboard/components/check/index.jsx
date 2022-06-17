import React from "react";
import { MdDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { EditCheck } from "../../todoSlice";
import "./style.scss";

const Check = ({ status, id }) => {
  const dispatch = useDispatch();
  function handleCheck() {
    dispatch(EditCheck(id));
  }
  return (
    <div className="check" onClick={handleCheck}>
      {status && <MdDone className="check--icon" />}
    </div>
  );
};

export default Check;
