"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_config = require("../../utils/config.js");
if (!Array) {
  const _easycom_block_bar2 = common_vendor.resolveComponent("block-bar");
  _easycom_block_bar2();
}
const _easycom_block_bar = () => "../../components/block-bar/block-bar.js";
if (!Math) {
  _easycom_block_bar();
}
const _sfc_main = {
  __name: "join-course",
  setup(__props) {
    const isShow = common_vendor.ref();
    const courseNum = common_vendor.ref("");
    const course = common_vendor.ref({});
    const userInfo = common_vendor.index.getStorageSync("userInfo");
    const cancelShow = () => {
      isShow.value = false;
    };
    const searchFunc = () => {
      common_vendor.index.request({
        url: utils_config.globalData.baseUrl + "/course/getById/" + courseNum.value,
        header: {
          "Content-Type": "application/json"
        },
        success: (res) => {
          const backData = res.data;
          if (backData.code === 0) {
            isShow.value = true;
            course.value = backData.data;
            common_vendor.index.__f__("log", "at pages/courses/join-course.vue:63", course.value);
          } else {
            common_vendor.index.showToast({
              title: "查询失败！",
              icon: "error"
            });
          }
        },
        fail: (e) => {
          common_vendor.index.showToast({ title: "网络异常", icon: "error" });
        }
      });
    };
    const joinSubmit = () => {
      common_vendor.index.request({
        url: utils_config.globalData.baseUrl + "/course/join/" + userInfo.token,
        method: "POST",
        data: course.value.id,
        header: {
          "Content-Type": "application/json"
        },
        success: (res) => {
          const backData = res.data;
          common_vendor.index.__f__("log", "at pages/courses/join-course.vue:89", backData);
          if (backData.code === 0) {
            courseNum.value = "";
            cancelShow();
            common_vendor.index.showToast({
              title: "添加成功！",
              icon: "success"
            });
          } else if (backData.code === 1) {
            common_vendor.index.showToast({
              title: "添加失败！",
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
      return common_vendor.e({
        a: common_vendor.p({
          title: "加入课程"
        }),
        b: courseNum.value,
        c: common_vendor.o(($event) => courseNum.value = $event.detail.value),
        d: common_vendor.o(searchFunc),
        e: isShow.value
      }, isShow.value ? {
        f: common_vendor.t(course.value.courseName),
        g: common_vendor.o(joinSubmit),
        h: common_vendor.o(cancelShow),
        i: common_vendor.o(cancelShow)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5886b731"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/courses/join-course.js.map
