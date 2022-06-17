import { useState } from "react";
import { AiOutlineSortAscending } from "react-icons/ai";
import { BsLightbulb } from "react-icons/bs";
import {
  IoCalendarNumberOutline,
  IoCalendarOutline,
  IoStarOutline,
} from "react-icons/io5";
import { useDispatch } from "react-redux";
import { filterPriority } from "../../filterSlice";
import "./style.scss";
const Title = ({ title, color, filter, date }) => {
  const dispath = useDispatch();
  const [priorityFilter, setPriorityFilter] = useState("");
  function handlePriority() {
    setPriorityFilter(!priorityFilter);
    console.log(priorityFilter);
    dispath(filterPriority(priorityFilter));
  }
  return (
    <div className="title">
      <div className="left">
        <h3 className="text" style={{ color: color }}>
          {title}
        </h3>
        <p className="date">{date}</p>
      </div>
      {filter && (
        <div className="right">
          <div className="show">
            <div className="sort show-item">
              <AiOutlineSortAscending />
              <span>Sắp xếp</span>
            </div>
            <div className="important  show-item" onClick={handlePriority}>
              <BsLightbulb />
              <span>Quan trọng</span>
            </div>
          </div>
          <div className="hidden">
            <p className="hidden-title">Sắp xếp theo</p>
            <div className="hidden-body">
              <ul className="sidebar__list">
                <li className="sidebar__item">
                  <span to="/" className="sidebar__link">
                    <IoStarOutline className="sidebar-icon" />
                    <span>Tầm quan trọng</span>
                  </span>
                </li>
                <li className="sidebar__item">
                  <span to="/" className="sidebar__link">
                    <IoCalendarOutline className="sidebar-icon" />
                    <span>Ngày đến hạn</span>
                  </span>
                </li>
                <li className="sidebar__item">
                  <span to="/" className="sidebar__link">
                    <AiOutlineSortAscending className="sidebar-icon" />
                    <span>Theo thứ tự bảng chữ cái</span>
                  </span>
                </li>
                <li className="sidebar__item">
                  <span to="/" className="sidebar__link">
                    <IoCalendarNumberOutline className="sidebar-icon" />
                    <span>Ngày tạo</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Title;
