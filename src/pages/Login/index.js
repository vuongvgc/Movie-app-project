import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/Auth";
import LoginForm from "../../components/LoginForm";
import "./style.css";
class Login extends Component {
  onSubmit = (formValue) => {
    this.props.login(formValue);
  };
  render() {
    return (
      <div>
        <h3>Log In</h3>
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
export default connect(null, { login: login })(Login);
