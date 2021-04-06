import React, { Component } from "react";
import { connect } from "react-redux";
import SnackBar from "../../components/Snackbar";
import {
  getMoviesList,
  addMovie,
  updateMovie,
  searchMoviesList,
} from "../../actions/AdminMovies";
import RenderMovieList from "./RenderMovieList";
import ModalPure from "../../components/Modal/Modal";
import MovieInsertForm from "../../components/MovieInsertForm";
import RenderChangePage from "./RenderChangePage";
class MoviesManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      update: false,
      search: "",
      snackbar: this.props.adminMovies.updateMovie.success,
    };
  }
  componentDidMount() {
    this.props.getMoviesList();
  }
  renderContent = () => {
    return (
      <React.Fragment>
        <MovieInsertForm
          onSubmit={this.state.update ? this.onSubmitUpdate : this.onSubmit}
          renderAction={this.renderAction}
          maNhom={this.props.maNhom}
          movie={this.state.movie}
        />
      </React.Fragment>
    );
  };
  renderAction = () => {
    return (
      <React.Fragment>
        <div className="modal-footer">
          <button className="btn btn-primary m-2">
            {this.state.update ? "Cập nhật" : "Thêm Phim"}
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
    this.props.addMovie(formValue, this.props.accessToken);
  };
  onSubmitUpdate = (formValue) => {
    console.log(formValue);
    this.props.updateMovie(formValue, this.props.accessToken);
  };
  handleMovie = (movie) => {
    this.setState({
      movie: { ...movie },
      update: true,
    });
  };
  resetForm = () => {
    this.setState({
      movie: {
        tenPhim: "",
        biDanh: "",
        trailer: "",
        hinhAnh: {},
        moTa: "",
        maNhom: this.props.maNhom,
        danhGia: "",
        ngayKhoiChieu: "",
      },
      update: false,
    });
  };
  handlePage = (page) => {
    if (this.state.search === "") {
      this.props.getMoviesList(this.props.maNhom, page);
    } else {
      this.props.searchMoviesList(this.props.maNhom, this.state.search, page);
    }
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
                  data-bs-target="#ModalAddMovie"
                  onClick={() => this.resetForm()}
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
                    placeholder="Tên Phim"
                    onChange={(event) =>
                      this.setState({ search: event.target.value })
                    }
                    value={this.state.search}
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={() => this.handlePage(1)}
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
                  </th>
                  <th className="col-3">Hình ảnh</th>
                  <th>Ngày khởi chiếu</th>
                  <th>
                    <em className="fa fa-cog"></em>
                  </th>
                </tr>
              </thead>
              <tbody>
                <RenderMovieList
                  adminMovies={this.props.adminMovies}
                  handleMovie={this.handleMovie}
                />
                <ModalPure
                  title="Thêm Phim Mới"
                  id="ModalAddMovie"
                  content={this.renderContent()}
                />
                <ModalPure
                  title="Cập Nhật Phim"
                  id="ModalUpdateMovie"
                  content={this.renderContent()}
                  update={true}
                />
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <RenderChangePage
              adminMovies={this.props.adminMovies}
              handlePage={this.handlePage}
            />
            <SnackBar
              isOpen={this.props.adminMovies.updateMovie.success}
              title="Cập nhật thành công"
              severity="success"
            />
            <SnackBar
              isOpen={this.props.adminMovies.updateMovie.error}
              title="Cập nhật thật bại"
              severity="warning"
            />
            <SnackBar
              isOpen={this.props.adminMovies.addMovie.success}
              title="Thêm phim thành công"
              severity="success"
            />
            <SnackBar
              isOpen={this.props.adminMovies.addMovie.error}
              title={this.props.adminMovies.addMovie.error}
              severity="warning"
            />
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
export default connect(mapMapToProps, {
  getMoviesList,
  addMovie,
  updateMovie,
  searchMoviesList,
})(MoviesManagement);
