import { useState } from "react";
import { IoHelp, IoMegaphoneOutline } from "react-icons/io5";
import {
  MdCake,
  MdDashboard,
  MdEmojiPeople,
  MdLocationOn,
  MdLogout,
  MdOutlineSearch,
  MdOutlineSettings,
  MdDeleteOutline,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import IMAGES from "../../../../assets/images";
import { userSelector } from "../../../../redux/selectors";
import { getUser, logout, remove } from "../../../../redux/userSlice";
import { filtersSearchText } from "../../filterSlice";
import "./style.scss";

const Header = () => {
  const [searchText, setSearchText] = useState();
  const user = useSelector(userSelector) || null;
  if (!user) {
  }
  const { name, address, age } = user;

  const dispath = useDispatch();
  const handleOnChange = (e) => {
    setSearchText(e.target.value);
    dispath(filtersSearchText(e.target.value));
  };
  function handleLogout() {
    dispath(remove);
  }
  function handleRemove() {
    dispath(remove);
  }
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
            <div className="info">
              <ul className="info-list">
                <li className="info-item">
                  <MdEmojiPeople />
                  Hello: <span>{name}</span>
                </li>
                <li className="info-item">
                  <MdLocationOn />
                  Địa chỉ: <span> {address}</span>
                </li>
                <li className="info-item">
                  <MdCake /> Tuổi: <span>{age}</span>
                </li>
                <li className="info-item" onClick={handleRemove}>
                  <MdDeleteOutline />
                  Xóa tài khoản
                </li>
                <li className="info-item" onClick={handleLogout}>
                  <MdLogout />
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
