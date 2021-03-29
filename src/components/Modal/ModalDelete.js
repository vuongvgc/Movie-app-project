import React from "react";
import ReactDOM from "react-dom";
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div class="modal fade" id="deleteModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {props.title}
            </h5>
          </div>
          <div class="modal-body">{props.content}</div>
          <div class="modal-footer">{props.action}</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Modal;
