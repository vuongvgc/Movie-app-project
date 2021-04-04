import { CircularProgress } from "@material-ui/core";
import React from "react";
import PopOver from "../../components/Popover";
class RenderUserList extends React.Component {
  render() {
    if (this.props.adminMovies.loading) {
      return <CircularProgress />;
    }
    console.log(this.props.adminMovies);
    return this.props.adminMovies.moviesList.items.map((movie) => {
      return (
        <tr key={movie.maPhim}>
          <td>{movie.maPhim}</td>
          <td>{movie.tenPhim}</td>
          <td class="card">
            <img
              src={movie.hinhAnh}
              alt={movie.tenPhim}
              className="card-img-top img-fluid"
            />
            <div class="card-body">
              <PopOver action="Mô tả" content={movie.moTa} />
            </div>
          </td>
          <td>{movie.ngayKhoiChieu}</td>
          <td>
            <button
              className="btn btn-success mx-1"
              data-bs-toggle="modal"
              data-bs-target="#ModalUpdateMovie"
              onClick={() => this.props.handleMovie(movie)}
            >
              Cập Nhật
            </button>
            <button
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  }
}

export default RenderUserList;
