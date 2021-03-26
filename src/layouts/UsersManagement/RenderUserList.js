import React from "react";

const RenderUserList = (props) => {
  //   console.log(props.admin);
  return props.admin.userList.items.map((user, index) => {
    return (
      <tr key={user.taiKhoan}>
        <td>{index + 1}</td>
        <td>{user.taiKhoan}</td>
        <td>{user.hoTen}</td>
        <td>{user.email}</td>
        <td>{user.soDt}</td>
        <td>
          <button className="btn btn-success mx-1">Cập Nhật</button>
          <button className="btn btn-danger">Xóa</button>
        </td>
      </tr>
    );
  });
};

export default RenderUserList;
