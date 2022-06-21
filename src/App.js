import './App.scss';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from './features/auth/pages/login';
import Signup from './features/auth/pages/signup';
import Edit from './features/dashboard/pages/edit';
import Todos from './features/dashboard';
import Today from './features/dashboard/pages/today/Index';
import Plan from './features/dashboard/pages/plan';
import Important from './features/dashboard/pages/important';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/userSlice';
import { isLoggedInSelector } from './redux/selectors';

function App() {
  const isLogged = useSelector(isLoggedInSelector);
  const navigate = useNavigate()
  const dispath = useDispatch();

  useEffect(() => {
    if(isLogged){
      dispath(getUser)
    } else {
      navigate("/")
    }
  }, [])
  
  return (
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
  );
}

export default App;
