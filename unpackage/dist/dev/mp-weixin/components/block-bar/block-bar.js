"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "block-bar",
  props: {
    title: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7ddac726"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/block-bar/block-bar.js.map
