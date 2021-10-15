import classes from "./Modal.module.scss";
import clsx from "clsx";
import Backdrop from "../Backdrop/Backdrop";
import { createPortal } from "react-dom";

const moveModal = (props) => {
  const { children, style, onBackdropClick } = props;

  return createPortal(
    <div style={{ ...style }} className={clsx(classes.Modal, props.className)}>
      <Backdrop clicked={onBackdropClick} />
      {children}
    </div>,
    document.getElementById("root")
  );
};

const Modal = (props) => {
  return moveModal(props);
};

export default Modal;
