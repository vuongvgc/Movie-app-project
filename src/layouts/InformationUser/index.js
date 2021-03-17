import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions/User";
class InformationUser extends Component {
  render() {
    this.props.getUser({ taikhoan: "vuongcybersort" });
    return <div>InformationUser</div>;
  }
}
export default connect(null, { getUser })(InformationUser);
