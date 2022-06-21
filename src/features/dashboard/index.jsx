import { useState } from "react";
import { Outlet } from "react-router-dom";
import Toast from "../../components/toast";
import { userSelector } from "../../redux/selectors";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { useSelector } from "react-redux";
import "./style.scss";
import { useEffect } from "react";
const Todos = () => {
  const user = useSelector(userSelector);

  const [status, setStatus] = useState(true);
  const { name } = user;
  useEffect(() => {
    const timeId = setTimeout(() => {
      setStatus(false);
    }, 6000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return (
    <div className="dashboard">
      {status && (
        <Toast
          title="Đăng nhập thành công"
          message={` Chào mừng bạn ${name} đến với trang quản lý danh sách công việc của ban`}
        />
      )}

      <Header />
      <div className="dashboard__content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Todos;
