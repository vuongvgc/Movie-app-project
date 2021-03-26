import React, { Component } from "react";
import Modal from "../../components/Modal";
import { connect } from "react-redux";
import { getUserList } from "../../actions/Admin";
import RenderUserList from "./RenderUserList";
class UsersManagement extends Component {
  componentDidMount() {
    this.props.getUserList("GP01", "a", 1, 10);
  }
  handlePage = (page) => {
    this.props.getUserList("GP01", "a", page, 10);
  };
  render() {
    if (this.props.admin.loading === true) {
      return <p>Loading...</p>;
    }
    console.log("run user");
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
                  data-bs-target="#myModal"
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
                <RenderUserList admin={this.props.admin} />
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
        <Modal />
      </div>
    );
  }
}
const mapMapToProps = (state) => {
  return {
    admin: state.adminReducers,
  };
};
export default connect(mapMapToProps, { getUserList })(UsersManagement);
