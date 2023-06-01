import actions from "./actions";
import { isInQianKun } from "./index";
import Vue from "vue";

export function closeCurrentTag(key, fn = null) {
  let _closeCurrentTag = "";

  actions.onGlobalStateChange((state) => {
    console.log("子应用监听--》", state);
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
    console.log("Vue.prototype[key]", Vue.prototype[key]);
    console.log("Vue.prototype", Vue.prototype);
  }, true);
}
