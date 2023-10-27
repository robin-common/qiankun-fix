import { Dialog, Select, DatePicker, Cascader } from "element-ui";

export default function rewriteContainer() {
  Dialog.props.modalAppendToBody.default = true;
  Dialog.props.appendToBody.default = true;
  Select.props.popperAppendToBody.default = false;
  DatePicker.props.appendToBody = false;
  Cascader.props.appendToBody = false;
}
