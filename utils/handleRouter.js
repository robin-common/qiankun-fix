import actions from "./actions";
import { isInQianKun } from "./index";

export default function handleRouter(key, fn) {
  let _parentPath = "";
  let _parentRouter = "";
  let _microName = "";

  actions.onGlobalStateChange((state) => {
    _parentPath = state.path;
    _parentRouter = state.router;
    _microName = state.microName;
  }, true);

  return new Promise((resolve, reject) => {
    if (isInQianKun() && _microName !== key) {
      // 非微应用跳转
      reject();
      try {
        fn && fn();
        _parentRouter && _parentRouter.push(_parentPath);
      } catch (e) {
        reject(e);
      }
    } else {
      resolve();
    }
  });
}
