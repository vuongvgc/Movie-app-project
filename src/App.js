import React, { lazy, Suspense } from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//Layout
import MainLayout from "./layouts/MainLayout";
import CheckoutLayout from "./layouts/CheckoutLayout";

import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";
import UsersManagement from "./layouts/UsersManagement";
import MoviesManagement from "./layouts/MoviesManagement";
import InformationUser from "./layouts/InformationUser";
import TicketBookingHistory from "./layouts/TicketBookingHistory";
//Page
// import HomePage from "./pages/HomePage";
// import TicketRoom from "./pages/TicketRoom";
// import MovieDetails from "./pages/MovieDetails";s
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import UserDetail from "./pages/UserDetail";

// Guards
import AdminRoute from "../src/guards/AdminRoute";
import UserRoute from "../src/guards/UserRoute";
import AuthRoute from "../src/guards/AuthRoute";
import TicketRoomRoute from "../src/guards/TicketRoomRoute"

// component loading
import Loading from "../src/components/Loading";

import { createBrowserHistory } from "history";

// lazy loading
const HomePage = lazy(() => import("./pages/HomePage"))
const MovieDetails = lazy(() => import("./pages/MovieDetails"))
const TicketRoom = lazy(() => import("./pages/TicketRoom"))
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"))
const UserDetail = lazy(() => ("./pages/UserDetail"));

let history = createBrowserHistory();

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router history={history}>
        {/* <Suspense fallback={<div>
        <img src="../img/carousel1.jpg" style={{ width: 500, height: 400 }} alt="..." />
      </div>}>
      </Suspense> */}
        <Switch>
          {/* Movie */}
          <Route exact path={["/", "/ticketRoom/:movieId", "/movie/:movieId"]}>
            <MainLayout>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/ticketRoom/:movieId" component={TicketRoom} />
                <Route path="/movie/:movieId" component={MovieDetails} />
              </Switch>
            </MainLayout>
          </Route>

          {/* CheckoutLayout  */}
          <Route exact path={["/checkout/:ticketRoomId"]}>
            <CheckoutLayout>
              <Switch>
                <TicketRoomRoute path="/checkout/:ticketRoomId" component={TicketRoom} />
              </Switch>
            </CheckoutLayout>
          </Route>
          {/* Auth */}
          <Route exact path={["/login", "/register"]}>
            <AuthLayout>
              <Switch>
                <AuthRoute path="/login" component={Login} />
                <AuthRoute path="/register" component={Register} />
              </Switch>
            </AuthLayout>
          </Route>
          {/* Admin */}
          <Route exact path={["/admin/users", "/admin/movies"]}>
            <AdminLayout>
              <Switch>
                <AdminRoute path="/admin/users" component={UsersManagement} />
                <AdminRoute path="/admin/movies" component={MoviesManagement} />
              </Switch>
            </AdminLayout>
          </Route>
          {/* User Detail */}
          <Route exact path={["/user/information", "/user/movie"]}>
            <UserDetail>
              <Switch>
                <UserRoute path="/user/information" component={InformationUser} />
                <UserRoute path="/user/movie" component={TicketBookingHistory} />
              </Switch>
            </UserDetail>
          </Route>
          <Redirect to="/" />
        </Switch>

      </Router>
    </Suspense>
  );
}

export default App;
