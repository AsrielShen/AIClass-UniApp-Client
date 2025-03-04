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
  __name: "random-call",
  setup(__props) {
    const isShow = common_vendor.ref(false);
    const studentId = common_vendor.ref("");
    const studentName = common_vendor.ref("");
    const cancelShow = () => {
      isShow.value = false;
    };
    const randomCall = () => {
      common_vendor.index.request({
        url: "http://127.0.0.1:1234/api/absence/random",
        // 接口地址
        method: "GET",
        success: (res) => {
          if (res.statusCode === 200) {
            const studentInfo = res.data;
            studentName.value = studentInfo.name;
            studentId.value = studentInfo.studentId;
            isShow.value = true;
          } else {
            common_vendor.index.showToast({
              title: "数据获取失败",
              icon: "none"
            });
          }
        },
        fail: (err) => {
          common_vendor.index.showToast({
            title: "网络请求失败,",
            icon: "none"
          });
        }
      });
    };
    const pointSubmit = () => {
      common_vendor.index.request({
        url: `http://127.0.0.1:1234/api/absence/mark-score/${studentId.value}`,
        method: "POST",
        success: () => {
          common_vendor.index.showToast({
            title: "加分记录成功",
            icon: "success"
          });
          cancelShow();
        },
        fail: () => {
          common_vendor.index.showToast({
            title: "加分失败，请重试",
            icon: "fail"
          });
          cancelShow();
        }
      });
    };
    const absenceSubmit = () => {
      common_vendor.index.request({
        url: `http://127.0.0.1:1234/api/absence/mark-absence/${studentId.value}`,
        method: "POST",
        success: () => {
          common_vendor.index.showToast({
            title: "缺勤记录成功",
            icon: "success"
          });
          cancelShow();
        },
        fail: () => {
          common_vendor.index.showToast({
            title: "记录失败，请重试",
            icon: "ERROR"
          });
          cancelShow();
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "随机点名"
        }),
        b: common_vendor.o(randomCall),
        c: isShow.value
      }, isShow.value ? {
        d: common_vendor.t(studentId.value),
        e: common_vendor.t(studentName.value),
        f: common_vendor.o(pointSubmit),
        g: common_vendor.o(absenceSubmit),
        h: common_vendor.o(cancelShow)
      } : {});
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/teacher/random-call.js.map
