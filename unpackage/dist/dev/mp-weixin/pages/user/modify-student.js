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
  __name: "modify-student",
  setup(__props) {
    const student = common_vendor.ref({});
    const selectGender = (e) => {
      student.value.gender = e.detail.value;
    };
    const pickerChange = (e) => {
      student.value.grade = parseInt(e.detail.value);
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
          student.value = backData.data;
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
      common_vendor.index.request({
        url: utils_config.globalData.baseUrl + "/user/modify/student/" + userInfo.token,
        method: "POST",
        data: {
          gender: student.value.gender,
          department: student.value.department,
          major: student.value.major,
          grade: student.value.grade,
          phone: student.value.phone
        },
        header: {
          "Content-Type": "application/json"
        },
        success: (res) => {
          const backData = res.data;
          if (backData.code === 0) {
            common_vendor.index.showToast({
              title: "修改成功",
              icon: "success"
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
      return common_vendor.e({
        a: common_vendor.p({
          title: "修改个人信息"
        }),
        b: common_vendor.t(student.value.studentNumber),
        c: common_vendor.t(student.value.studentName),
        d: student.value.gender === "男",
        e: student.value.gender === "女",
        f: common_vendor.o(selectGender),
        g: student.value.grade
      }, student.value.grade ? {
        h: common_vendor.t(student.value.grade)
      } : {}, {
        i: common_vendor.o(pickerChange),
        j: student.value.department,
        k: common_vendor.o(($event) => student.value.department = $event.detail.value),
        l: student.value.major,
        m: common_vendor.o(($event) => student.value.major = $event.detail.value),
        n: student.value.phone,
        o: common_vendor.o(($event) => student.value.phone = $event.detail.value),
        p: common_vendor.o(modify)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9d3cff22"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/modify-student.js.map
