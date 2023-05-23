export function isInQianKun() {
  return window.__POWERED_BY_QIANKUN__;
}

export function fixStyle({ container }, options) {
  if (!isInQianKun()) {
    return;
  }

  const originList = ["vxe-table--tooltip-wrapper", "vxe-pulldown--panel"];

  // 子应用中需要挂载到子应用的弹窗的className，用作标记
  const whiteList = [...originList, ...options.whiteList];

  // 保存原有document.body.appendChild方法
  const originFn = document.body.appendChild.bind(document.body);

  // 重写appendChild方法
  document.body.appendChild = (dom) => {
    // 根据标记，来区分是否用新的挂载方式
    if (whiteList.some((l) => (dom.className || "").includes(l))) {
      container.querySelector(options.elementId).appendChild(dom);
    } else {
      originFn(dom);
    }
  };
}
