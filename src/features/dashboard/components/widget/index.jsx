import { useState } from "react";
import {
  MdCalendarToday,
  MdDeleteOutline,
  MdOutlineAttachFile,
  MdOutlineLogout,
  MdOutlineNotifications,
  MdOutlineWbSunny,
  MdRepeat,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../../../../redux/selectors";
import { decrementCouter } from "../../filterSlice";
import { editTodo, removeTodo } from "../../todoSlice";

import Check from "../check";
import Start from "../star";
import "./style.scss";

const Widget = () => {
  const dispath = useDispatch();
  const todos = useSelector(todosSelector);

  const todoEdit = useSelector((state) => state.filters.todoEdit);
  const { id, name, completed, priority } = todoEdit;
  const [completedEdit, setCompletedEdit] = useState(completed);
  const [priorityEdit, setPriorityEdit] = useState(priority);
  const [nameEdit, setNameEdit] = useState(name);
  // todoEdit?.name

  function handleRemoveTodo() {
    const isId = todos.find((todo) => todo.id === id);
    if (isId) {
      const result = window.confirm(
        `Bạn có muốn xóa công việc ${name} không ?`
      );
      if (result) {
        dispath(removeTodo(id));
        dispath(decrementCouter());
      }
    }
  }
  function handleOnChange(e) {
    const eTodo = e.target.value;
    setNameEdit(eTodo);
  }
  function handleEditTodo(e) {
    e.preventDefault();
    const todoEdit = {};
    todoEdit.id = id;
    todoEdit.name = nameEdit;
    dispath(editTodo(todoEdit));
    setNameEdit(name);
  }
  return (
    <div className="widget">
      <div className="widget__content">
        <form className="content-header" onSubmit={handleEditTodo} key={id}>
          <div className="check-icon">
            <Check status={completed} id={id} />
          </div>
          <input
            type="text"
            defaultValue={name}
            name="nameEdit"
            className="input-header"
            onChange={handleOnChange}
            onBlur={handleEditTodo}
          />
          <div className="important-icon">
            <Start status={priority} id={id} />
          </div>
        </form>
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
