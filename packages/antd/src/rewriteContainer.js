import {
  Modal,
  Popover,
  Select,
  Dropdown,
  Tooltip,
  Popconfirm,
  DatePicker,
  Cascader,
} from "ant-design-vue";

import Vue from "vue";

export default function rewriteContainer({ elementId }) {
  const container = () => document.getElementById(elementId);

  const _this = Vue.prototype;

  Modal.props.getContainer.default = container;
  Popover.props.getPopupContainer.default = container;
  Select.props.getPopupContainer.default = container;
  Dropdown.props.getPopupContainer.default = container;
  Tooltip.props.getPopupContainer.default = container;
  Popconfirm.props.getPopupContainer.default = container;
  Cascader.props.getPopupContainer.default = container;
  DatePicker.props.getCalendarContainer.default = container;
  DatePicker.RangePicker.props.getCalendarContainer.default = container;
  DatePicker.MonthPicker.props.getCalendarContainer.default = container;
  DatePicker.WeekPicker.props.getCalendarContainer.default = container;

  _this.$message.config({
    getContainer: container,
  });
}
