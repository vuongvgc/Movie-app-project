import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* MainLayout */}
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
