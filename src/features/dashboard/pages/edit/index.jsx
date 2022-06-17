import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Add from "../../components/Add";
import Table from "../../components/table";
import Title from "../../components/title";
import Widget from "../../components/widget";
import "./style.scss";
const Edit = () => {
  const [todoEdit, setTodoEdit] = useState({});
  const navigate = useNavigate();
  function handleEditClick(todo) {
    setTodoEdit(todo);
    navigate(`../${todo.id}`);
  }
  return (
    <div className="list">
      <div className="list__content">
        <Title
          color="#323130"
          title="Ngày của tôi  ..."
          filter={true}
          date="Thứ 2 ,13 tháng 6"
        />
        <Add />
        <Table handleEditClick={handleEditClick} />
      </div>
      <div className="list__widget">
        <Widget todoEdit={todoEdit} />
      </div>
    </div>
  );
};

export default Edit;
