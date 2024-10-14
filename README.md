

### 目录结构

my-react-app/
├── public/                          # 静态资源，未经过 Webpack 处理的文件
│   ├── index.html                   # 主 HTML 文件
│   └── ...                          # 其他静态资源（favicon, icons, etc.）
├── src/                             # 项目主要源码
│   ├── api/                         # 与后端 API 交互的服务层
│   │   └── auth.js                  # 例如：用户登录、注册等 API 请求文件
│   │   └── http.js                  # 请求工具文件（比如 axios 实例）
│   │   └── ...
│   ├── assets/                      # 静态资源，如图片、字体等
│   │   ├── images/
│   │   ├── fonts/
│   │   └── ...
│   ├── components/                  # 可复用的独立 UI 组件
│   │   ├── Header.js                # 头部组件
│   │   ├── Footer.js                # 底部组件
│   │   ├── Button.js                # 通用按钮组件
│   │   └── ...
│   ├── hooks/                       # 自定义 Hook
│   │   └── useAuth.js               # 例如：自定义的认证 Hook
│   │   └── useFetch.js              # 数据获取 Hook
│   │   └── ...
│   ├── layouts/                     # 页面布局组件
│   │   ├── MainLayout.js            # 主布局组件
│   │   └── ...
│   ├── pages/                       # 页面组件，每个文件对应一个页面
│   │   ├── Home.js                  # 首页
│   │   ├── Login.js                 # 登录页
│   │   ├── Dashboard.js             # 仪表盘页面
│   │   └── ...
│   ├── routes/                      # 路由配置
│   │   ├── PrivateRoute.js          # 路由守卫
│   │   ├── AppRoutes.js             # 所有路由的配置
│   │   └── ...
│   ├── store/                       # 全局状态管理
│   │   ├── redux/                   # 如果使用 Redux
│   │   │   ├── authSlice.js         # Auth 相关的 Redux slice
│   │   │   ├── store.js             # Redux store
│   │   │   └── ...
│   │   └── zustand/                 # 如果使用 Zustand
│   │       ├── authStore.js         # Auth 相关的 Zustand store
│   │       └── ...
│   ├── styles/                      # 全局样式文件
│   │   ├── index.css                # 全局通用样式
│   │   └── variables.css            # 全局 CSS 变量（如颜色、字体等）
│   ├── utils/                       # 工具函数和帮助函数
│   │   ├── formatDate.js            # 日期格式化工具函数
│   │   └── storage.js               # 本地存储相关工具函数
│   ├── App.js                       # 主应用组件
│   ├── index.js                     # 应用入口，渲染根组件
│   └── ...
├── .env                             # 环境变量
├── package.json                     # 项目依赖及配置信息
├── README.md                        # 项目简介
└── ...
