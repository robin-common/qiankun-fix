import rewriteContainer from "@/rewriteContainer.js";
import { fixStyle, isInQianKun } from "@root/utils";
import actions from "@root/utils/actions";

function fixElementStyle(props, options) {
  console.log("cs");
  fixStyle(props, options);

  rewriteContainer(options);
}

export { fixElementStyle, isInQianKun, actions };
