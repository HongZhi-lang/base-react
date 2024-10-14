import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css"; // 全局样式

// import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux"; // Redux 提供者
import store from "./store"; // Redux 存储

import { ConfigProvider } from "antd"; // Ant Design 提供者
import zhCN from "antd/locale/zh_CN"; // 中文语言包

import AppRoutes from "./routes/AppRoutes"; // 引入路由组件

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* 提供 Redux 存储 */}
      <ConfigProvider locale={zhCN}>
        {/* Ant Design 语言设置 */}
        <AppRoutes /> {/* 渲染路由组件 */}
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

// 性能监测
// reportWebVitals();
