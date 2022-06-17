import React from "react";
import IMAGES from "../../../../assets/images";
import "./style.scss";
function Signup() {
  return (
    <div>
      <div className="container">
        <div className="signup">
          <div className="signup__left">
            <img src={IMAGES.signup} alt="" className="signup__left--1" />
            <img src={IMAGES.ic_login2} alt="" className="signup__left--2" />
            <img src={IMAGES.ic_login3} alt="" className="signup__left--3" />
          </div>
          <div className="signup__right">
            <div className="form">
              <div className="form__title">Đăng ký tài khoản</div>
              <form className="form-box">
                <div className="input-group">
                  <span>Họ và Tên</span>
                  <input type="text" className="input" />
                </div>
                <div className="input-group">
                  <span>Email</span>
                  <input type="email" className="input" />
                </div>
                <div className="input-group">
                  <span>Mật khẩu</span>
                  <input type="password" className="input" />
                </div>
                <div className="input-group">
                  <input type="submit" className="input btn" value="Đăng ký" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
