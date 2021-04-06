import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions/User";
import "./style.css";
class TicketBookingHistory extends Component {
  componentDidMount() {
    this.props.getUser({ taikhoan: this.props.currentUser });
    // console.log(this.props.userDetail.thongTinDatVe);
  }
  onSubmit = (formValue) => {
    this.props.updateUser(formValue, this.props.accessToken);
  };
  render() {
    if (!this.props.userDetail) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container-fluid ">
        <table className="table overflow-auto ticketList table-hover">
          <thead>
            <tr>
              <th scope="col">Mã Vé</th>
              <th scope="col">Tên Phim</th>
              <th scope="col">Danh Sách Ghế</th>
              <th scope="col">Ngày Đặt</th>
            </tr>
          </thead>
          <tbody>
            {this.props.userDetail.thongTinDatVe.map((ticket) => {
              const {
                maVe,
                tenPhim,
                thoiLuongPhim,
                giaVe,
                ngayDat,
                danhSachGhe,
              } = ticket;
              return (
                <tr key={maVe}>
                  <th scope="row">{maVe}</th>
                  <td>
                    <p>
                      Tên Phim: <b>{tenPhim}</b>
                    </p>
                    <p>
                      Thời gian: <b>{thoiLuongPhim} phút</b>
                    </p>
                    <p>
                      Giá vé: <b>{giaVe} VNĐ</b>
                    </p>
                  </td>
                  <td>
                    {danhSachGhe.map((item) => {
                      const { tenHeThongRap, tenCumRap, tenGhe, maGhe } = item;
                      // console.log(tenHeThongRap, tenCumRap, tenGhe);
                      return (
                        <p key={maGhe}>
                          {tenHeThongRap} - {tenCumRap} -Ghế: {tenGhe}
                        </p>
                      );
                    })}
                  </td>
                  <td>
                    <p className="">{ngayDat?.slice(0, 10)}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.authReducers.currentUser.taiKhoan,
    userDetail: state.userReducers.userDetail,
  };
};
export default connect(mapStateToProps, { getUser })(TicketBookingHistory);
