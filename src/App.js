import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
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
import HomePage from "./pages/HomePage";
import TicketRoom from "./pages/TicketRoom";
import MovieDetails from "./pages/MovieDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDetail from "./pages/UserDetail";
import { createBrowserHistory } from "history";
// Guards
import AdminRoute from "../src/guards/AdminRoute";
import UserRoute from "../src/guards/UserRoute";
import AuthRoute from "../src/guards/AuthRoute";
let history = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={history}>
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
              <Route path="/checkout/:ticketRoomId" component={TicketRoom} />
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
    </BrowserRouter>
  );
}

export default App;
