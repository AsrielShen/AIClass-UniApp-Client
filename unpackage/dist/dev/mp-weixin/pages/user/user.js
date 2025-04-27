"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_config = require("../../utils/config.js");
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const user = common_vendor.ref({});
    const userInfo = common_vendor.index.getStorageSync("userInfo");
    common_vendor.index.request({
      url: utils_config.globalData.baseUrl + "/user/getInfo/" + userInfo.token,
      header: {
        "Content-Type": "application/json"
      },
      success: (res) => {
        const backData = res.data;
        if (backData.code === 0) {
          user.value = backData.data;
        } else {
          common_vendor.index.showToast({
            title: "认证错误，请重新登录",
            icon: "error"
          });
          common_vendor.index.removeStorageSync("userInfo");
          common_vendor.index.redirectTo({
            url: "/pages/user/login"
          });
        }
      },
      fail: (e) => {
        common_vendor.index.showToast({ title: "网络异常", icon: "error" });
      }
    });
    const logout = () => {
      common_vendor.index.removeStorageSync("userInfo");
      common_vendor.index.redirectTo({
        url: "/pages/user/login"
      });
    };
    const gotoPageModifyInfo = () => {
      if (user.value.role == "student") {
        common_vendor.index.navigateTo({
          url: "/pages/user/modify-student"
        });
      }
    };
    const gotoPageModifyPassword = () => {
      common_vendor.index.navigateTo({
        url: "/pages/user/modify-password"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0$1,
        b: common_vendor.t(user.value.studentName || user.value.teacherName),
        c: common_vendor.t(user.value.role == "student" ? "学生" : "教师"),
        d: common_vendor.t(user.value.department),
        e: user.value.major
      }, user.value.major ? {
        f: common_vendor.t(user.value.major)
      } : {}, {
        g: user.value.grade
      }, user.value.grade ? {
        h: common_vendor.t(user.value.grade)
      } : {}, {
        i: common_assets._imports_1$1,
        j: common_vendor.o(gotoPageModifyInfo),
        k: common_assets._imports_1$1,
        l: common_vendor.o(gotoPageModifyPassword),
        m: common_assets._imports_1$1,
        n: common_assets._imports_1$1,
        o: common_vendor.o(logout)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
