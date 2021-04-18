import React, { Component, lazy, Suspense } from "react";
// import { NavLink } from "react-router-dom";
// import Carousel from "../../../src/components/Carousel/index";
// import TopSearch from "../../components/TopSearch";
// import TabTheaters from "../../components/TabTheater";
import Loading from "../../components/Loading";
// import Test from "../../components/TabTheater/index4";
// import TabTheaters2 from "../../components/TabTheater/index2";

const CarouselLazy = lazy(() =>
  import("../../../src/components/Carousel/index")
);

const TopSearchLazy = lazy(() => import("../../components/TopSearch"));

const TabTheaterLazy = lazy(() => import("../../components/TabTheater"));

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loading />}>
          <CarouselLazy />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <TopSearchLazy />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <TabTheaterLazy />
        </Suspense>
        {/* <Test /> */}
        {/* <TabTheaters2 /> */}

        {/* <TabTheaters2 /> */}
      </div>
    );
  }
}
