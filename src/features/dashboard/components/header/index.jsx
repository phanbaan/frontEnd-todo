import React from "react";
import "./style.scss";
import {
  MdDashboard,
  MdOutlineSearch,
  MdOutlineSettings,
} from "react-icons/md";
import { IoHelp, IoMegaphoneOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import IMAGES from "../../../../assets/images";
import { useState } from "react";
import { filtersSearchText } from "../../filterSlice";

const Header = () => {
  const [searchText, setSearchText] = useState();
  const dispath = useDispatch();
  const handleOnChange = (e) => {
    dispath(filtersSearchText(e.target.value));
  };
  return (
    <div className="header">
      <div className="header__left">
        <div className="logo">
          <MdDashboard className="logo__icon" />
          <span className="logo__text">Logo</span>
        </div>
      </div>
      <div className="header__center">
        <div className="search-form">
          <MdOutlineSearch className="search-form__icon" />
          <input
            type="text"
            className="search-form__input"
            value={searchText}
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className="header__right">
        <ul className="acount">
          <div className="acount__item">
            <MdOutlineSettings className="account__icon"></MdOutlineSettings>
          </div>
          <div className="acount__item">
            <IoHelp className="account__icon"></IoHelp>
          </div>
          <div className="acount__item">
            <IoMegaphoneOutline className="account__icon"></IoMegaphoneOutline>
          </div>
          <div className="acount__item">
            <img src={IMAGES.avatar} alt="" className="avatar" width={50} />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
