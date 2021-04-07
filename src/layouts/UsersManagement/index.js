import React, { Component } from "react";
import ModalUser from "../../components/Modal/ModalUser";
import { connect } from "react-redux";
import { getUserList, deleteUser } from "../../actions/Admin";
import RenderUserList from "./RenderUserList";
import Snackbar from "../../components/Snackbar";
import CircularIndeterminate from "../../components/CircularIndeterminate";
// import ModalUpdateUser from "../../components/Modal/ModalUpdateUser";
import ModalUpdate from "../../components/Modal/ModalUpdate";
import ModalDelete from "../../components/Modal/ModalDelete";
import findUser from "../../utils/findUser";
import InforUserForm from "../../components/InforUserForm";
import _ from "lodash";
import { updateUser } from "../../actions/User";
import RenderChangePage from "./RenderChangePage";
class UsersManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      userItem: {},
      nameModel: "userModal",
      search: "",
    };
  }
  deleteUser = (taiKhoan, accessToken) => {
    this.props.deleteUser(taiKhoan, accessToken);
    this.handlePage(1);
  };
  renderUser = (user) => {
    // console.log(user);
    let userItem = findUser(this.props.admin.userList.items, user);
    // console.log(userItem);formValue.soDt = formValue.soDT;
    userItem.soDT = userItem.soDt;
    delete userItem.soDt;
    // console.log(userItem);
    this.setState({
      userItem: userItem,
    });
  };

  selectUser = (user) => {
    // console.log(user);
    this.setState({ user: user });
  };
  componentDidMount() {
    this.props.getUserList("GP01", "a", 1, 10);
  }
  handlePage = (page) => {
    this.props.getUserList("GP01", "a", page, 10);
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
  renderActionUpdate = () => {
    return (
      <React.Fragment>
        <div className="modal-footer">
          <button
            className="btn btn-primary m-2"
            onClick={() => this.onSubmit(this.props.inforUserform.values)}
          >
            Cập nhật
          </button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Đóng
          </button>
        </div>
      </React.Fragment>
    );
  };
  renderContentUpdate = () => {
    // console.log(this.state.userItem);
    if (!this.state.user) {
      <CircularIndeterminate />;
    }
    return (
      <React.Fragment>
        <InforUserForm
          admin={true}
          onSubmit={this.onSubmit}
          initialValues={_.pick(
            this.state.userItem,
            "taiKhoan",
            "matKhau",
            "hoTen",
            "email",
            "soDT",
            "maLoaiNguoiDung"
          )}
        />
      </React.Fragment>
    );
  };
  onSubmit = (formValue) => {
    // console.log(formValue, this.props.accessToken);
    formValue.soDt = formValue.soDT;
    delete formValue.soDT;
    // console.log(formValue);
    this.props.updateUser(
      {
        ...formValue,
        maNhom: this.props.maNhom,
      },
      this.props.accessToken
    );
  };
  searchUser = (value) => {
    this.props.getUserList("GP01", value, 1, 10);
  };
  render() {
    if (this.props.admin.loading === true) {
      return <CircularIndeterminate />;
    }
    // console.log("run user");
    return (
      <div className="ccontainer-fluid">
        <div className="card text-center mx-0 px-0">
          <div className="card-header">
            <div className="row justify-content-between">
              <div className="col-12 col-md-5">
                <h4 className="text-start font-weight-bold">
                  Danh sách Người Dùng
                </h4>
              </div>
              <div className="col-md-6 text-end">
                <button
                  className="btn btn-primary"
                  id="btnThem"
                  data-bs-toggle="modal"
                  data-bs-target="#userModal"
                >
                  Thêm Người Dùng
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Tên người dùng"
                    value={this.state.search}
                    onChange={(event) =>
                      this.setState({ search: event.target.value })
                    }
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={() => this.searchUser(this.state.search)}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead className="text-primary">
                  <tr>
                    <th>STT</th>
                    <th className="nowrap col-1">
                      <span className="mr-1">Tài Khoản</span>
                    </th>
                    <th className="col-3">Họ Tên</th>
                    <th className="col-3">Email</th>
                    <th className="col-2">Số Điện Thoại</th>
                    <th className="col-2">
                      <em className="fa fa-cog"></em>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <RenderUserList
                    admin={this.props.admin}
                    selectUser={(user) => this.selectUser(user)}
                    renderUser={(user) => this.renderUser(user)}
                  />
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer">
            <RenderChangePage
              adminUser={this.props.admin}
              handlePage={this.handlePage}
            />
          </div>
        </div>
        <ModalUser title="Thêm Người Dùng" idModal="userModal" />
        <ModalUpdate
          title="Update User"
          content={this.renderContentUpdate()}
          action={this.renderActionUpdate()}
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
    maNhom: state.authReducers.currentUser.maNhom,
    inforUserform: state.form.InforUserForm,
  };
};
export default connect(mapMapToProps, { getUserList, deleteUser, updateUser })(
  UsersManagement
);
