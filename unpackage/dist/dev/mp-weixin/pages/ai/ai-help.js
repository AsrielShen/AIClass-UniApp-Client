"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "ai-help",
  setup(__props) {
    const userInput = common_vendor.ref("");
    const chatHistory = common_vendor.ref([
      {
        type: "ai",
        message: "**您好！** 请问有什么问题我可以帮助您解答？"
      },
      {
        type: "user",
        message: "什么是 Vue 3？"
      },
      {
        type: "ai",
        message: "Vue 3 是一个 **渐进式框架**，用于构建用户界面。"
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
      const aiResponse = `这是AI的回答：**${message}**`;
      chatHistory.value.push({
        type: "ai",
        message: aiResponse
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
