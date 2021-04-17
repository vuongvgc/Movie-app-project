import React, { Component } from "react";
export default class ShowtimeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maPhim: "",
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.movie !== prevProps.movie) {
      // console.log("run update Movie");
      let { maPhim, ngayChieuGioChieu, maRap, giaVe } = this.props.movie;
      this.setState({
        maPhim,
        ngayChieuGioChieu,
        maRap,
        giaVe,
      });
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      // console.log(this.state);
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let formValues = {};
    for (var key in this.state) {
      formValues = { ...formValues, [key]: this.state[key] };
    }
    this.props.onSubmit(formValues);
    console.log(formValues);
  };

  render() {
    // console.log(this.state);
    let { maPhim, ngayChieuGioChieu, maRap, giaVe } = this.state;
    return (
      <div className="container">
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
          <div className="form-group">
            <label>Ngày Giờ Chiếu</label>
            <input
              name="ngayChieuGioChieu"
              className="form-control"
              onChange={this.handleChange}
              value={ngayChieuGioChieu}
            />
          </div>
          <div className="form-group">
            <label>Mã Rạp</label>
            <input
              name="maRap"
              className="form-control"
              onChange={this.handleChange}
              value={maRap}
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
      </div>
    );
  }
}
