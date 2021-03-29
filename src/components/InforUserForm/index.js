import React from "react";
import { Field, reduxForm } from "redux-form";
import { NavLink } from "react-router-dom";
import renderInput from "../Form/renderInput";
import renderInputPassword from "../Form/renderInputPassword";
import Validate from "./Validate";
import axios from "../../utils/axiosClient";
import renderSelectInput from "../Form/renderSelectInput";

class InforUserForm extends React.Component {
  onSubmit = (formValue) => {
    // console.log(formValue);
    delete formValue.nhapLaiMatKhau;
    this.props.onSubmit(formValue);
  };
  renderAdmin = (admin) => {
    if (admin) {
      return (
        <React.Fragment>
          <Field
            name="maLoaiNguoiDung"
            component={renderSelectInput}
            label="Mã loại người dùng"
            value={["KhachHang", "QuanTri"]}
          />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <button className="btn btn-primary m-2">Đăng Ký</button>
        <NavLink to="/login">
          <button id="btnDong" type="button" class="btn btn-primary">
            Đăng Nhập
          </button>
        </NavLink>
      </React.Fragment>
    );
  };
  render() {
    console.log("Form", this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="taiKhoan"
          component={renderInput}
          label="Tài khoản"
          isUpdate={{ disabled: true }}
        />
        <Field
          name="matKhau"
          component={renderInputPassword}
          label="Mật khẩu"
        />
        <Field
          name="nhapLaiMatKhau"
          component={renderInputPassword}
          label="Nhập lại mật khẩu"
        />
        <Field name="hoTen" component={renderInput} label="Họ tên" />
        <Field name="email" component={renderInput} label="Email" />
        <Field name="soDT" component={renderInput} label="Số điện thoại" />
        {this.props.wrongAuth ? (
          <div className="alert alert-danger">{this.props.wrongAuth}</div>
        ) : (
          ""
        )}
        {this.renderAdmin(this.props.admin)}
      </form>
    );
  }
}
export default reduxForm({
  form: "InforUserForm",
  validate: Validate,
})(InforUserForm);

// "taiKhoan": "vuong",
//   "matKhau": "1996",
//   "email": "vuong@gmail.com",
//   "soDt": "0789200396",
//   "maNhom": "GP10",
//   "maLoaiNguoiDung": "string",
//   "hoTen": "Vuong"
