import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

/* <AdminRoute exact path="/admin/user" component={UsersManagement} /> */
// higher order component: là 1 function hoặc component nhận vào 1 tham số là 1 component khác
function AdminRoute(props) {
  const { component: Component, currentUser, ...routerProps } = props;
  // routerProps => {exact, path}
  return (
    <Route
      {...routerProps}
      render={(props) => {
        // Trước khi return về component sẽ kiểm tra xem đã đăng nhập hay chưa và maLoaiNguoiDung có hợp lệ hay không
        if (currentUser) {
          // Đã đăng nhập
          if (currentUser.maLoaiNguoiDung === "QuanTri") {
            // Là QuanTri => được phép truy cập
            return <Component {...props} />;
          }
          // Đã đăng nhập nhưng k phải là QuanTri
          return <Redirect to="/" />;
        }
        // Chưa đăng nhập
        return <Redirect to="/login" />;
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.authReducers.currentUser,
  };
};

export default connect(mapStateToProps)(AdminRoute);
