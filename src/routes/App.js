import 'bootstrap/dist/css/bootstrap.min.css';
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
