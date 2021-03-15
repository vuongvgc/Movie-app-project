import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/Auth";
import RegisterForm from "../../components/RegisterForm";
import "./style.css";
class Login extends Component {
  onSubmit = (formValue) => {
    this.props.register(formValue);
  };
  render() {
    // console.log(this.props.currentUser);
    return (
      <div>
        <h3>Đăng Ký</h3>
        <RegisterForm onSubmit={this.onSubmit} wrongAuth={this.props.error} />
      </div>
    );
  }
}
const mapStateToProp = (state) => {
  return {
    currentUser: state.authReducers.currentUser,
    error: state.authReducers.error,
  };
};
export default connect(mapStateToProp, { register: register })(Login);
