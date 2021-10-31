import classes from "./Modal.module.scss";
import clsx from "clsx";
import Backdrop from "../Backdrop/Backdrop";
import { createPortal } from "react-dom";

const Modal = (props) => {
  const { children, style, onBackdropClick } = props;

  return createPortal(
    <div style={{ ...style }} className={clsx(classes.Modal, props.className)}>
      <Backdrop clicked={onBackdropClick} />
      <div className={classes.Modal__children}>{children}</div>
    </div>,
    document.getElementById("root")
  );
};

export default Modal;
