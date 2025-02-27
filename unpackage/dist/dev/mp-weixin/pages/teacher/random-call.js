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
    const cancelShow = () => {
      isShow.value = false;
    };
    const randomCall = () => {
      isShow.value = true;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "随机点名"
        }),
        b: common_vendor.o(randomCall),
        c: common_vendor.o(() => {
        }),
        d: common_vendor.o((...args) => _ctx.absence && _ctx.absence(...args)),
        e: isShow.value,
        f: common_vendor.o(cancelShow)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/teacher/random-call.js.map
