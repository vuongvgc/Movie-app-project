import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, updateUser } from "../../actions/User";
import InforUserForm from "../../components/InforUserForm";
import _ from "lodash";
import { ThumbUpSharp } from "@material-ui/icons";
class InformationUser extends Component {
  componentDidMount() {
    this.props.getUser({ taikhoan: this.props.currentUser });
  }
  onSubmit = (formValue) => {
    // console.log(formValue, this.props.accessToken);
    this.props.updateUser(formValue, this.props.accessToken);
  };
  render() {
    console.log(this.props.userDetail);
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
    userDetail: state.userReducers.userDetail,
    currentUser: state.authReducers.currentUser.taiKhoan,
    accessToken: state.authReducers.currentUser.accessToken,
  };
};
export default connect(mapStateToProps, { getUser, updateUser })(
  InformationUser
);
