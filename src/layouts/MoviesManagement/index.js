import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoviesList } from "../../actions/AdminMovies";
import RenderMovieList from "./RenderMovieList";
import ModalPure from "../../components/Modal/Modal";
import MovieForm from "../../components/MovieForm";
import CircularIndeterminate from "../../components/CircularIndeterminate";
import _ from "lodash";
class MoviesManagement extends Component {
  componentDidMount() {
    this.props.getMoviesList();
  }
  renderContent = () => {
    return (
      <React.Fragment>
        <MovieForm admin={true} onSubmit={this.onSubmit} />
      </React.Fragment>
    );
  };
  renderAction = () => {
    return (
      <React.Fragment>
        <div className="modal-footer">
          <button
            className="btn btn-primary m-2"
            onClick={() => this.onSubmit(this.props.movieForm.values)}
          >
            Thêm Phim
          </button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Đóng
          </button>
        </div>
      </React.Fragment>
    );
  };
  onSubmit = (formValue) => {
    console.log(formValue);
    // // console.log(formValue, this.props.accessToken);
    // formValue.soDt = formValue.soDT;
    // delete formValue.soDT;
    // // console.log(formValue);
    // this.props.updateUser(
    //   {
    //     ...formValue,
    //     maNhom: this.props.maNhom,
    //   },
    //   this.props.accessToken
    // );
  };
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
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#ModalPure"
                >
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
                  <th className="col-3">Hình ảnh</th>
                  <th>Ngày khởi chiếu</th>
                  <th>
                    <em className="fa fa-cog"></em>
                  </th>
                </tr>
              </thead>
              <tbody>
                <RenderMovieList adminMovies={this.props.adminMovies} />
                <ModalPure
                  title="Thêm Phim Mới"
                  content={this.renderContent()}
                  action={this.renderAction()}
                  onSubmit={this.onSubmit}
                />
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
    movieForm: state.form.movieForm,
  };
};
export default connect(mapMapToProps, { getMoviesList })(MoviesManagement);
