import React from "react";
import Loading from "../../components/Loading";
const RenderChangePage = (props) => {
  // console.log(props.adminMovies);
  if (props.adminMovies.loading) {
    return <Loading />;
  }
  let { moviesList } = props.adminMovies;
  return (
    <div>
      <nav aria-label="Page navigation">
        <ul className="pagination col-3  mx-auto">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => props.handlePage(moviesList.currentPage - 2)}
              disabled={moviesList.currentPage < 3 ? true : false}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {moviesList.currentPage > 1 ? (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => props.handlePage(moviesList.currentPage - 1)}
              >
                {moviesList.currentPage - 1}
              </button>
            </li>
          ) : (
            ""
          )}
          <li className="page-item">
            <button
              className="page-link text-danger"
              onClick={() => props.handlePage(moviesList.currentPage)}
            >
              <b>{moviesList.currentPage}</b>
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => props.handlePage(moviesList.currentPage + 1)}
            >
              {moviesList.currentPage + 1}
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => props.handlePage(moviesList.currentPage + 2)}
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default RenderChangePage;
