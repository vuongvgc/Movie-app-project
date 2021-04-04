import React, { Component } from "react";
export default class PhimInsert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: {},
      moTa: "",
      maNhom: this.props.maNhom,
      danhGia: "",
      ngayKhoiChieu: "",
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.movie !== prevProps.movie) {
      console.log("run update Movie");
      let {
        tenPhim,
        biDanh,
        trailer,
        hinhAnh,
        moTa,
        maNhom,
        danhGia,
        ngayKhoiChieu,
      } = this.props.movie;
      this.setState({
        tenPhim: tenPhim,
        biDanh: biDanh,
        trailer: trailer,
        hinhAnh: hinhAnh,
        moTa: moTa,
        maNhom: this.props.maNhom,
        danhGia: danhGia,
        ngayKhoiChieu: ngayKhoiChieu,
      });
    }
  }
  handleChange = (e) => {
    let target = e.target;
    if (target.name === "hinhAnh") {
      this.setState({ hinhAnh: e.target.files[0] }, () => {
        console.log(this.state);
      });
    } else {
      this.setState({ [e.target.name]: e.target.value }, () => {
        console.log(this.state);
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    var form_data = new FormData();
    for (var key in this.state) {
      form_data.append(key, this.state[key]);
    }
    this.props.onSubmit(form_data);
  };

  render() {
    console.log(this.state);
    let {
      tenPhim,
      biDanh,
      trailer,
      hinhAnh,
      moTa,
      danhGia,
      ngayKhoiChieu,
    } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Tên phim</label>
            <input
              name="tenPhim"
              className="form-control"
              onChange={this.handleChange}
              value={tenPhim}
            />
          </div>
          <div className="form-group">
            <label>Bí Danh</label>
            <input
              name="biDanh"
              className="form-control"
              onChange={this.handleChange}
              value={biDanh}
            />
          </div>
          <div className="form-group">
            <label>Trailer</label>
            <input
              name="trailer"
              className="form-control"
              onChange={this.handleChange}
              value={trailer}
            />
          </div>
          <div className="form-group">
            <label>Hình ảnh</label>
            {hinhAnh ? (
              <img src={hinhAnh} alt={tenPhim} className="img-fluid my-2" />
            ) : (
              ""
            )}
            <input
              type="file"
              name="hinhAnh"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Mô tả</label>
            <input
              name="moTa"
              className="form-control"
              onChange={this.handleChange}
              value={moTa}
            />
          </div>
          <div className="form-group">
            <label>Điểm Đánh Giá</label>
            <input
              name="danhGia"
              className="form-control"
              onChange={this.handleChange}
              value={danhGia}
            />
          </div>
          <div className="form-group">
            <label>Ngày Khởi Chiếu</label>
            <input
              name="ngayKhoiChieu"
              className="form-control"
              onChange={this.handleChange}
              value={ngayKhoiChieu}
            />
          </div>
          {this.props.renderAction()}
        </form>
      </div>
    );
  }
}
