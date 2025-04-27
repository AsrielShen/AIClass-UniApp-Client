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
  __name: "create-course",
  setup(__props) {
    const courseName = common_vendor.ref("");
    const courseDes = common_vendor.ref("");
    const fileName = common_vendor.ref("");
    let filePath = "";
    const userInfo = common_vendor.index.getStorageSync("userInfo");
    const formSubmit = () => {
      common_vendor.index.uploadFile({
        url: utils_config.globalData.baseUrl + "/course/create",
        // 你的后端接口
        filePath,
        name: "file",
        formData: {
          courseName: courseName.value,
          description: courseDes.value,
          token: userInfo.token
        },
        success: (res) => {
          const backData = JSON.parse(res.data);
          if (backData.code == 0) {
            common_vendor.index.showToast({
              title: "创建成功！",
              icon: "success"
            });
          } else {
            common_vendor.index.showToast({
              title: "创建失败！",
              icon: "error"
            });
          }
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/courses/create-course.vue:72", err);
          common_vendor.index.showToast({
            title: "上传失败",
            icon: "error"
          });
        }
      });
    };
    const formReset = () => {
      fileName.value = "";
      filePath = "";
      common_vendor.index.__f__("log", "at pages/courses/create-course.vue:83", "here is reset");
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
            common_vendor.index.__f__("log", "at pages/courses/create-course.vue:98", "选择的文件是 Excel 文件:", fileName);
            common_vendor.index.__f__("log", "at pages/courses/create-course.vue:99", "文件路径:", filePath);
          } else {
            common_vendor.wx$1.showToast({
              title: "请选择 Excel 文件",
              icon: "error",
              duration: 2e3
            });
          }
        },
        fail: (err) => {
          common_vendor.index.__f__("error", "at pages/courses/create-course.vue:109", "选择文件失败：", err);
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "创建课程"
        }),
        b: courseName.value,
        c: common_vendor.o(($event) => courseName.value = $event.detail.value),
        d: courseDes.value,
        e: common_vendor.o(($event) => courseDes.value = $event.detail.value),
        f: common_vendor.t(fileName.value),
        g: common_vendor.o(selectFile),
        h: common_vendor.o(formSubmit),
        i: common_vendor.o(formReset)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2afda07d"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/courses/create-course.js.map
