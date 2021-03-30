import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

/* <AdminRoute exact path="/admin/user" component={UsersManagement} /> */
// higher order component: là 1 function hoặc component nhận vào 1 tham số là 1 component khác
function AuthRoute(props) {
  const { component: Component, currentUser, ...routerProps } = props;
  // routerProps => {exact, path}
  return (
    <Route
      {...routerProps}
      render={(props) => {
        // Trước khi return về component sẽ kiểm tra xem đã đăng nhập hay chưa và maLoaiNguoiDung có hợp lệ hay không
        if (currentUser) {
          // Đã đăng nhập
          return <Redirect to="/user/information" />;
        }
        // Chưa đăng nhập
        return <Component {...props} />;
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.authReducers.currentUser,
  };
};

export default connect(mapStateToProps)(AuthRoute);
