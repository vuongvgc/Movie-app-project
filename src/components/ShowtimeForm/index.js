import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMovieTheaterSystemList,
  getMovieTheaterZoneList,
  addMovieShowtime,
} from "../../actions/AdminShowtime";
import { getMovieInfo } from "../../actions/MovieInfo";
import SnackBar from "../Snackbar";

import findTheaterList from "../../utils/findTheaterList";
class ShowtimeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maPhim: "",
      ngayChieuGioChieu: "",
      heThongRap: "",
      maCumRap: "",
      maRap: "",
      giaVe: "",
      theaterList: [],
    };
  }
  componentDidMount() {
    this.props.getMovieTheaterSystemList();
  }
  componentDidUpdate(prevProps, prevState) {
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
    if (this.state.heThongRap !== prevState.heThongRap) {
      this.props.getMovieTheaterZoneList(this.state.heThongRap);
    }
    if (this.state.maCumRap !== prevState.maCumRap) {
      let newTheaterList = findTheaterList(
        this.props.movieTheaterZone.theaterZoneList,
        this.state.maCumRap
      );
      // console.log(theaterList);
      this.setState({ theaterList: newTheaterList });
    }
    // console.log(this.state.statusAddShowtime);
    if (this.props.addShowtime.success !== prevProps.addShowtime.success) {
      this.props.getMovieInfo(this.state.maPhim);
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { maPhim, ngayChieuGioChieu, maRap, giaVe } = this.state;
    let formValues = {};
    // for (var key in this.state) {
    //   formValues = { ...formValues, [key]: this.state[key] };
    // }
    formValues = {
      maPhim: maPhim,
      ngayChieuGioChieu: ngayChieuGioChieu,
      maRap: maRap,
      giaVe: giaVe,
    };
    this.props.addMovieShowtime(formValues, this.props.accessToken);
  };

  render() {
    // console.log(this.props.match.params);
    let {
      maPhim,
      ngayChieuGioChieu,
      maRap,
      giaVe,
      heThongRap,
      maCumRap,
    } = this.state;
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
              placeholder="Định dạng ngày chiếu: dd/mm/yyyy hh:mm:ss"
            />
          </div>
          <div className="form-group">
            <label>Hệ Thống Rạp</label>
            <select
              className="form-select"
              value={heThongRap}
              onChange={this.handleChange}
              name="heThongRap"
            >
              <option selected>Lựa chọn hệ thống rạp</option>
              {!this.props.movieTheaterSystem.loading
                ? this.props.movieTheaterSystem.theaterSystemList.map(
                    (item) => {
                      return (
                        <React.Fragment>
                          <option value={item.maHeThongRap}>
                            {item.tenHeThongRap}
                          </option>
                        </React.Fragment>
                      );
                    }
                  )
                : ""}
            </select>
          </div>
          <div className="form-group">
            <label>Cụm Rạp</label>
            <select
              className="form-select"
              value={maCumRap}
              name="maCumRap"
              onChange={this.handleChange}
            >
              <option selected>Lựa chọn cụm rạp</option>
              {!this.props.movieTheaterZone.loading
                ? this.props.movieTheaterZone.theaterZoneList.map((item) => {
                    return (
                      <React.Fragment>
                        <option value={item.maCumRap}>{item.tenCumRap}</option>
                      </React.Fragment>
                    );
                  })
                : ""}
            </select>
          </div>
          <div className="form-group">
            <label>Mã Rạp</label>
            <select
              className="form-select"
              value={maRap}
              name="maRap"
              onChange={this.handleChange}
            >
              <option selected>Lựa chọn rạp</option>
              {!this.props.movieTheaterZone.loading
                ? this.state.theaterList.map((item) => {
                    return (
                      <React.Fragment>
                        <option value={item.maRap}>{item.tenRap}</option>
                      </React.Fragment>
                    );
                  })
                : ""}
            </select>
          </div>
          <div className="form-group">
            <label>Giá Vé</label>
            <input
              name="giaVe"
              className="form-control"
              onChange={this.handleChange}
              value={giaVe}
              placeholder="Giá Vé từ 75.000 - 200.000"
            />
          </div>
          <div className="text-end m-2">{this.props.renderAction}</div>
        </form>
        <SnackBar
          isOpen={this.props.addShowtime.success}
          title="Thêm lịch chiếu thành công"
          severity="success"
        />
        <SnackBar
          isOpen={this.props.addShowtime.error}
          title={this.props.addShowtime.error}
          severity="warning"
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movieTheaterSystem: state.adminShowtime.movieTheaterSystem,
    movieTheaterZone: state.adminShowtime.movieTheaterZone,
    addShowtime: state.adminShowtime.addShowtime,
    accessToken: state.authReducers.currentUser.accessToken,
  };
};
export default connect(mapStateToProps, {
  getMovieTheaterSystemList,
  getMovieTheaterZoneList,
  addMovieShowtime,
  getMovieInfo,
})(ShowtimeForm);
