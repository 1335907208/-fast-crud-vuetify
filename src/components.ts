import { defineComponent } from "vue";

// 定义模块类型
type ComponentModule = { default: ReturnType<typeof defineComponent> };

// 批量导入组件
const components = Object.fromEntries(
  Object.entries(import.meta.glob<ComponentModule>("./components/*.vue", { eager: true })).map(([key, value]) => [
    key.slice(13, -4), // 修改索引以适应 "./components/" 路径的长度和 ".vue" 的长度
    value.default
  ])
);

export default function (app: any) {
  // 注册所有导入的组件
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component);
  });
}
