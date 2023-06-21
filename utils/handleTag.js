import actions from "./actions";
import { isInQianKun } from "./index";
import Vue from "vue";

export function closeCurrentTag(key, fn = null) {
  let _closeCurrentTag = "";

  actions.onGlobalStateChange((state) => {
    _closeCurrentTag = state.closeCurrentTag;
    if (isInQianKun()) {
      const list = key.split(".");
      list.reduce((pre, cur, index) => {
        if (index === list.length - 1) {
          pre[cur] = _closeCurrentTag;
        }
        return pre[cur];
      }, Vue.prototype);
    } else if (fn) {
      Vue.prototype[key] = fn;
    }
  }, true);
}
