// import React from "react";
// import { useRouteMatch, Switch, Route, Redirect } from "react-router-dom";
// import Header from "./components/header";
// import Sidebar from "./components/sidebar";
// import Edit from "./pages/edit";
// import Plan from "./pages/plan";
// import Today from "./pages/today/Index";
// import "./style.scss";
// const Dashboard = () => {
//   const { url, path } = useRouteMatch();
//   return (
//     <div className="dashboard">
//       <Header />
//       <div className="dashboard__content">
//         <div className="sidebar">
//           <Sidebar />
//         </div>
//         <div className="content">
//           <Switch>
//             <Route exact path={`${path}/today`} component={Today} />
//             <Route path={`${path}/:editId`} component={Edit} />
//           </Switch>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React from "react";
import { Outlet } from "react-router-dom";
import Add from "./components/Add";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Table from "./components/table";
import Title from "./components/title";

import "./style.scss";
const Todos = () => {
  const handleTodoEdit = (todo) => {};

  return (
    <div className="dashboard">
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
