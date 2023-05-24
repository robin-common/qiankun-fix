import rewriteContainer from "@/rewriteContainer.js";
import { fixStyle, isInQianKun } from "@root/utils";
import actions from "@root/utils/actions";

function fixElementStyle({ container }, options = { whiteList: [] }) {
  fixStyle({ container }, options);

  rewriteContainer();
}

export { fixElementStyle, isInQianKun, actions };
