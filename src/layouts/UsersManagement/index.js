import React, { Component } from "react";
import Modal from "../../components/Modal";
export default class UsersManagement extends Component {
  render() {
    return (
      <div class="container">
        <div class="card text-center">
          <div class="card-header myCardHeader">
            <div class="row justify-content-between">
              <div class="col-md-6">
                <h4 class="text-start font-weight-bold">
                  Danh sách Người Dùng
                </h4>
              </div>
              <div class="col-md-6 text-end">
                <button
                  class="btn btn-primary"
                  id="btnThem"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  Thêm Người Dùng
                </button>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="row mb-3">
              <div class="col">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Tên người dùng"
                    id="searchName"
                  />
                  <div class="input-group-prepend h-100">
                    <span class="input-group-text" id="btnTimNV">
                      <i class="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <table class="table table-bordered table-hover myTable">
              <thead class="text-primary">
                <tr>
                  <th>STT</th>
                  <th class="nowrap">
                    <span class="mr-1">Tài Khoản</span>
                    <i class="fa fa-arrow-up mx-2" id="SapXepTang"></i>
                    <i class="fa fa-arrow-down" id="SapXepGiam"></i>
                  </th>
                  <th>Họ Tên</th>
                  <th>Email</th>
                  <th>Số Điện Thoại</th>
                  <th>
                    <em class="fa fa-cog"></em>
                  </th>
                </tr>
              </thead>
              <tbody id="tableDanhSach"></tbody>
            </table>
          </div>
          <div class="card-footer myCardFooter">
            <nav>
              <ul
                class="pagination justify-content-center"
                id="ulPhanTrang"
              ></ul>
            </nav>
          </div>
        </div>
        <Modal />
      </div>
    );
  }
}
