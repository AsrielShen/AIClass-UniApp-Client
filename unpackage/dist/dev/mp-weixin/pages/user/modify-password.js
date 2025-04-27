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
  __name: "modify-password",
  setup(__props) {
    const password = common_vendor.ref({
      old: "",
      new: "",
      confirm: ""
    });
    const userInfo = common_vendor.index.getStorageSync("userInfo");
    const modify = () => {
      common_vendor.index.__f__("log", "at pages/user/modify-password.vue:37", password.value);
      if (password.value.old == password.value.new) {
        common_vendor.index.showToast({
          title: "旧密码和新密码相同",
          icon: "error"
        });
        return;
      } else if (password.value.new != password.value.confirm) {
        common_vendor.index.showToast({
          title: "确认密码与新密码不同",
          icon: "error"
        });
        return;
      }
      common_vendor.index.request({
        url: utils_config.globalData.baseUrl + "/user/modify/password/" + userInfo.token,
        method: "POST",
        data: {
          oldPassword: password.value.old,
          newPassword: password.value.new,
          confirmPassword: password.value.confirm
        },
        header: {
          "Content-Type": "application/json"
        },
        success: (res) => {
          const backData = res.data;
          if (backData.code === 0) {
            common_vendor.index.showToast({
              title: "修改成功，重新登录",
              icon: "success"
            });
            common_vendor.index.removeStorageSync("userInfo");
            common_vendor.index.redirectTo({
              url: "/pages/user/login"
            });
          } else if (backData.code === 1) {
            common_vendor.index.showToast({
              title: "密码错误",
              icon: "error"
            });
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
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "修改密码"
        }),
        b: password.value.old,
        c: common_vendor.o(($event) => password.value.old = $event.detail.value),
        d: password.value.new,
        e: common_vendor.o(($event) => password.value.new = $event.detail.value),
        f: password.value.confirm,
        g: common_vendor.o(($event) => password.value.confirm = $event.detail.value),
        h: common_vendor.o(modify)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9ffcaf60"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/modify-password.js.map
