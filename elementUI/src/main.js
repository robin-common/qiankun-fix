import rewriteContainer from "./rewriteContainer.js";
import { fixStyle, isInQianKun } from "../../utils/index.js";

function fixElementStyle({ container }, options) {
  fixStyle({ container }, options);

  rewriteContainer();
}

export { fixElementStyle, isInQianKun };
