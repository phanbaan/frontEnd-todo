import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IMAGES from "../../../../assets/images";
import Toast from "../../../../components/toast";
import { isLoggedInSelector, userSelector } from "../../../../redux/selectors";
import { register } from "../../../../redux/userSlice";
import "./style.scss";
function Signup() {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const user = useSelector(userSelector);
  console.log(isLoggedIn, user);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState();
  const [birthday, setBirthday] = useState();
  const [avatar, setAvatar] = useState();
  const [address, setAddress] = useState();
  const [title, setTitle] = useState("Thất bại");
  const [message, setMessage] = useState(
    "Bạn đã đăng ký thất bại, kiểm tra lại thông tin đăng ký"
  );
  const [status, setStatus] = useState(false);
  const dispath = useDispatch();
  const handleOnchangeName = (e) => {
    var nameChange = e.target.value;
    setName(nameChange);
  };
  const handleOnchangeAge = (e) => {
    var AgeChange = Number(e.target.value);
    setAge(AgeChange);
  };
  const handleOnchangeEmail = (e) => {
    var EmailChange = e.target.value;
    setEmail(EmailChange);
  };
  const handleOnchangePassword = (e) => {
    var PasswordChange = e.target.value;
    setPassword(PasswordChange);
  };
  const handleOnchangeAvatar = (e) => {
    var AvatarChange = e.target.value;
    setAvatar(AvatarChange);
  };
  const handleOnchangeAddress = (e) => {
    var AddressChange = e.target.value;
    setAddress(AddressChange);
  };
  const handleOnchangeBirthday = (e) => {
    var BirthdayChange = e.target.value;
    setBirthday(BirthdayChange);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      age,
      birthday,
      avatar,
      address,
    };

    dispath(register(user));
    setStatus(true);
    setTitle("Thành công");
    setMessage("Bạn đã đăng ký thành công, đến trang login để đăng nhập");
    setAddress("");
    setEmail("");
    setAge("");
    setName("");
    setTimeout(() => {
      setStatus(false);
    }, 3000);
  };

  return (
    <div>
      {status && <Toast title={title} message={message} />}
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
              <form className="form-box" onSubmit={handleSignUp}>
                <div className="input-group">
                  <input
                    type="text"
                    className="input"
                    placeholder="Họ và Tên"
                    onChange={handleOnchangeName}
                  />
                  <input
                    type="text"
                    className="input"
                    placeholder="Tuổi"
                    onChange={handleOnchangeAge}
                  />
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    onChange={handleOnchangeEmail}
                  />
                  <input
                    onChange={handleOnchangePassword}
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="type"
                    className="input"
                    placeholder="avatar"
                    onChange={handleOnchangeAvatar}
                  />
                  <input
                    type="type"
                    className="input"
                    placeholder="Địa chỉ"
                    onChange={handleOnchangeAddress}
                  />
                </div>
                <div className="input-group">
                  <label>Ngày sinh</label>
                  <input
                    type="date"
                    className="input date"
                    onChange={handleOnchangeBirthday}
                  />
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
