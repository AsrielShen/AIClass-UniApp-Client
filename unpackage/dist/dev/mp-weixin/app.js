"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/courses/enter-course.js";
  "./pages/courses/create-course.js";
  "./pages/courses/join-course.js";
  "./pages/courses/manage-course.js";
  "./pages/ai/ai-help.js";
  "./pages/user/user.js";
  "./pages/teacher/features.js";
  "./pages/teacher/sign-in.js";
  "./pages/teacher/random-call.js";
  "./pages/teacher/homework/homework-list.js";
  "./pages/teacher/homework/homework-detail.js";
  "./pages/teacher/homework/add-homework.js";
  "./pages/teacher/test/test-list.js";
  "./pages/student/features.js";
  "./pages/student/homework-list.js";
  "./pages/student/test-list.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:4", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:7", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:10", "App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
