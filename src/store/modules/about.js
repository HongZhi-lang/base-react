import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  counter: 0,
  title: "redux toolkit pre",
}

// 创建一个 Slice
export const about = createSlice({
  // 命名空间
  name: "about",

  // 初始化状态值
  initialState,

  // 定义 reducers 并生成关联的操作
  reducers: {
    setCounter(state, { payload }) {
      console.log(payload)
      state.counter = payload.counter
    },
  },
})

// 导出 reducers 方法
// 每个 case reducer 函数会生成对应的 Action creators
export const { setCounter } = about.actions

// 默认导出
export default about.reducer
