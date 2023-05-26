import rewriteContainer from "@/rewriteContainer.js";
import { fixStyle, isInQianKun } from "@root/utils";
import actions from "@root/utils/actions";

function fixElementStyle(props, options) {
  fixStyle(props, options);

  rewriteContainer();
}

export { fixElementStyle, isInQianKun, actions };
