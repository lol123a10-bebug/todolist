import classes from "./Modal.module.scss";
import clsx from "clsx";
import Backdrop from "../Backdrop/Backdrop";
import { createPortal } from "react-dom";

const moveModal = (props) => {
  const { children } = props;

  return createPortal(
    <>
      <Backdrop />
      <div className={clsx(classes.Modal, props.className)}>{children}</div>
    </>,
    document.getElementById("root")
  );
};

const Modal = (props) => {
  return moveModal(props);
};

export default Modal;
