import React from "react";
class ShowtimeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowTime: {
        maPhim: "",
        ngayChieuGioChieu: "",
        maRap: "",
        giaVe: "",
        heThongRap: "",
      },
    };
  }
  handleChange = (e) => {
    this.setState(
      {
        formShowTime: {
          ...this.state.formShowTime,
          [e.target.name]: e.target.value,
        },
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    let {
      maPhim,
      maRap,
      ngayChieuGioChieu,
      giaVe,
      heThongRap,
    } = this.state.formShowTime;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Mã Phim</label>
          <input
            name="maPhim"
            className="form-control"
            onChange={this.handleChange}
            value={maPhim}
          />
        </div>
        <div>
          {/* https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap */}
          <label>Hệ Thống Rạp</label>
          <select
            class="form-select form-select-md"
            onChange={this.handleChange}
            value={heThongRap}
          >
            <option selected>Chọn hệ thống rạp</option>
            <option value="1">BHDStar</option>
            <option value="2">Cinestar</option>
            <option value="3">Galaxy</option>
            <option value="4">LotteCinima</option>
            <option value="5">MegaGS</option>
          </select>
        </div>
        <div>
          <label>Cụm Rạp</label>
          {/* https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=BHDStar */}
          <select
            class="form-select form-select-md"
            name="maRap"
            onChange={this.handleChange}
            value={maRap}
          >
            <option selected>Chọn cụm rạp</option>
            <option value="1">Rạp 1</option>
            <option value="2">Rạp 2</option>
            <option value="3">Rạp 3</option>
            <option value="4">Rạp 4</option>
            <option value="5">Rạp 5</option>
          </select>
        </div>
        <div>
          <label>Lịch Chiếu</label>
          <input
            className="form-control"
            type="datetime-local"
            name="ngayChieuGioChieu"
            value="2020-04-12T19:30"
            min="2020-01-07T00:00"
            max="2021-12-14T00:00"
            onChange={this.handleChange}
            value={ngayChieuGioChieu}
          />
        </div>
        <div className="form-group">
          <label>Giá Vé</label>
          <input
            name="giaVe"
            className="form-control"
            onChange={this.handleChange}
            value={giaVe}
          />
        </div>
      </form>
    );
  }
}

export default ShowtimeForm;
