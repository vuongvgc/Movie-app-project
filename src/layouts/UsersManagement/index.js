import React, { Component } from "react";
import ModalUser from "../../components/Modal/ModalUser";
import { connect } from "react-redux";
import { getUserList, deleteUser, searchUsersList } from "../../actions/Admin";
import RenderUserList from "./RenderUserList";
import SnackBar from "../../components/Snackbar";
import ModalUpdate from "../../components/Modal/ModalUpdate";
import ModalDelete from "../../components/Modal/ModalDelete";
import findUser from "../../utils/findUser";
import InforUserForm from "../../components/InforUserForm";
import _ from "lodash";
import { updateAdminUser } from "../../actions/Admin";
import RenderChangePage from "./RenderChangePage";
import Loading from "../../components/Loading";

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
    this.props.getUserList();
  }
  handlePage = (page) => {
    if (this.state.search === "") {
      this.props.getUserList(this.props.maNhom, page);
    } else {
      this.props.searchUsersList(this.props.maNhom, this.state.search, page);
    }
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
      <Loading />;
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
          <button
            type="button"
            className="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Đóng
          </button>
        </div>
      </React.Fragment>
    );
  };
  renderContentUpdate = () => {
    // console.log(this.state.userItem);
    if (!this.state.user) {
      <Loading />;
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
    this.props.updateAdminUser(
      {
        ...formValue,
        maNhom: this.props.maNhom,
      },
      this.props.accessToken,
      formValue.taiKhoan
    );
  };
  render() {
    if (this.props.admin.loading === true) {
      return <Loading />;
    }
    // console.log("run user");
    return (
      <div className="container-fluid">
        <div className="card text-center mx-0 px-0">
          <div className="card-header">
            <div className="row justify-content-between">
              <div className="col-12 col-md-5">
                <h4 className="text-start font-weight-bold">
                  Danh sách Người Dùng
                </h4>
              </div>
              <div className="col-12 col-md-3 text-start text-md-end">
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
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên người dùng"
                    value={this.state.search}
                    onChange={(event) =>
                      this.setState({ search: event.target.value })
                    }
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={() => this.handlePage()}
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered table-hover table-movie">
                <thead className="text-primary">
                  <tr>
                    <th>STT</th>
                    <th className="col-1">
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
        <SnackBar
          isOpen={this.props.admin.updateUser.success}
          title="Cập nhật thành công"
          severity="success"
        />
        <SnackBar
          isOpen={this.props.admin.updateUser.error}
          title="Cập nhật thất bại"
          severity="warning"
        />

        <SnackBar
          isOpen={this.props.admin.addUser.success}
          title="Thêm người dùng thành công"
          severity="success"
        />
        <SnackBar
          isOpen={this.props.admin.addUser.error}
          title={this.props.admin.addUser.error}
          severity="warning"
        />
        <SnackBar
          isOpen={this.props.admin.deleteUser.success}
          title="Xóa người dùng thành công"
          severity="success"
        />
        <SnackBar
          isOpen={this.props.admin.deleteUser.error}
          title={this.props.admin.deleteUser.error}
          severity="warning"
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
export default connect(mapMapToProps, {
  getUserList,
  deleteUser,
  updateAdminUser,
  searchUsersList,
})(UsersManagement);
