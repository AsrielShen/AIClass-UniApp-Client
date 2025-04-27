"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_config = require("../../utils/config.js");
const _sfc_main = {
  __name: "ai-help",
  setup(__props) {
    const userInput = common_vendor.ref("");
    const chatHistory = common_vendor.ref([
      {
        type: "ai",
        message: "**您好！** 这里是ai问答"
      }
    ]);
    const md = new common_vendor.MarkdownIt();
    const renderMarkdown = (markdownText) => {
      return md.render(markdownText);
    };
    const sendMessage = () => {
      if (userInput.value.trim() === "")
        return;
      chatHistory.value.push({
        type: "user",
        message: userInput.value
      });
      const message = userInput.value;
      userInput.value = "";
      common_vendor.index.request({
        url: utils_config.globalData.baseUrl + "/ai/generate/",
        method: "POST",
        data: message,
        header: {
          "Content-Type": "application/json"
        },
        success: (res) => {
          const backData = res.data;
          common_vendor.index.__f__("log", "at pages/ai/ai-help.vue:65", backData);
          if (backData.code === 0) {
            const aiResponse = backData.data.generatedText;
            chatHistory.value.push({
              type: "ai",
              message: aiResponse
            });
          } else {
            common_vendor.index.showToast({
              title: "生成失败！",
              icon: "error"
            });
          }
        },
        fail: (e) => {
          common_vendor.index.showToast({ title: "网络异常", icon: "error" });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(chatHistory.value, (item, index, i0) => {
          return common_vendor.e({
            a: item.type === "ai"
          }, item.type === "ai" ? {
            b: renderMarkdown(item.message)
          } : {}, {
            c: item.type === "user"
          }, item.type === "user" ? {
            d: common_vendor.t(item.message)
          } : {}, {
            e: index
          });
        }),
        b: userInput.value,
        c: common_vendor.o(($event) => userInput.value = $event.detail.value),
        d: common_vendor.o(sendMessage)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-efcff537"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/ai/ai-help.js.map
