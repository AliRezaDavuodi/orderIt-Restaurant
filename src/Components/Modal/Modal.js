import React from "react";
import reactDom from "react-dom";

import css from "./Modal.module.scss";

const Backdrop = (props) => {
  return <div className={css.backdrop} onClick={props.close} />;
};

const Overlay = (props) => {
  return (
    <div className={css.modal}>
      <div className={css.content}>{props.children}</div>
    </div>
  );
};

const modalBox = document.getElementById("modal");

const Modal = (props) => {
  return (
    <>
      {reactDom.createPortal(<Backdrop close={props.close} />, modalBox)}
      {reactDom.createPortal(<Overlay>{props.children}</Overlay>, modalBox)}
    </>
  );
};

export default Modal;
