"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_block_bar2 = common_vendor.resolveComponent("block-bar");
  _easycom_block_bar2();
}
const _easycom_block_bar = () => "../../components/block-bar/block-bar.js";
if (!Math) {
  _easycom_block_bar();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const handleCreateCourse = () => {
      const userInfo = common_vendor.index.getStorageSync("userInfo");
      if (userInfo && userInfo.role === "student") {
        common_vendor.index.showToast({
          title: "无权限访问",
          icon: "none"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/courses/create-course"
        });
      }
    };
    const handleJoinCourse = () => {
      const userInfo = common_vendor.index.getStorageSync("userInfo");
      if (userInfo && userInfo.role === "student") {
        common_vendor.index.navigateTo({
          url: "/pages/courses/join-course"
        });
      } else {
        common_vendor.index.showToast({
          title: "老师不能申请课程",
          icon: "none"
        });
      }
    };
    const handleManageCourse = () => {
      const userInfo = common_vendor.index.getStorageSync("userInfo");
      if (userInfo && userInfo.role === "student") {
        common_vendor.index.showToast({
          title: "无权限访问",
          icon: "none"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/courses/manage-course"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(handleCreateCourse),
        c: common_assets._imports_0,
        d: common_vendor.o(handleJoinCourse),
        e: common_assets._imports_1,
        f: common_assets._imports_1,
        g: common_vendor.o(handleManageCourse),
        h: common_vendor.p({
          title: "更多资源"
        }),
        i: common_assets._imports_2,
        j: common_assets._imports_2,
        k: common_assets._imports_2,
        l: common_assets._imports_2
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
