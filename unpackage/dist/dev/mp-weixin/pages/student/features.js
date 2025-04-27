"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_block_bar2 = common_vendor.resolveComponent("block-bar");
  _easycom_block_bar2();
}
const _easycom_block_bar = () => "../../components/block-bar/block-bar.js";
if (!Math) {
  _easycom_block_bar();
}
const _sfc_main = {
  __name: "features",
  setup(__props) {
    const list = [
      { title: "课程作业", name: "Sign", icon: "/static/tabBar-icon/ai.png", color: "#39c5bb", url: "" },
      { title: "课堂练习", name: "AI", icon: "/static/tabBar-icon/ai.png", color: "#EE9597", url: "" },
      { title: "智能答疑", name: "Homework", icon: "/static/tabBar-icon/ai.png", color: "#1264A6", url: "" },
      { title: "课程信息", name: "Course", icon: "/static/tabBar-icon/ai.png", color: "#E6A23F", url: "" }
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "课堂功能"
        }),
        b: common_vendor.f(list, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item.icon,
            c: common_vendor.t(item.name),
            d: index,
            e: item.color
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4a367c74"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/student/features.js.map
