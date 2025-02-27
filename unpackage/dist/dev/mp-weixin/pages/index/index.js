"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_block_bar2 = common_vendor.resolveComponent("block-bar");
  _easycom_block_bar2();
}
const _easycom_block_bar = () => "../../components/block-bar/block-bar.js";
if (!Math) {
  _easycom_block_bar();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_assets._imports_0,
        c: common_assets._imports_1,
        d: common_assets._imports_1,
        e: common_vendor.p({
          title: "更多资源"
        }),
        f: common_assets._imports_2,
        g: common_assets._imports_2,
        h: common_assets._imports_2,
        i: common_assets._imports_2
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
