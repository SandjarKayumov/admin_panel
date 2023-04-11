import React from "react";
import "./Modal.scss";

const Modal = ({ children, handleModal }) => {
  return (
    <div className="modal">
      <div className="modal__overlay" onClick={handleModal}></div>
      <div className="modal__container">{children}</div>
    </div>
  );
};

export default Modal;
