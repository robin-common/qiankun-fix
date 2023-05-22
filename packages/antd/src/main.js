import rewriteContainer from "@/rewriteContainer.js"
import { fixStyle, isInQianKun } from "@root/utils/index.js"

function fixElementStyle({ container }, options) {
  fixStyle({ container }, options)

  rewriteContainer(options)
}

export { fixElementStyle, isInQianKun }