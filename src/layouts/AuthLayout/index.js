import React, { Component } from "react";
import Header from "../../components/Header";
import "./style.css";
export default class AuthLayout extends Component {
  render() {
    return (
      <div className="authLayout">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
