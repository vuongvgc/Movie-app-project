import React from "react";
import { Field, reduxForm } from "redux-form";
import { NavLink } from "react-router-dom";
class LoginForm extends React.Component {
  renderError({ error, touched }) {
    // console.log("run error" + error + touched);
    if (error && touched) {
      return <div className="alert alert-danger">{error}</div>;
    }
  }
  renderInput = ({ input, label, meta }) => {
    // console.log(meta);
    const className = meta.error && meta.touched ? "text-danger" : "";
    return (
      <div className="form-group">
        <label className={className}>{label}</label>
        <input className="form-control" {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  renderInputPassword = ({ input, label, meta }) => {
    // console.log(meta);
    const className = meta.error && meta.touched ? "text-danger" : "";
    return (
      <div className="form-group">
        <label className={className}>{label}</label>
        <input
          type="password"
          className="form-control"
          {...input}
          autoComplete="off"
        />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValue) => {
    // console.log(formValue);
    // console.log(this.props.createStream());
    this.props.onSubmit(formValue);
  };
  render() {
    // console.log(this.props)
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="taiKhoan" component={this.renderInput} label="Tài Khoản" />
        <Field
          name="matKhau"
          component={this.renderInputPassword}
          label="Mật Khẩu"
        />
        <NavLink to="/">
          <button className="btn btn-primary m-2">Đăng Nhập</button>
        </NavLink>
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
