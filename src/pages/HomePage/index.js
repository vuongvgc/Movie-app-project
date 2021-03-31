import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Carousel from "../../../src/components/Carousel/index";
import Header from "../../components/Header";
import TabTheaters from "../../components/TabTheater";
import TopSearch from "../../components/TopSearch";
import Footer from "../../components/Footer";
// import TabTheaters2 from "../../components/TabTheater/index2";

export default class HomePage extends Component {
  render() {
    return (
      <div >
        <Carousel />
        <TopSearch />
        <TabTheaters />
      </div>
    );
  }
}
