import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, updateUser } from "../../actions/User";
import InforUserForm from "../../components/InforUserForm";
import _ from "lodash";
import SnackBar from "../../components/Snackbar";
import Loading from "../../components/Loading";
class InformationUser extends Component {
  componentDidMount() {
    this.props.getUser({ taikhoan: this.props.currentUser });
  }
  onSubmit = (formValue) => {
    // console.log(formValue, this.props.accessToken);
    formValue.soDt = formValue.soDT;
    delete formValue.soDT;
    // console.log(
    //   formValue,
    //   this.props.accessToken,
    //   this.props.maNhom,
    //   this.props.maLoaiNguoiDung
    // );
    // console.log(formValue);
    this.props.updateUser(
      {
        ...formValue,
        maNhom: this.props.maNhom,
        maLoaiNguoiDung: this.props.maLoaiNguoiDung,
      },
      this.props.accessToken
    );
  };
  render() {
    // console.log(this.props.userDetail);
    if (!this.props.userDetail) {
      return <Loading />;
    }
    return (
      <div className="container-fluid">
        <h2 className="text-center">Thông tin cá nhân</h2>
        <InforUserForm
          initialValues={_.pick(
            this.props.userDetail,
            "taiKhoan",
            "matKhau",
            "hoTen",
            "email",
            "soDT"
          )}
          updateInfor={false}
          onSubmit={this.onSubmit}
          accessToken={this.props.accessToken}
        />
        <SnackBar
          isOpen={this.props.userReducers.updateUser.success}
          title="Cập nhật thông tin thành công"
          severity="success"
        />
        <SnackBar
          isOpen={this.props.userReducers.updateUser.error}
          title="Cập nhật không thành công"
          severity="warning"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userDetail: state.userReducers.userDetail,
    currentUser: state.authReducers.currentUser.taiKhoan,
    maNhom: state.authReducers.currentUser.maNhom,
    maLoaiNguoiDung: state.authReducers.currentUser.maLoaiNguoiDung,
    accessToken: state.authReducers.currentUser.accessToken,
    userReducers: state.userReducers,
  };
};
export default connect(mapStateToProps, { getUser, updateUser })(
  InformationUser
);
