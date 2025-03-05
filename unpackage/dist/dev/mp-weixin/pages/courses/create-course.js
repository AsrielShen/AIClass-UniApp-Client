"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_block_bar_other2 = common_vendor.resolveComponent("block-bar-other");
  _easycom_block_bar_other2();
}
const _easycom_block_bar_other = () => "../../components/block-bar-other/block-bar-other.js";
if (!Math) {
  _easycom_block_bar_other();
}
const _sfc_main = {
  __name: "create-course",
  setup(__props) {
    const isShow = common_vendor.ref(false);
    const openShow = () => {
      isShow.value = true;
    };
    const cancelShow = () => {
      isShow.value = false;
    };
    const formSubmit = () => {
      common_vendor.index.__f__("log", "at pages/courses/create-course.vue:77", "here is submit");
    };
    const formReset = () => {
      common_vendor.index.__f__("log", "at pages/courses/create-course.vue:80", "here is reset");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "创建课程"
        }),
        b: common_vendor.o(openShow),
        c: common_vendor.o(formReset),
        d: isShow.value
      }, isShow.value ? {
        e: common_vendor.o(formSubmit),
        f: common_vendor.o(cancelShow),
        g: common_vendor.o(cancelShow)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2afda07d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/courses/create-course.js.map
