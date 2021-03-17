import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieDetail } from "../../actions/MovieDetail";
import ShowTime from '../../components/ShowTime';

import '../../styles/MovieDetails.css';

export default function MovieDetails(props) {

  const dispatch = useDispatch();

  const [menu, setMenu] = useState(1);

  const { movieDetails, loading, error } = useSelector((state) => state.movieDetailReducer);
  useEffect(() => {

    const id = props.match.params.movieId;

    dispatch(getMovieDetail(id));


  }, []);


  return (
    <>
      <div className='movieDetail'
        style={{ backgroundImage: `url(${movieDetails?.hinhAnh})` }}
      >
        <div className='styleBlur'>

        </div>
        <div className="detailMain-top container ">
          <div className="row">
            <div className="col-2 detailMain-img">
              <img src={movieDetails?.hinhAnh} alt="movieImg" />
            </div>
            <div className="col-6 detailMain-info">
              <div className='detailMain-info2'>
                <p className=''>{movieDetails?.ngayKhoiChieu?.slice(0, 10)}</p>
                <h3>{movieDetails?.tenPhim}</h3>


                <button className='btn btn-danger btn-datVe'>
                  Mua vé
            </button>
              </div>
            </div>
            <div className="col-4 detailMain-score">
              <div className='detailMain-scoreContainer'>
                <div className='circlePercent'>
                  <div className='circleBorder'>

                  </div>
                  <span className='detailMain-danhGia'>{movieDetails.danhGia} </span>
                  <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                  </div>
                </div>
                <p> </p>
                <span>
                  51 người đã đánh giá
          </span>

              </div>

            </div>
          </div>
        </div>

      </div>


      <div className="contentMain">
        <div className='container'>
          <ul className='nav-tabs'>
            <li >
              <span
                onClick={() => setMenu(1)}
                className={menu === 1 ? 'active' : ''}>Thông Tin</span>
            </li>
            <li >
              <span
                onClick={() => setMenu(2)}
                className={menu === 2 ? 'active' : ''}>Thông Tin</span>
            </li>

          </ul>

          <div className='tab-content'>
            <div className={menu === 1 ? '' : 'hidden'}>
              <ShowTime movieId={props.match.params.movieId} />
            </div>
            <div className={menu === 2 ? 'nav-tabs-info row' : 'hidden'}>
              <div className='col-6 leftInfo'>
                <div className="row rowLeftInfo">
                  <div className="col-6 contentInfo">
                    Ngày công chiếu
                </div>
                  <div className="col-6">
                    {movieDetails?.ngayKhoiChieu?.slice(0,10)}
                  </div>
                </div>

                <div className="row rowLeftInfo">
                  <div className="col-6 contentInfo">
                    Đạo diễn
                </div>
                  <div className="col-6">

                  </div>
                </div>

                <div className="row rowLeftInfo">
                  <div className="col-6 contentInfo">
                    Diễn viên
                </div>
                  <div className="col-6">

                  </div>
                </div>


                <div className="row rowLeftInfo">
                  <div className="col-6 contentInfo">
                    Thể loại
                </div>
                  <div className="col-6">

                  </div>
                </div>

                <div className="row rowLeftInfo">
                  <div className="col-6 contentInfo">
                    Định dạng
                </div>
                  <div className="col-6">

                  </div>
                </div>

                <div className="row rowLeftInfo">
                  <div className="col-6 contentInfo">
                    Quốc giá SX
                </div>
                  <div className="col-6">

                  </div>
                </div>

              </div>

              <div className='col-6 rightInfo'>
                <h3>
                  Nội dung
              </h3>
                <p>
                  {movieDetails?.moTa}

                </p>

              </div>
            </div>

          </div>



        </div>
      </div>



    </>
  )
}
