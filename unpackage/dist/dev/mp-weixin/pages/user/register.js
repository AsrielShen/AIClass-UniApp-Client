"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_block_bar_other2 = common_vendor.resolveComponent("block-bar-other");
  _easycom_block_bar_other2();
}
const _easycom_block_bar_other = () => "../../components/block-bar-other/block-bar-other.js";
if (!Math) {
  _easycom_block_bar_other();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "用户登录"
    }),
    b: _ctx.gender === "male",
    c: _ctx.gender === "female",
    d: common_vendor.o((...args) => _ctx.selectGender && _ctx.selectGender(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fd534bf9"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/register.js.map
