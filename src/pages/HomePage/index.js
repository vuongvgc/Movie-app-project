import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Carousel from "../../../src/components/Carousel/index";
import Header from "../../components/Header";
// import TabTheaters from "../../components/TabTheater";
import TopSearch from "../../components/TopSearch";
import Footer from "../../components/Footer";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}

        <Carousel />
        <TopSearch />
        {/* <TabTheaters /> */}
        <Footer />
      </div>
    );
  }
}
