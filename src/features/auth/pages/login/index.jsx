import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import IMAGES from "../../../../assets/images";
import { isLoggedInSelector } from "../../../../redux/selectors";
import { login } from "../../../../redux/userSlice";
import "./style.scss";
const Login = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector(isLoggedInSelector);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function handleLogin(e) {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispath(login(user));
  }
  useEffect(() => {
    if (isLogged) {
      navigate("/todos");
    } else {
      navigate("/");
    }

    //  return () => {
    //    second
    //  }
  }, [isLogged]);

  return (
    <div className="container">
      <div className="login">
        <div className="login__left">
          <img src={IMAGES.ic_login1} alt="" className="login__left--1" />
          <img src={IMAGES.ic_login2} alt="" className="login__left--2" />
          <img src={IMAGES.ic_login3} alt="" className="login__left--3" />
        </div>
        <div className="login__right">
          <div className="form">
            <div className="form__title">Đăng nhập tài khoản</div>
            <form className="form-box" onSubmit={handleLogin}>
              <div className="input-group">
                <span>Tên đăng nhập</span>
                <input
                  type="text"
                  className="input"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <span>Mật khẩu</span>
                <input
                  type="password"
                  className="input"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="remember">
                <input
                  type="checkbox"
                  name=""
                  id="remember"
                  className="remomeber__input"
                />
                <label className="remember">Remember me</label>
              </div>
              <div className="input-group">
                <input type="submit" className="input btn" value="Submit" />
              </div>
              <div className="input-group">
                <p>
                  Đăng ký tài khoản mới?
                  <Link to="/signup">Đăng ký</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
