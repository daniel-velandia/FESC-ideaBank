import 'bootstrap/dist/css/bootstrap.min.css';
import {Navegacion} from '../layouts/Navegacion';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../states/store';
import {Signup} from '../pages/Signup';
import {Signin} from '../pages/Signin';
import {getAutenticacionToken} from '../connections/helpers/token';
import {RutaPrivada} from './RutaPrivada';
import {Error404} from '../pages/Error404';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'moment/locale/es';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Inicio } from '../pages/Inicio';
import { RegisterUser } from '../pages/RegisterUser';

getAutenticacionToken();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navegacion />
        <ToastContainer />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Signin />} />
          <Route path='/registerUser' element={<RegisterUser/>} />
          
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
