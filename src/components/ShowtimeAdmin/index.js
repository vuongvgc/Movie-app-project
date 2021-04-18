import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovieInfo } from "../../actions/MovieInfo";
import "../../styles/ShowTime.css";
import Modal from "../Modal/Modal";
import ShowtimeForm from "../ShowtimeForm";
const renderContent = () => {
  return (
    <React.Fragment>
      <ShowtimeForm onSubmit={onSubmit} renderAction={renderAction()} />
    </React.Fragment>
  );
};
const renderAction = () => {
  return (
    <React.Fragment>
      <button className="btn btn-danger mx-2" data-bs-dismiss="modal">
        Đóng
      </button>
      <button className="btn btn-success">Thêm</button>
    </React.Fragment>
  );
};
const onSubmit = (formValue) => {
  console.log(formValue);
};
export default function ShowTime(props) {
  const dispatch = useDispatch();

  const [select, setSelect] = useState(0);
  const { movieInfo } = useSelector((state) => state.movieInfoReducer);

  useEffect(() => {
    const movieId = props.movieId;

    dispatch(getMovieInfo(movieId));
  }, [dispatch, props.movieId]);
  console.log(movieInfo);
  return (
    <div className="row showTimes">
      <div className="col-3 showTime-logo">
        {movieInfo?.heThongRapChieu?.map((item, index) => {
          return (
            <div
              key={item?.maHeThongRap}
              className={
                select === index
                  ? `showTime-logoBorderBottom showTime-active`
                  : `showTime-logoBorderBottom`
              }
              onClick={() => setSelect(index)}
            >
              <div className="logo">
                <img src={item?.logo} alt="" />
              </div>
              <span className="showTime-maRap d-none d-md-block">
                {item?.maHeThongRap}
              </span>
            </div>
          );
        })}
      </div>

      <div className="col-9">
        <h3 className="text-center text-capitalize my-2">quản lý lịch chiếu</h3>
        <div className="text-end">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalAddShowtime"
          >
            Tạo Lịch Chiếu
          </button>
        </div>
        {movieInfo.heThongRapChieu
          ? movieInfo.heThongRapChieu[select].cumRapChieu.map((item) => {
              return (
                <div key={item?.maCumRap}>
                  <div className="showTimes-tenCumRap">
                    {item?.tenCumRap}
                    <br />
                    {item?.lichChieuPhim.map((time) => {
                      return (
                        <div className="showTime-item" key={time?.maLichChieu}>
                          Ngày: {time?.ngayChieuGioChieu?.slice(0, 10)}
                          <br />
                          Giờ: {time?.ngayChieuGioChieu?.slice(11, 16)}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      <Modal
        id="modalAddShowtime"
        title="Thêm Lịch Chiếu"
        content={renderContent()}
      />
    </div>
  );
}
