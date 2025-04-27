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
    const fileName = common_vendor.ref("");
    let filePath = "";
    const formSubmit = () => {
      common_vendor.index.__f__("log", "at pages/courses/create-course.vue:45", "here is submit");
    };
    const formReset = () => {
      fileName.value = "";
      filePath = "";
      common_vendor.index.__f__("log", "at pages/courses/create-course.vue:50", "here is reset");
    };
    const selectFile = () => {
      common_vendor.wx$1.chooseMessageFile({
        count: 1,
        type: "file",
        extension: [".xls", ".xlsx"],
        success: (res) => {
          const file = res.tempFiles[0];
          const isExcel = /\.(xls|xlsx)$/i.test(file.name);
          if (isExcel) {
            fileName.value = file.name;
            filePath = file.path;
            common_vendor.index.__f__("log", "at pages/courses/create-course.vue:65", "选择的文件是 Excel 文件:", fileName);
            common_vendor.index.__f__("log", "at pages/courses/create-course.vue:66", "文件路径:", filePath);
          } else {
            common_vendor.wx$1.showToast({
              title: "请选择 Excel 文件",
              icon: "error",
              duration: 2e3
            });
          }
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/courses/create-course.vue:76", "选择文件失败：", err);
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "创建课程"
        }),
        b: common_vendor.t(fileName.value),
        c: common_vendor.o(selectFile),
        d: common_vendor.o(formSubmit),
        e: common_vendor.o(formReset)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2afda07d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/courses/create-course.js.map
