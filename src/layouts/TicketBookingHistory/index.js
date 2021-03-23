import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, updateUser } from "../../actions/User";
import InforUserForm from "../../components/InforUserForm";
import _ from "lodash";
class TicketBookingHistory extends Component {
  componentDidMount() {
    this.props.getUser({ taikhoan: this.props.currentUser });
    console.log(this.props.bookingList);
  }
  onSubmit = (formValue) => {
    // console.log(formValue, this.props.accessToken);
    formValue.soDt = formValue.soDT;
    delete formValue.soDT;
    console.log(formValue);
    this.props.updateUser(formValue, this.props.accessToken);
  };
  render() {
    console.log(this.props.userDetail.thongTinDatVe);
    if (!this.props.userDetail) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container-fluid">
        <InforUserForm
          initialValues={_.pick(
            this.props.userDetail,
            "taiKhoan",
            "matKhau",
            "hoTen",
            "email",
            "soDT"
          )}
          updateInfor={false}
          onSubmit={this.onSubmit}
          accessToken={this.props.accessToken}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.authReducers.currentUser.taiKhoan,
    bookingList: state.userReducers.userDetail.thongTinDatVe,
  };
};
export default connect(mapStateToProps, { getUser, updateUser })(
  TicketBookingHistory
);
