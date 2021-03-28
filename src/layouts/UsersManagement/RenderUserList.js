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
      user: null,
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
    // const accessTokenTest ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW45NyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlF1YW5UcmkiLCJuYmYiOjE2MTY5MDg3MTcsImV4cCI6MTYxNjkxMjMxN30.oa7r23JrJbaJjs9t4z34Io9RXdYFh_bOq8AfWcnn7sQ";
    this.props.deleteUser({ TaiKhoan: taiKhoan }, accessToken);
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
              onClick={() => this.handleUser(user.taiKhoan)}
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
