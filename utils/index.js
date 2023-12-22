import Vue from 'vue'

export function isInQianKun() {
  return window.__POWERED_BY_QIANKUN__ || Vue.prototype.$isMicroEnv
}

export function fixStyle(props, options) {
  if (!props.container) {
    return
  }

  let elementId = ''
  if (options && options.elementId) {
    elementId = options.elementId
  } else {
    elementId = window.location.pathname.split('/')[0] + 'Container'
  }

  // 保存原有document.body.appendChild方法
  const originFn = document.body.appendChild.bind(document.body)

  // 重写appendChild方法
  document.body.appendChild = dom => {
    // 根据标记，来区分是否用新的挂载方式
    if (
      options.whiteList.some(l => (dom.className || '').includes(l)) &&
      isInQianKun()
    ) {
      const domObj = props.container.querySelector(`#${elementId}`)
      domObj ? domObj.appendChild(dom) : originFn(dom)
    } else {
      originFn(dom)
    }
  }
}
