import React, { Component, lazy, Suspense } from "react";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

const HeaderLazy = lazy(() => import("../../components/Header"));
const FooterLazy = lazy(() => import("../../components/Footer"));

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<Loading />}>
          <HeaderLazy />
        </Suspense>
        {/* MainLayout */}
        {this.props.children}
        <Suspense fallback={<Loading />}>
          <FooterLazy />
        </Suspense>
      </div>
    );
  }
}
