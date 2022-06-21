import { useState } from "react";
import { AiOutlineSortAscending } from "react-icons/ai";
import { BsLightbulb } from "react-icons/bs";
import {
  IoCalendarNumberOutline,
  IoCalendarOutline,
  IoStarOutline,
} from "react-icons/io5";
import { useDispatch } from "react-redux";
import { filterStatus } from "../../filterSlice";
import "./style.scss";
const Title = ({ title, color, filter, date }) => {
  const [statusFilter, setStatusFilter] = useState("");
  const [isToggle, setIsToggle] = useState(false);

  const dispath = useDispatch();
  function handleSort() {
    dispath(filterStatus(statusFilter));
    setStatusFilter(!statusFilter);
    setIsToggle(!isToggle);
  }
  function handleToggle() {
    setIsToggle(!isToggle);
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
              <span onClick={handleToggle}>Sắp xếp</span>
            </div>
            <div className="important  show-item">
              <BsLightbulb />
              <span>Đề xuất</span>
            </div>
          </div>
          {isToggle && (
            <div className="hidden">
              <p className="hidden-title">Sắp xếp theo</p>
              <div className="hidden-body">
                <ul className="sidebar__list">
                  <li className="sidebar__item">
                    <span to="/" className="sidebar__link">
                      <IoStarOutline className="sidebar-icon" />
                      <span onClick={handleSort}>Tầm quan trọng</span>
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
          )}
        </div>
      )}
    </div>
  );
};

export default Title;
