"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_config = require("../../utils/config.js");
if (!Array) {
  const _easycom_block_bar_other2 = common_vendor.resolveComponent("block-bar-other");
  _easycom_block_bar_other2();
}
const _easycom_block_bar_other = () => "../../components/block-bar-other/block-bar-other.js";
if (!Math) {
  _easycom_block_bar_other();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const userNumber = common_vendor.ref("");
    const password = common_vendor.ref("");
    const login = () => {
      if (!userNumber.value || !password.value) {
        common_vendor.index.showToast({
          title: "请输入学号和密码",
          icon: "error"
        });
        return;
      }
      common_vendor.index.request({
        url: utils_config.globalData.baseUrl + "/auth/login",
        method: "POST",
        data: {
          userNumber: userNumber.value,
          password: password.value,
          openid: null
        },
        header: {
          "Content-Type": "application/json"
        },
        success: (res) => {
          const data = res.data;
          if (data.code === 0) {
            common_vendor.index.setStorageSync("userInfo", {
              userId: data.data.userId,
              userNumber: data.data.userNumber,
              userName: data.data.userName,
              role: data.data.role,
              token: data.data.token
            });
            common_vendor.index.showToast({ title: "登录成功", icon: "success" });
            common_vendor.index.switchTab({
              url: "/pages/index/index"
            });
          } else {
            common_vendor.index.showToast({ title: data.msg || "登录异常", icon: "error" });
          }
        },
        fail: (e) => {
          common_vendor.index.showToast({ title: "网络异常", icon: "error" });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "用户登录"
        }),
        b: userNumber.value,
        c: common_vendor.o(($event) => userNumber.value = $event.detail.value),
        d: password.value,
        e: common_vendor.o(($event) => password.value = $event.detail.value),
        f: common_vendor.o(login)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6163e5ce"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/login.js.map
