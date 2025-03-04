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
  __name: "join-course",
  setup(__props) {
    const isShow = common_vendor.ref(false);
    const cancelShow = () => {
      isShow.value = false;
    };
    const courseNum = common_vendor.ref("");
    const searchFunc = () => {
      isShow.value = true;
      common_vendor.index.__f__("log", "at pages/courses/join-course.vue:58", courseNum.value);
    };
    const joinSubmit = () => {
      courseNum.value = "";
      cancelShow();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "加入课程"
        }),
        b: courseNum.value,
        c: common_vendor.o(($event) => courseNum.value = $event.detail.value),
        d: courseNum.value.length !== 10 ? 1 : "",
        e: common_vendor.o(searchFunc),
        f: courseNum.value.length !== 10,
        g: isShow.value
      }, isShow.value ? {
        h: common_vendor.o(joinSubmit),
        i: common_vendor.o(cancelShow),
        j: common_vendor.o(cancelShow)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5886b731"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/courses/join-course.js.map
