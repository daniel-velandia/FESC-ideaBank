import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const connected = useSelector(state => state.connected);
    return (connected) ? <Outlet /> : <Navigate to={'/login'} replace />;
}

export { PrivateRoute };