import { CircularProgress } from "@material-ui/core";
import React from "react";
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
          <td>
            <img
              src={movie.hinhAnh}
              alt={movie.tenPhim}
              className="img-fluid"
            />
          </td>
          <td>{movie.moTa}</td>
          <td>{movie.ngayKhoiChieu}</td>
          <td>
            <button
              className="btn btn-success mx-1"
              data-bs-toggle="modal"
              data-bs-target="#updateModal"
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
