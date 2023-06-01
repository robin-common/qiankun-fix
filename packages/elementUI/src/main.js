import rewriteContainer from "@/rewriteContainer.js";
import { fixStyle, isInQianKun } from "@root/utils";
import actions from "@root/utils/actions";
import handleRouter from "@root/utils/handleRouter";
import { closeCurrentTag } from "@root/utils/handleTag";

function fixElementStyle(props, options) {
  if (!isInQianKun()) {
    return;
  }

  const originList = [
    "el-tooltip__popper",
    "el-message",
    "el-dialog__wrapper",
    "el-popper",
  ];
  const whiteList = [...originList, ...(options.whiteList || [])];
  fixStyle(props, { ...options, whiteList });

  rewriteContainer();
}

export { fixElementStyle, isInQianKun, actions, handleRouter, closeCurrentTag };
