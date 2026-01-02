import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppLocation } from "../hooks/hooks";
import { accounts } from "../constants/account";

const basePath =import.meta.env.REACT_APP_BASE_PATH;

const ProtectedRoute = ({ element }) => {
  const location = useAppLocation();
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");
  const storedRole = localStorage.getItem("role"); // kiểm tra role
  const token = localStorage.getItem("token");

  const { isLoggedIn, isLoading, user } = useSelector((state) => state.auth);

  // check if stored credentials match any account
  const validUser = accounts.find(
    (acc) => acc.username === storedUsername && acc.password === storedPassword
  );

  // if (token) {
  //   return element; // ✅ đã login
  // }

  // if (validUser) {
  //   return element; // ✅ đã login
  // }

  if (isLoading) {
    return <div>Loading...</div>; // hoặc spinner
  }

  if (!isLoggedIn) {
    return <Navigate to={`${basePath}/login`} replace />;
  }

  console.log('isLoggedIn')

  // if (isLoggedIn) {
  //   return element;
  // }

  // Role-route protection
  const path = location.pathname;
  
  if (
    (user.role === "private" && path.includes(`${basePath}/booking`)) ||
    (user.role === "vip" && path.includes(`${basePath}/booking/private`))
  ) {
    return <Navigate to={`${basePath}/login`} replace />;
  }

  return element;
};

export default ProtectedRoute;
