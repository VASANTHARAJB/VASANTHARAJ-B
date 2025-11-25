import LogsPanel from "./LogsPanel-C4P2jfja.js";
import { d as defineComponent, a4 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-BEC9W_3K.js";
import "./RunData-CY2AnQ-5.js";
import "./FileSaver.min-BRpMoNCX.js";
import "./useKeybindings-D5pwrTFM.js";
import "./useExecutionHelpers-CXZC4OGe.js";
import "./AnimatedSpinner-Du5eXSIY.js";
import "./ActionDropdown-BhU4vCrE.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFooter",
  setup(__props) {
    const workflowsStore = useWorkflowsStore();
    const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
    return (_ctx, _cache) => {
      return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel, {
        key: 0,
        "is-read-only": true
      })) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
