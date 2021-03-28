import React, { Component } from "react";
import ModalUser from "../../components/Modal/ModalUser";
import { connect } from "react-redux";
import { getUserList, deleteUser } from "../../actions/Admin";
import RenderUserList from "./RenderUserList";
import Snackbar from "../../components/Snackbar";
import CircularIndeterminate from "../../components/CircularIndeterminate";
import ModalUpdateUser from "../../components/Modal/ModalUpdateUser";
import ModalDelete from "../../components/Modal/ModalDelete";
import findUser from "../../utils/findUser";

class UsersManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      userItem: {},
      nameModel: "userModal",
    };
  }
  deleteUser = (taiKhoan, accessToken) => {
    this.props.deleteUser(taiKhoan, accessToken);
  };
  renderUser = (user) => {
    let userItem = findUser(this.props.userList, user);
    // console.log(userItem);formValue.soDt = formValue.soDT;
    userItem.soDT = userItem.soDt;
    delete userItem.soDt;
    // console.log(userItem);
    this.setState({
      userItem: userItem,
    });
  };

  selectUser = (user) => {
    console.log(user);
    this.setState({ user: user });
  };
  componentDidMount() {
    this.props.getUserList("GP01", "vu", 1, 10);
  }
  handlePage = (page) => {
    this.props.getUserList("GP01", "vu", page, 10);
  };
  renderAction = () => {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-danger mx-2"
          onClick={() =>
            this.deleteUser(this.state.user, this.props.accessToken)
          }
          data-bs-dismiss="modal"
        >
          Xóa
        </button>
        <button
          type="button"
          className="btn btn-secondary "
          data-bs-dismiss="modal"
          handleCancel={() => this.setState({ currentUser: null })}
        >
          Hủy
        </button>
      </React.Fragment>
    );
  };
  renderContent = () => {
    if (!this.state.user) {
      <CircularIndeterminate />;
    }
    return (
      <p>
        Bạn có chắc muốn xóa tài khoản:
        <b>{this.state.user}</b>
      </p>
    );
  };
  render() {
    if (this.props.admin.loading === true) {
      return <CircularIndeterminate />;
    }
    // console.log("run user");
    return (
      <div className="container">
        <div className="card text-center">
          <div className="card-header">
            <div className="row justify-content-between">
              <div className="col-md-6">
                <h4 className="text-start font-weight-bold">
                  Danh sách Người Dùng
                </h4>
              </div>
              <div className="col-md-6 text-end">
                <button
                  className="btn btn-primary"
                  id="btnThem"
                  data-bs-toggle="modal"
                  data-bs-target={"#" + this.state.nameModel}
                >
                  Thêm Người Dùng
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên người dùng"
                    id="searchName"
                  />
                  <div className="input-group-prepend h-100">
                    <span className="input-group-text" id="btnTimNV">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <table className="table table-bordered table-hover myTable">
              <thead className="text-primary">
                <tr>
                  <th>STT</th>
                  <th className="nowrap">
                    <span className="mr-1">Tài Khoản</span>
                    <i className="fa fa-arrow-up mx-2" id="SapXepTang"></i>
                    <i className="fa fa-arrow-down" id="SapXepGiam"></i>
                  </th>
                  <th>Họ Tên</th>
                  <th>Email</th>
                  <th>Số Điện Thoại</th>
                  <th>
                    <em className="fa fa-cog"></em>
                  </th>
                </tr>
              </thead>
              <tbody>
                <RenderUserList
                  admin={this.props.admin}
                  selectUser={(user) => this.selectUser(user)}
                />
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <nav aria-label="Page navigation">
              <ul className="pagination col-3  mx-auto">
                <li className="page-item">
                  <button className="page-link" href="#">
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() =>
                      this.handlePage(this.props.admin.userList.currentPage - 1)
                    }
                  >
                    {this.props.admin.userList.currentPage - 1}
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() =>
                      this.handlePage(this.props.admin.userList.currentPage)
                    }
                  >
                    {this.props.admin.userList.currentPage}
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() =>
                      this.handlePage(this.props.admin.userList.currentPage + 1)
                    }
                  >
                    {this.props.admin.userList.currentPage + 1}
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <ModalUser title="Thêm Người Dùng" idModal={this.state.nameModel} />
        <ModalUpdateUser
          title="Cập Nhật Thông Tin"
          idModal="updateUserModal"
          inforUser={this.state.userItem}
        />
        <ModalDelete
          title="Delete User"
          content={this.renderContent()}
          action={this.renderAction()}
        />
      </div>
    );
  }
}
const mapMapToProps = (state) => {
  return {
    admin: state.adminReducers,
    accessToken: state.authReducers.currentUser.accessToken,
  };
};
export default connect(mapMapToProps, { getUserList, deleteUser })(
  UsersManagement
);
