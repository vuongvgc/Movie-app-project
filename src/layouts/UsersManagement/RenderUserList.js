import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions/User";
import ModalUser from "../../components/Modal/ModalUser";
import ModalDelete from "../../components/Modal/ModalDelete";
import CircularIndeterminate from "../../components/CircularIndeterminate";
import { deleteUser } from "../../actions/Admin";
import axios from "../../utils/axiosClient";
class RenderUserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  handleUser = (taiKhoan) => {
    // this.props.getUser({ taiKhoan: taiKhoan });
    axios
      .post("/QuanLyNguoiDung/ThongTinTaiKhoan", { taiKhoan: taiKhoan })
      .then((result) => {
        this.setState({
          currentUser: result.data.taiKhoan,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  deleteUser = (taiKhoan, accessToken) => {
    console.log(taiKhoan, accessToken);
  };
  renderAction = () => {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-danger mx-2"
          onClick={() =>
            this.deleteUser(
              this.state.currentUser.taiKhoan,
              this.props.accessToken
            )
          }
        >
          Delete
        </button>
        <button
          type="button"
          className="btn btn-secondary "
          data-bs-dismiss="modal"
          handleCancel={() => this.setState({ currentUser: null })}
        >
          Cancel
        </button>
      </React.Fragment>
    );
  };
  renderContent() {
    console.log(!this.state.currentUser);
    if (!this.state.currentUser) {
      <CircularIndeterminate />;
    }
    return (
      <p>
        Bạn có chắc muốn xóa tài khoản:
        <b>{this.state.currentUser}</b>
      </p>
    );
  }
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
              onClick={() => this.handleUser(user.taiKhoan)}
            >
              Cập Nhật
            </button>
            <button
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
              onClick={() => this.handleUser(user.taiKhoan)}
            >
              Xóa
            </button>
          </td>
          <ModalUser title="Cập Nhật Thông Tin" idModal={idModal} />
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
    userDetail: state.userReducers.userDetail,
    accessToken: state.authReducers.currentUser.accessToken,
  };
};
export default connect(maStateToProps, { getUser, deleteUser })(RenderUserList);
