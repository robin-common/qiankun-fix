import { fixStyle } from "@root/utils";

export default function fixComponentsStyle(props, options){
  const originList = ["vxe-table--tooltip-wrapper", "vxe-pulldown--panel"];

  const _whiteList = originList.concat(options && options.whiteList? options.whiteList : []);

  const _options = Object.assign({}, options || {}, {whiteList: _whiteList});

  fixStyle(props, _options);
}