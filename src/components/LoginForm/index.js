import React from "react";
import { Field, reduxForm } from "redux-form";
class LoginForm extends React.Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return <div className="alert alert-danger">{error}</div>;
    }
  }
  renderInput = ({ input, label, meta }) => {
    // console.log(propsForm)
    const className = meta.error && meta.touched ? "text-danger" : "";
    return (
      <div className="form-group">
        <label className={className}>{label}</label>
        <input className="form-control" {...input} autoComplete="off" />
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
        <Field name="matKhau" component={this.renderInput} label="Mật Khẩu" />
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
const validate = (formValues) => {
  let error = {};
  if (!formValues.taiKhoan) {
    error.title = "You must enter tài khoản";
  }
  if (!formValues.matKhau) {
    error.description = "You must enter mật khẩu";
  }
  return error;
};
export default reduxForm({
  form: "LoginForm",
  validate: validate,
})(LoginForm);
