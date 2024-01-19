import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'moment/locale/es';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Navigation } from '../layouts/Navigation';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../states/store';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { getAuthenticationToken } from '../connections/helpers/token';
import { PrivateRoute } from './PrivateRoute';
import { Error404 } from '../pages/Error404';
import { ToastContainer } from 'react-toastify';
import { Home } from '../pages/Home';

getAuthenticationToken();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route element={<RutaPrivada />}>
            <Route path='/inicio' element={<Inicio />} />
          </Route>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
