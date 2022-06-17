import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './features/auth/pages/login';
import Signup from './features/auth/pages/signup';
import Edit from './features/dashboard/pages/edit';
import Todos from './features/dashboard';
import Today from './features/dashboard/pages/today/Index';
import Plan from './features/dashboard/pages/plan';
import Important from './features/dashboard/pages/important';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path="todos" element={<Todos />}>
            <Route index element={<Today />} />
            <Route path='today' element={<Today />} />
            <Route path='important' element={<Important />} />
            <Route path='plan' element={<Plan />} />
            <Route path="Id">
              <Route  index element={<Edit />} />
              <Route  path=":Id" element={<Edit />} />
            </Route>
          </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
