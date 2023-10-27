import {
  Modal,
  Popover,
  Select,
  Dropdown,
  Tooltip,
  Popconfirm,
  DatePicker,
  Cascader,
  TreeSelect,
} from "ant-design-vue";

import Vue from "vue";

export default function rewriteContainer(options) {
  if(!options.elementId) return console.error('elementId is required');

  let elementId = ''
  if (options && options.elementId) {
     elementId = options.elementId
  } else {
    elementId = window.location.pathname.split('/')[0] + 'Container'
  }

  const container = () => document.getElementById(elementId);
  const parentContainer = (triggerNode) => triggerNode && triggerNode.parentNode ? triggerNode.parentNode : container;

  const _this = Vue.prototype;

  Modal.props.getContainer.default = container;
  Popover.props.getPopupContainer.default = container;
  Select.props.getPopupContainer.default = options && options.isBindToParent ? parentContainer : container;
  Dropdown.props.getPopupContainer.default = container;
  Tooltip.props.getPopupContainer.default = container;
  Popconfirm.props.getPopupContainer.default = container;
  Cascader.props.getPopupContainer.default = container;
  DatePicker.props.getCalendarContainer.default = container;
  DatePicker.RangePicker.props.getCalendarContainer.default = container;
  DatePicker.MonthPicker.props.getCalendarContainer.default = container;
  DatePicker.WeekPicker.props.getCalendarContainer.default = container;
  TreeSelect.props.getPopupContainer.default = container;

  _this.$message.config({
    getContainer: container,
  });
}
