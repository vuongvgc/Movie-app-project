import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import InforUserForm from "../InforUserForm/";
import { connect } from "react-redux";
import { updateUser } from "../../actions/User";
import _ from "lodash";
class ModalUpdateUser extends React.Component {
  onSubmit = (formValue) => {
    // console.log(formValue, this.props.accessToken);
    formValue.soDt = formValue.soDT;
    delete formValue.soDT;
    // console.log(formValue);
    this.props.updateUser(
      {
        ...formValue,
        maNhom: this.props.maNhom,
      },
      this.props.accessToken
    );
  };
  render() {
    return ReactDOM.createPortal(
      <div className="modal fade" id={this.props.idModal}>
        <div className="modal-dialog">
          <div className="modal-content">
            <header className="head-form mb-0 text-center m-2">
              <h3 id="header-title">{this.props.title}</h3>
            </header>
            <div className="modal-body">
              <InforUserForm
                admin={true}
                onSubmit={this.onSubmit}
                initialValues={_.pick(
                  this.props.inforUser,
                  "taiKhoan",
                  "matKhau",
                  "hoTen",
                  "email",
                  "soDT",
                  "maLoaiNguoiDung"
                )}
              />
            </div>
          </div>
        </div>
      </div>,
      document.querySelector("#modal")
    );
  }
}
const mapStateToProps = (state) => {
  return {
    accessToken: state.authReducers.currentUser.accessToken,
    maNhom: state.authReducers.currentUser.maNhom,
  };
};
export default connect(mapStateToProps, { updateUser })(ModalUpdateUser);
