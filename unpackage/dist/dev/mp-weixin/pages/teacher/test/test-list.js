"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_block_bar2 = common_vendor.resolveComponent("block-bar");
  _easycom_block_bar2();
}
const _easycom_block_bar = () => "../../../components/block-bar/block-bar.js";
if (!Math) {
  _easycom_block_bar();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "课堂练习"
    }),
    b: common_vendor.f(4, (index, k0, i0) => {
      return {
        a: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-609fe5df"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/teacher/test/test-list.js.map
