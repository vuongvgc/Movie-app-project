import React from "react";
import { connect } from "react-redux";
import ModalUpdateUser from "../../components/Modal/ModalUpdateUser";
import ModalDelete from "../../components/Modal/ModalDelete";
import CircularIndeterminate from "../../components/CircularIndeterminate";
import { deleteUser } from "../../actions/Admin";
import findUser from "../../utils/findUser";
class RenderUserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userItem: null,
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
    console.log(userItem);
    this.setState({
      userItem: userItem,
    });
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
  selectUser = (user) => {
    this.setState({ user: user });
  };
  render() {
    //   console.log(props.admin);
    const idModal = "updateUserModal";
    return this.props.admin.userList.items.map((user, index) => {
      return (
        <tr key={user.taiKhoan}>
          <td>{index + 1}</td>
          <td>{user.taiKhoan}</td>
          <td>{user.hoTen}</td>
          <td>{user.email}</td>
          <td>{user.soDt}</td>
          <td>
            <button
              className="btn btn-success mx-1"
              data-bs-toggle="modal"
              data-bs-target={"#" + idModal}
              onClick={() => this.renderUser(user.taiKhoan)}
            >
              Cập Nhật
            </button>
            <button
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
              onClick={() => this.selectUser(user.taiKhoan)}
            >
              Xóa
            </button>
          </td>
          <ModalUpdateUser
            title="Cập Nhật Thông Tin"
            idModal={idModal}
            inforUser={this.state.userItem}
          />
          <ModalDelete
            title="Delete User"
            content={this.renderContent()}
            action={this.renderAction()}
          />
        </tr>
      );
    });
  }
}
const maStateToProps = (state) => {
  return {
    accessToken: state.authReducers.currentUser.accessToken,
    userList: state.adminReducers.userList.items,
  };
};
export default connect(maStateToProps, { deleteUser })(RenderUserList);
