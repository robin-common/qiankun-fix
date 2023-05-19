import { Dialog, Select, DatePicker } from "element-ui";

export default function rewriteContainer() {
  Dialog.props.modalAppendToBody.default = false;
  Dialog.props.appendToBody.default = false;
  Select.props.popperAppendToBody.default = false;
  DatePicker.props.appendToBody = false;
}
