// 空操作
function noop() {}

// 初始化全局 actions
const actions = {
  onGlobalStateChange: noop,
  setGlobalState: noop,
};

// 设置 actions
function setActions(stateActions) {
  Object.assign(actions, stateActions);
}

// 监听变化
function onGlobalStateChange(...args) {
  actions.onGlobalStateChange(...args);
}

// 更新全局 state 值
function setGlobalState(...args) {
  actions.setGlobalState(...args);
}

export default { setActions, onGlobalStateChange, setGlobalState };
