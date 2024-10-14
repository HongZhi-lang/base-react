// src/routes/AppRoutes.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routesConfig from "./routesConfig"; // 引入路由配置
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {routesConfig.map((route, index) => {
          if (route.isPrivate) {
            // 如果是私有路由，使用 PrivateRoute 包裹
            return <Route key={index} path={route.path} element={<PrivateRoute>{route.element}</PrivateRoute>} />;
          }
          // 公共路由
          return <Route key={index} path={route.path} element={route.element} />;
        })}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
