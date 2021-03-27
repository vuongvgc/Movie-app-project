import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
const Modal = (props) => {
  const color = {
    backgroundColor: "rgba(0,0,0,0.5)",
  };
  return ReactDOM.createPortal(
    <div class="modal fade" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <header class="head-form mb-0">
            <h2 id="header-title">Log In</h2>
          </header>

          <div class="modal-header">
            <h4 class="modal-title" id="modal-title">
              Modal Heading
            </h4>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            <form role="form" id="formNhanVien">
              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="msnv"
                    name="msnv"
                    id="msnv"
                    class="form-control input-sm"
                    placeholder="Mã số nhân viên"
                  />
                </div>

                <span class="sp-thongbao" id="tbMaNV"></span>
              </div>

              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-address-book"></i>
                    </span>
                  </div>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    class="form-control input-sm"
                    placeholder="Họ và tên"
                  />
                </div>
                <span class="sp-thongbao" id="tbTen"></span>
              </div>

              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="form-control input-sm"
                    placeholder="Email"
                  />
                </div>

                <span class="sp-thongbao" id="tbEmail"></span>
              </div>

              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form-control input-sm"
                    placeholder="Mật khẩu"
                  />
                </div>
                <span class="sp-thongbao" id="tbMatKhau"></span>
              </div>

              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-calendar"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="ngaysinh"
                    id="datepicker"
                    class="form-control"
                    placeholder="Ngày sinh"
                  />
                </div>

                <span class="sp-thongbao" id="tbNgay"></span>
              </div>

              <div class="form-group">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-briefcase"></i>
                    </span>
                  </div>
                  <select class="form-control" id="chucvu">
                    <option>Chọn chức vụ</option>
                    <option>Sếp</option>
                    <option>Trưởng phòng</option>
                    <option>Nhân viên</option>
                  </select>
                </div>

                <span class="sp-thongbao" id="tbChucVu"></span>
              </div>
            </form>
          </div>
          <div class="modal-footer" id="modal-footer">
            <button id="btnThemNV" type="button" class="btn btn-success">
              Thêm người dùng
            </button>
            <button
              id="btnCapNhat"
              type="button"
              class="btn btn-success"
              data-dismiss="modal"
            >
              Cập nhật
            </button>
            <button
              id="btnDong"
              type="button"
              class="btn btn-danger"
              data-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Modal;
