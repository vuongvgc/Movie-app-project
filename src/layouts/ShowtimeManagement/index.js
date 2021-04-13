import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetail } from "../../actions/MovieDetail";
import ShowTimeAdmin from "../../components/ShowtimeAdmin";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import "../../styles/MovieDetails.css";

export default function ShowtimeManagement(props) {
  const dispatch = useDispatch();

  const [menu, setMenu] = useState(1);

  const { movieDetails, loading, error } = useSelector(
    (state) => state.movieDetailReducer
  );
  useEffect(() => {
    const id = props.match.params.movieId;
    setMenu(1);
    dispatch(getMovieDetail(id));
  }, []);
  return (
    <>
      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
        <>
          <div>
            <div className="container-xl">
              <div>
                <h3>Tên Phim: {movieDetails?.tenPhim}</h3>
                <p>
                  Ngày Khởi Chiếu: {movieDetails?.ngayKhoiChieu?.slice(0, 10)}
                </p>
              </div>
              <div className="tab-content" id="tab-content">
                <div className={menu === 1 ? "" : "hidden"}>
                  <ShowTimeAdmin movieId={props.match.params.movieId} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
