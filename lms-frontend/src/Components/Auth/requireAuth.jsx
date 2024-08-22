import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function requireAuth({allowedRoles}){
 const {isLoggedin,Role} = useSelector((state) => state.auth);      // getting data

 return isLoggedin && allowedRoles.find((myRole) => myRole == role) ? (
    <Outlet />
 ) : isLoggedin ?  (<Navigate to = "/denied"/>) : (<Navigate to = "Login"/>)
}

export default requireAuth;