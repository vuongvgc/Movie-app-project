import React, { Component } from "react";

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        MainLayout
        {this.props.children}
      </div>
    );
  }
}
