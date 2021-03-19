import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions/User";
import InforUserForm from "../../components/InforUserForm";
import _ from "lodash";
class InformationUser extends Component {
  componentDidMount() {
    this.props.getUser({ taikhoan: "vuongcybersort" });
  }
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
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userDetail: state.userReducers.userDetail,
  };
};
export default connect(mapStateToProps, { getUser })(InformationUser);
