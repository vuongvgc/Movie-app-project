import React from "react";
import { Field, reduxForm } from "redux-form";
import { NavLink } from "react-router-dom";
import renderInput from "../Form/renderInput";
import renderInputPassword from "../Form/renderInputPassword";
import Validate from "./Validate";
class RegisterForm extends React.Component {
  onSubmit = (formValue) => {
    // console.log(formValue);
    // console.log(this.props.createStream());
    this.props.onSubmit(formValue);
  };
  render() {
    // console.log(this.props)
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="taiKhoan" component={renderInput} label="Tài khoản" />
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
        <Field
          name="soDienThoai"
          component={renderInput}
          label="Số điện thoại"
        />
        {this.props.wrongAuth ? (
          <div className="alert alert-danger">{this.props.wrongAuth}</div>
        ) : (
          ""
        )}
        <button className="btn btn-primary m-2">Đăng Ký</button>
        <NavLink to="/login">
          <button className="btn btn-primary m-2">Đăng Nhập</button>
        </NavLink>
      </form>
    );
  }
}
export default reduxForm({
  form: "registerForm",
  validate: Validate,
})(RegisterForm);
