# [@qiankun-fix/antd](https://github.com/RobinWM/qiankun-fix/blob/master/packages/antd/CHANGELOG.md)

## 1.简介
@qiankun-fix/antd 是一个用于解决 qiankun 框架下子应用适配的 JavaScript 库,适用于antd for vue，element-ui请[点击](https://www.npmjs.com/package/@qiankun-fix/element-ui)

## 2.使用

### (1)安装

```Javascript
import { isInQianKun, fixElementStyle } from '@qiankun-fix/antd'
```

### (2)调用fixElementStyle
```Javascript
function render(props = {}) {
  const { container } = props

  // qiankun环境下处理弹出类组件挂载问题
  fixElementStyle(props, { elementId: 'contaninerName' })

  // 挂载应用
  instance = new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}
```

