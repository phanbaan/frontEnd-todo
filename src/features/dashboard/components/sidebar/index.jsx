import React from "react";
import {
  IoMenuOutline,
  IoPersonOutline,
  IoSunnyOutline,
  IoStarOutline,
  IoCalendarOutline,
  IoHomeOutline,
  IoAttach,
  IoCheckmarkDoneOutline,
  IoPeopleSharp,
  IoMailOutline,
} from "react-icons/io5";
import { Link, useRouteMatch } from "react-router-dom";
import "./style.scss";

const Sidebar = () => {
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__header">
        <IoMenuOutline className="icon-header" />
      </div>
      <div className="sidebar__content">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <Link to="today" className="sidebar__link">
              <IoSunnyOutline className="sidebar-icon" />
              <span>Ngày của tôi</span>
              <span>6</span>
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="important" className="sidebar__link">
              <IoStarOutline className="sidebar-icon" />
              <span>Quan trong</span>
              <span>3</span>
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="today" className="sidebar__link">
              <IoCalendarOutline className="sidebar-icon" />
              <span>Đã lập kế hoạch</span>
              <span>4</span>
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/" className="sidebar__link">
              <IoPersonOutline className="sidebar-icon" />
              <span>Đã giao cho tôi</span>
              <span>2</span>
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/" className="sidebar__link">
              <IoHomeOutline className="sidebar-icon" />
              <span>Tác vụ</span>
              <span>6</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar__footer">
        <ul className="footer__list">
          <li className="footer__item">
            <IoMailOutline />
          </li>
          <li className="footer__item">
            <IoCalendarOutline />
          </li>
          <li className="footer__item">
            <IoPeopleSharp />
          </li>
          <li className="footer__item">
            <IoAttach />
          </li>
          <li className="footer__item">
            <IoCheckmarkDoneOutline />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
