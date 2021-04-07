import React from "react";
import CircularIndeterminate from "../../components/CircularIndeterminate";
class RenderUserList extends React.PureComponent {
  render() {
    if (this.props.admin.loading) {
      return <CircularIndeterminate />;
    }
    return this.props.admin.userList.items.map((user, index) => {
      return (
        <tr key={user.taiKhoan}>
          <td>{index + 1}</td>
          <td>{user.taiKhoan}</td>
          <td>{user.hoTen}</td>
          <td>{user.email}</td>
          <td>{user.soDt}</td>
          <td className="d-grid gap-2 d-block">
            <button
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#updateModal"
              onClick={() => this.props.renderUser(user.taiKhoan)}
            >
              Cập Nhật
            </button>
            <button
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
              onClick={() => this.props.selectUser(user.taiKhoan)}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  }
}

export default RenderUserList;
