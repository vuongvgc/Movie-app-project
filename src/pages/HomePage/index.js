import React, { Component, Suspense, lazy } from "react";
import { NavLink } from "react-router-dom";
import Carousel from "../../../src/components/Carousel/index";
import TopSearch from "../../components/TopSearch";
import TabTheaters from "../../components/TabTheater";

// const CarouselLazy = React.lazy(() => import('../../../src/components/Carousel/index'));


// const TopSearchLazy = React.lazy(() => import('../../components/TopSearch'));


// const TabTheaterLazy = React.lazy(() => import('../../components/TabTheater'));


export default class HomePage extends Component {
  render() {
    return (
      <div >
        <Carousel />
        <TopSearch />
        <TabTheaters />

        {/* <TabTheaters2 /> */}

      </div>
    );
  }
}
