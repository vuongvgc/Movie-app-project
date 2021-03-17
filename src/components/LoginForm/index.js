import React from "react";
import { Field, reduxForm } from "redux-form";
import { NavLink } from "react-router-dom";
import renderInput from "../Form/renderInput";
import renderInputPassword from "../Form/renderInputPassword";
class LoginForm extends React.Component {
  onSubmit = (formValue) => {
    // console.log(formValue);
    // console.log(this.props.createStream());
    this.props.onSubmit(formValue);
  };
  render() {
    // console.log(this.props)
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="taiKhoan" component={renderInput} label="Tài Khoản" />
        <Field
          name="matKhau"
          component={renderInputPassword}
          label="Mật Khẩu"
        />
        {this.props.wrongAuth ? (
          <div className="alert alert-danger">{this.props.wrongAuth}</div>
        ) : (
          ""
        )}
        <button className="btn btn-primary m-2">Đăng Nhập</button>
        <NavLink to="/register">
          <button className="btn btn-primary m-2">Đăng Ký</button>
        </NavLink>
      </form>
    );
  }
}
const validate = (formValues) => {
  // console.log(formValues);
  let error = {};
  if (!formValues.taiKhoan) {
    error.taiKhoan = "Bạn phải nhập tài khoản";
  }
  if (!formValues.matKhau) {
    error.matKhau = "Bạn phải nhập mật khẩu";
  }
  return error;
};
export default reduxForm({
  form: "loginForm",
  validate: validate,
})(LoginForm);
