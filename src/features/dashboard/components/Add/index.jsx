import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { incrementCouter } from "../../filterSlice";
import { addTodo } from "../../todoSlice";
import Check from "../check";
import "./style.scss";
const Add = () => {
  const [isIcon, setIsIcon] = useState(true);
  const [name, setName] = useState("");
  const dispath = useDispatch();
  function handleOnKeyup(e) {
    if (e.keyCode === 13) {
      dispath(
        addTodo({
          id: Math.random(),
          name: name,
          important: false,
          isCompleted: false,
        })
      );
      dispath(incrementCouter());
      setName("");
    }
  }

  return (
    <div className="add">
      <div action="" className="add-form">
        {isIcon ? <IoAddSharp className="add-icon" /> : <Check />}
        <input
          type="text"
          value={name}
          placeholder="Thêm tác vụ"
          onClick={() => setIsIcon(!isIcon)}
          onChange={(e) => setName(e.target.value)}
          onKeyUp={handleOnKeyup}
          onBlur={() => setIsIcon(!isIcon)}
        />
      </div>
    </div>
  );
};

export default Add;
