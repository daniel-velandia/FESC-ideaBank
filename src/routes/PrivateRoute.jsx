import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { ObserveUsers } from "../pages/ObserveUsers";



const PrivateRoute = () => {
    const connected = useSelector(state => state.connected);
    return (connected) ? <Outlet /> : <Navigate to={'/login'} replace />;
}

export { PrivateRoute };