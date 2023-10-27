import rewriteContainer from "@/rewriteContainer.js";
import { isInQianKun } from "@root/utils";
import actions from "@root/utils/actions";
import handleRouter from "@root/utils/handleRouter";
import { closeCurrentTag } from "@root/utils/handleTag";
import fixComponentsStyle from "./fixComponentsStyle";

function fixElementStyle(props, options) {
  if (!isInQianKun()) {
    return;
  }

  fixComponentsStyle(props, options);

  rewriteContainer(options);
}

export { rewriteContainer, fixElementStyle, isInQianKun, actions, handleRouter, closeCurrentTag, fixComponentsStyle };
