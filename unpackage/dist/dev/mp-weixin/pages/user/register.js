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
  __name: "register",
  setup(__props) {
    const studentNumber = common_vendor.ref("");
    const password = common_vendor.ref("");
    const confirmPassword = common_vendor.ref("");
    const studentName = common_vendor.ref("");
    const gender = common_vendor.ref("男");
    const grade = common_vendor.ref("");
    const department = common_vendor.ref("");
    const major = common_vendor.ref("");
    const phone = common_vendor.ref("");
    const role = common_vendor.ref("student");
    const selectGender = (e) => {
      gender.value = e.detail.value;
    };
    const pickerChange = (e) => {
      grade.value = parseInt(e.detail.value);
    };
    const register = () => {
      if (!studentNumber.value || !password.value || !confirmPassword.value || !studentName.value || !department.value || !major.value || !phone.value) {
        common_vendor.index.showToast({
          title: "请完整填写所有信息",
          icon: "error"
        });
        return;
      }
      if (password.value !== confirmPassword.value) {
        common_vendor.index.showToast({
          title: "密码和确认密码不一致",
          icon: "error"
        });
        return;
      }
      common_vendor.index.request({
        url: utils_config.globalData.baseUrl + "/auth/register/student",
        method: "POST",
        data: {
          studentNumber: studentNumber.value,
          studentName: studentName.value,
          password: password.value,
          gender: gender.value,
          department: department.value,
          major: major.value,
          grade: grade.value,
          phone: phone.value,
          role: role.value,
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
            common_vendor.index.showToast({ title: "注册成功", icon: "success" });
            common_vendor.index.switchTab({
              url: "/pages/index/index"
            });
          } else {
            common_vendor.index.showToast({ title: data.msg || "注册失败！", icon: "error" });
          }
        },
        fail: (err) => {
          common_vendor.index.showToast({
            title: "网络错误",
            icon: "error"
          });
          common_vendor.index.__f__("log", "at pages/user/register.vue:156", err);
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "用户注册"
        }),
        b: studentNumber.value,
        c: common_vendor.o(($event) => studentNumber.value = $event.detail.value),
        d: password.value,
        e: common_vendor.o(($event) => password.value = $event.detail.value),
        f: confirmPassword.value,
        g: common_vendor.o(($event) => confirmPassword.value = $event.detail.value),
        h: studentName.value,
        i: common_vendor.o(($event) => studentName.value = $event.detail.value),
        j: gender.value === "男",
        k: gender.value === "女",
        l: common_vendor.o(selectGender),
        m: grade.value
      }, grade.value ? {
        n: common_vendor.t(grade.value)
      } : {}, {
        o: common_vendor.o(pickerChange),
        p: department.value,
        q: common_vendor.o(($event) => department.value = $event.detail.value),
        r: major.value,
        s: common_vendor.o(($event) => major.value = $event.detail.value),
        t: phone.value,
        v: common_vendor.o(($event) => phone.value = $event.detail.value),
        w: common_vendor.o(register)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fd534bf9"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/register.js.map
