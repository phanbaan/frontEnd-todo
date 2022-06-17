import React from "react";
import { MdStarRate } from "react-icons/md";
import { useDispatch } from "react-redux";
import IMAGES from "../../../../assets/images";
import { editStar } from "../../todoSlice";
import "./style.scss";

const Start = ({ status, id }) => {
  const dispath = useDispatch();
  function handleClick() {
    dispath(editStar(id));
  }
  return (
    <div className="star" onClick={handleClick}>
      {status ? (
        <MdStarRate className="star-icon" />
      ) : (
        <img src={IMAGES.star} alt="" className="star-img" />
      )}
    </div>
  );
};

export default Start;
