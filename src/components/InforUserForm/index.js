import React from "react";
import { Field, reduxForm } from "redux-form";
import { NavLink } from "react-router-dom";
import renderInput from "../Form/renderInput";
import renderInputPassword from "../Form/renderInputPassword";
import Validate from "./Validate";
import axios from "../../utils/axiosClient";
class InforUserForm extends React.Component {
  onSubmit = (formValue) => {
    // console.log(formValue);
    delete formValue.nhapLaiMatKhau;
    this.props.onSubmit(formValue);
  };
  componentDidUpdate(prevProps) {
    if (prevProps.isUpdate !== this.props.isUpdate) {
      let isUpdate = this.props.isUpdate;
    }
  }
  render() {
    // console.log(this.props)
    let isUpdate = this.props.isUpdate;
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
          isUpdate={{ disabled: isUpdate }}
        />
        <Field
          name="nhapLaiMatKhau"
          component={renderInputPassword}
          label="Nhập lại mật khẩu"
          isUpdate={{ disabled: isUpdate }}
        />
        <Field
          name="hoTen"
          component={renderInput}
          label="Họ tên"
          isUpdate={{ disabled: isUpdate }}
        />
        <Field
          name="email"
          component={renderInput}
          label="Email"
          isUpdate={{ disabled: isUpdate }}
        />
        <Field
          name="soDT"
          component={renderInput}
          label="Số điện thoại"
          isUpdate={{ disabled: isUpdate }}
        />
        {this.props.wrongAuth ? (
          <div className="alert alert-danger">{this.props.wrongAuth}</div>
        ) : (
          ""
        )}
        <NavLink to="/">
          <button className="btn btn-primary m-2">Cập nhập thông tin</button>
        </NavLink>
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
