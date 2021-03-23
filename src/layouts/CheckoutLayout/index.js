import React, { Component } from "react";


export default class AuthLayout extends Component {
  render() {
    return (
      <>
          
        {this.props.children}
      </>
    );
  }
}
