// @ts-ignore
import { createVuetify } from "vuetify";
// @ts-ignore
import { uiContext } from "@fast-crud/ui-interface";
import { Vuetify } from "./vuetify";
import setupComponents from "./components";

export * from "./vuetify";

function set() {
  const vuetifyInstance = createVuetify();
  const vuetifyUi = new Vuetify({
    // Vuetify 没有直接对应的全局消息和通知系统
    // 我们可能需要自定义这些功能
    Message: {
      success: (message: string) => {
        // 使用 Vuetify 的 snackbar 或自定义组件来显示消息
        console.log("Success:", message);
      },
      error: (message: string) => {
        console.log("Error:", message);
      },
      info: (message: string) => {
        console.log("Info:", message);
      },
      warning: (message: string) => {
        console.log("Warning:", message);
      }
    },
    Notification: {
      success: (options: any) => {
        // 使用 Vuetify 的 snackbar 或自定义组件来显示通知
        console.log("Notification Success:", options);
      },
      error: (options: any) => {
        console.log("Notification Error:", options);
      },
      info: (options: any) => {
        console.log("Notification Info:", options);
      },
      warning: (options: any) => {
        console.log("Notification Warning:", options);
      }
    },
    MessageBox: {
      confirm: (message: string, title: string, options: any) => {
        // 使用 Vuetify 的 dialog 组件来显示确认框
        console.log("Confirm:", message, title, options);
        return Promise.resolve(true); // 模拟用户确认
      },
      alert: (message: string, title: string, options: any) => {
        console.log("Alert:", message, title, options);
        return Promise.resolve();
      }
    }
  });
  uiContext.set(vuetifyUi);
  return vuetifyUi;
}

export default {
  install(app: any) {
    app.use(createVuetify());
    setupComponents(app);

    return set();
  },
  set
};
