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
  __name: "modify-info",
  setup(__props) {
    const gender = common_vendor.ref("");
    const grade = common_vendor.ref("");
    const department = common_vendor.ref("");
    const major = common_vendor.ref("");
    const phone = common_vendor.ref("");
    const selectGender = (e) => {
      gender.value = e.detail.value;
    };
    const pickerChange = (e) => {
      grade.value = parseInt(e.detail.value);
    };
    const userInfo = common_vendor.index.getStorageSync("userInfo");
    common_vendor.index.request({
      url: utils_config.globalData.baseUrl + "/user/getInfo/" + userInfo.token,
      header: {
        "Content-Type": "application/json"
      },
      success: (res) => {
        const backData = res.data;
        if (backData.code === 0) {
          gender.value = backData.data.gender;
          department.value = backData.data.department;
          major.value = backData.data.major;
          phone.value = backData.data.phone;
          grade.value = backData.data.grade;
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
    const modify = () => {
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "修改个人信息"
        }),
        b: gender.value === "男",
        c: gender.value === "女",
        d: common_vendor.o(selectGender),
        e: grade.value
      }, grade.value ? {
        f: common_vendor.t(grade.value)
      } : {}, {
        g: common_vendor.o(pickerChange),
        h: department.value,
        i: common_vendor.o(($event) => department.value = $event.detail.value),
        j: major.value,
        k: common_vendor.o(($event) => major.value = $event.detail.value),
        l: phone.value,
        m: common_vendor.o(($event) => phone.value = $event.detail.value),
        n: common_vendor.o(modify)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-01c8b55a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/modify-info.js.map
