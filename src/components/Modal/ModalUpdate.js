import React from "react";
import ReactDOM from "react-dom";
const ModalUpdate = (props) => {
  return ReactDOM.createPortal(
    <div className="modal fade" id="updateModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 id="header-title">{props.title}</h3>
          </div>
          <div className="modal-body">{props.content}</div>
          <div className="modal-footer">{props.action}</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default ModalUpdate;
