import React from "react";
import { useHistory, useNavigate } from "react-router-dom";
import Add from "../../components/Add";
import Table from "../../components/table";
import Title from "../../components/title";
import "./style.scss";
const Today = () => {
  const navigate = useNavigate();
  const onEditClick = (id) => {
    navigate(`/todos/id/${id}`);
  };

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
        <Table onEditClick={onEditClick} />
      </div>
    </div>
  );
};

export default Today;
