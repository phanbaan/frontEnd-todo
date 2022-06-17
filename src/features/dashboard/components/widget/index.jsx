import { useEffect, useState } from "react";
import {
  MdDeleteOutline,
  MdOutlineLogout,
  MdOutlineWbSunny,
  MdOutlineNotifications,
  MdCalendarToday,
  MdRepeat,
  MdOutlineAttachFile,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../../../../redux/selectors";
import { editTodo, removeTodo } from "../../todoSlice";

import Check from "../check";
import Start from "../star";
import "./style.scss";

const Widget = ({ todoEdit }) => {
  const dispath = useDispatch();

  const { id, name, priority, completed } = todoEdit;

  const [isCheck, setIsCheck] = useState(false);
  const [nameEdit, setNameEdit] = useState(todoEdit?.name);

  function handleCheck() {
    setIsCheck(!isCheck);
  }
  function handleRemoveTodo() {
    dispath(removeTodo(id));
  }
  function handleOnChange(e) {
    const eTodo = e.target.value;
    setNameEdit(eTodo);
  }
  function handleEditTodo() {
    const todoEdit = {};
    todoEdit.id = id;
    todoEdit.name = nameEdit;
    dispath(editTodo(todoEdit));
  }
  return (
    <div className="widget">
      <div className="widget__content">
        <div className="content-header">
          <div className="check-icon">
            <Check status={false} />
          </div>
          <input
            type="text"
            defaultValue={name}
            name="nameEdit"
            className="input-header"
            onChange={handleOnChange}
            onBlur={handleEditTodo}
          />
          <div className="important-icon" onClick={handleCheck}>
            <Start status={isCheck} />
          </div>
        </div>
        <div className="widget-block">
          <button>
            <MdOutlineWbSunny />
            <span>Thêm vào ngày của tôi</span>
          </button>
        </div>
        <div className="widget-block">
          <button>
            <MdOutlineNotifications />
            <span>Nhắc tôi</span>
          </button>
          <button>
            <MdCalendarToday />
            <span>Thêm ngày đến hạn</span>
          </button>
          <button>
            <MdRepeat />
            <span>lặp lại</span>
          </button>
        </div>
        <div className="widget-block">
          <button>
            <MdOutlineWbSunny />
            <span>Chọn danh mục</span>
          </button>
        </div>
        <div className="widget-block">
          <button>
            <MdOutlineAttachFile />
            <input type="file" name="Thêm tệp" id="" />
          </button>
        </div>
      </div>
      <div className="widget__footer">
        <MdOutlineLogout className="footer-icon" />
        <span>Đã tạo hôm nay</span>
        <MdDeleteOutline className="footer-icon" onClick={handleRemoveTodo} />
      </div>
    </div>
  );
};

export default Widget;
