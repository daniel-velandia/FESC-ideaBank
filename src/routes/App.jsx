import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "moment/locale/es";
import '../css/style.css';
import "react-confirm-alert/src/react-confirm-alert.css";
import 'animate.css';
import { Navigation } from "../layouts/Navigation";
import { Footer } from "../layouts/Footer";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../states/store";
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";
import { getAuthenticationToken } from "../connections/helpers/token";
import { PrivateRoute } from "./PrivateRoute";
import { Error404 } from "../pages/Error404";
import { ToastContainer } from "react-toastify";
import { UserList } from "../pages/user/UserList";
import { ProjectList } from "../pages/project/ProjectList";
import { UserCreate } from "../pages/user/UserCreate";

getAuthenticationToken();

const App = () => {
  return (
    <Provider store={store}>
      {/* <Navigation /> */}
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            element={
              <>
                <Navigation/>
                <Outlet />
              </>
            }
          >
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<ProjectList />} />
              <Route path="/user" element={<UserList />} />
              <Route path="/user/create" element={<UserCreate />} />
            </Route>
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
