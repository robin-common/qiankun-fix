import rewriteContainer from "@/rewriteContainer.js";
import { fixStyle, isInQianKun } from "@root/utils";
import actions from "@root/utils/actions";
import handleRouter from "@root/utils/handleRouter";
import { closeCurrentTag } from "@root/utils/handleTag";

function fixElementStyle(props, options) {
  if (!isInQianKun()) {
    return;
  }

  fixStyle(props, options);

  rewriteContainer(options);
}

export { fixElementStyle, isInQianKun, actions, handleRouter, closeCurrentTag };
