import React from "react";
import PopOver from "../../components/Popover";
import ModalPure from "../../components/Modal/Modal";
import { connect } from "react-redux";
import { deleteMovie } from "../../actions/AdminMovies";
import SnackBar from "../../components/Snackbar";
import Loading from "../../components/Loading";
import { NavLink } from "react-router-dom";

class RenderUserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameMovie: "",
      modelMovie: "",
    };
  }
  selectMovie = (movie) => {
    this.setState({
      nameMovie: movie.tenPhim,
      modelMovie: movie.maPhim,
    });
  };
  deleteMovie = (modelMovie) => {
    this.props.deleteMovie(modelMovie, this.props.accessToken);
  };

  renderAction = () => {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-danger mx-2"
          onClick={() => this.deleteMovie(this.state.modelMovie)}
          data-bs-dismiss="modal"
        >
          Xóa
        </button>
        <button
          type="button"
          className="btn btn-secondary "
          data-bs-dismiss="modal"
          // handleCancel={() => this.setState({ currentUser: null })}
        >
          Hủy
        </button>
      </React.Fragment>
    );
  };
  renderContent = (movie) => {
    return (
      <p>
        Bạn có chắc muốn xóa phim: <b>{movie}</b>
      </p>
    );
  };
  render() {
    if (this.props.adminMovies.loading) {
      return <Loading />;
    }
    // console.log(this.props.adminMovies);
    return this.props.adminMovies.moviesList.items.map((movie) => {
      return (
        <tr key={movie.maPhim}>
          <td>{movie.maPhim}</td>
          <td>
            <NavLink className="" to={`/admin/showtime/${movie.maPhim}`}>
              {movie.tenPhim}
            </NavLink>
          </td>
          <td className="card">
            <img
              src={movie.hinhAnh}
              alt={movie.tenPhim}
              className="card-img-top img-fluid"
            />
            <div className="card-body">
              <PopOver action="Mô tả" content={movie.moTa} />
            </div>
          </td>
          <td>
            <p className="">{movie.ngayKhoiChieu?.slice(0, 10)}</p>
          </td>
          <td>
            <div className="d-grid gap-2 d-block">
              <button
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#ModalUpdateMovie"
                onClick={() => this.props.handleMovie(movie)}
              >
                Cập Nhật
              </button>
              <button
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#ModalDeleteMovie"
                onClick={() => this.selectMovie(movie)}
              >
                Xóa
              </button>
            </div>
          </td>
          <ModalPure
            title="Xóa Phim"
            id="ModalDeleteMovie"
            content={this.renderContent(this.state.nameMovie)}
            action={this.renderAction()}
          />
          <SnackBar
            isOpen={this.props.adminMovies.deleteMovie.success}
            title="Xóa phim thành công"
            severity="success"
          />
          <SnackBar
            isOpen={this.props.adminMovies.deleteMovie.error}
            title={this.props.adminMovies.deleteMovie.error}
            severity="warning"
          />
        </tr>
      );
    });
  }
}
const mapMapToProps = (state) => {
  return {
    accessToken: state.authReducers.currentUser.accessToken,
    adminMovies: state.adminMovies,
  };
};
export default connect(mapMapToProps, { deleteMovie })(RenderUserList);
