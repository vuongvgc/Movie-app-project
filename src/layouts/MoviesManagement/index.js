import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoviesList } from "../../actions/AdminMovies";
import RenderMovieList from "./RenderMovieList";
class MoviesManagement extends Component {
  componentDidMount() {
    this.props.getMoviesList();
  }
  render() {
    return (
      <div className="container">
        <div className="card text-center">
          <div className="card-header">
            <div className="row justify-content-between">
              <div className="col-md-6">
                <h4 className="text-start font-weight-bold">Danh sách Phim</h4>
              </div>
              <div className="col-md-6 text-end">
                <button className="btn btn-primary" id="btnThem">
                  Thêm Phim
                </button>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row mb-3">
              <div className="col">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Tên người dùng"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <table className="table table-bordered table-hover myTable">
              <thead className="text-primary">
                <tr>
                  <th>Mã Phim</th>
                  <th className="nowrap col-2">
                    <span className="mr-1">Tên Phim</span>
                    <i className="fa fa-arrow-up mx-2" id="SapXepTang"></i>
                    <i className="fa fa-arrow-down" id="SapXepGiam"></i>
                  </th>
                  <th>Hình ảnh</th>
                  <th>Mô Tả</th>
                  <th>Ngày khởi chiếu</th>
                  <th>
                    <em className="fa fa-cog"></em>
                  </th>
                </tr>
              </thead>
              <tbody>
                <RenderMovieList adminMovies={this.props.adminMovies} />
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
                  <button className="page-link">1</button>
                </li>
                <li className="page-item">
                  <button className="page-link">2</button>
                </li>
                <li className="page-item">
                  <button className="page-link">3</button>
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
      </div>
    );
  }
}
const mapMapToProps = (state) => {
  return {
    accessToken: state.authReducers.currentUser.accessToken,
    maNhom: state.authReducers.currentUser.maNhom,
    adminMovies: state.adminMovies,
  };
};
export default connect(mapMapToProps, { getMoviesList })(MoviesManagement);
