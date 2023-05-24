import rewriteContainer from "@/rewriteContainer.js";
import { fixStyle, isInQianKun } from "@root/utils";
import actions from "@root/utils/actions";

function fixElementStyle({ container }, options) {
  fixStyle({ container }, options);

  rewriteContainer(options);
}

export { fixElementStyle, isInQianKun, actions };
