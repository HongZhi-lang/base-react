// src/routes/PrivateRoute.js
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // 使用 Redux 的情况

const PrivateRoute = ({ children }) => {
  // 从 Redux 中选择是否已认证的状态
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  

  // 判断是否已认证，若未认证则重定向到登录页
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
