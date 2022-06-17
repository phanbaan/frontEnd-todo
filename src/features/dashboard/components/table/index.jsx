import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { todosSelector } from "../../../../redux/selectors";
import Check from "../check";
import Start from "../star";
import "./style.scss";
const Table = ({ onEditClick, handleEditClick }) => {
  const todos = useSelector(todosSelector);
  const onEditTodoClick = (todo) => {
    if (typeof onEditClick !== "undefined") {
      onEditClick(todo.id);
    } else {
      handleEditClick(todo);
    }
  };
  return (
    <div className="table">
      <ul className="table__list">
        {todos &&
          todos.map((todo) => (
            <li className="table__item" key={todo.id}>
              <Check status={todo.completed} id={todo.id} />
              <div className="text" onClick={() => onEditTodoClick(todo)}>
                <p className="text-title">{todo.name}</p>
                <p className="text-desc">Tác vụ</p>
              </div>
              <Start status={todo.priority} id={todo.id} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Table;
