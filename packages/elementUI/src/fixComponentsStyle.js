import { fixStyle } from "@root/utils";

export default function fixComponentsStyle(props, options){
  const vxeTableToolTip = 'vxe-table--tooltip-wrapper'
  const elToolTip = 'el-tooltip__popper'
  const elMessage = 'el-message'
  const elMessageSuccess = 'el-message-success'
  const elMessageError = 'el-message-error'
  const elDropDownMenu = 'el-dropdown-menu'
  const elCascader = 'el-cascader-menu'
  const elCascaderItem = 'el-cascader-menu__item'
  const elPicker = 'el-picker-panel'
  const elSelectDropdown = 'el-select-dropdown'
  const elMessageBox = 'el-message-box'
  const viewContainer = 'viewer-container'
  const elViewWrapper = 'el-image-viewer__wrapper'
  const elPopper = 'el-popper'
  const elDialogWrapper = 'el-dialog__wrapper'
  const originList =
    [vxeTableToolTip,
      elToolTip,
      elMessage,
      elDropDownMenu,
      elCascader,
      elCascaderItem,
      elPicker,
      elSelectDropdown,
      elMessageBox,
      elMessageSuccess,
      elMessageError,
      viewContainer,
      elPopper,
      elDialogWrapper,
      elViewWrapper
    ]

  const _whiteList = originList.concat(options && options.whiteList? options.whiteList : []);

  const _options = Object.assign({}, options || {}, {whiteList: _whiteList});

  fixStyle(props, _options);
}