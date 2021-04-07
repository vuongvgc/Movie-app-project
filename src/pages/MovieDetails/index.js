import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieDetail } from "../../actions/MovieDetail";
import ShowTime from '../../components/ShowTime';
import Loading from "../../components/Loading"
import '../../styles/MovieDetails.css';

export default function MovieDetails(props) {

  const dispatch = useDispatch();

  const [menu, setMenu] = useState(1);

  const { movieDetails, loading, error } = useSelector((state) => state.movieDetailReducer);
  useEffect(() => {

    const id = props.match.params.movieId;
    setMenu(1);
    dispatch(getMovieDetail(id));
  }, []);

  const handleScroll = () => {
    setMenu(1);
    document.getElementById("tab-content").scrollIntoView();
  }

  return (
    <>
    {loading?
    <Loading />
    :
    <>
      <div className='movieDetail'
        style={{ backgroundImage: `url(${movieDetails?.hinhAnh})` }}
      >
        <div className='styleBlur'>

        </div>
        <div className="detailMain-top container ">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-7  detailMain-img">
              <img src={movieDetails?.hinhAnh} alt="movieImg" />
            </div>
            <div className="col-lg-6 col-md-5 col-5  detailMain-info">
              <div className='detailMain-info2'>
                <p className=''>{movieDetails?.ngayKhoiChieu?.slice(0, 10)}</p>
                <h3>{movieDetails?.tenPhim}</h3>


                <button className='btn btn-danger btn-datVe'
                  onClick={() => { handleScroll("tab-content") }}>
                  Mua vé
                </button>

                <button data-fancybox
                  href={movieDetails.trailer} className="btn btn-success btn-trailer">
                  <i className="fa fa-play mr-1" />
                  Xem trailer
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 d-none d-md-block detailMain-score">
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
        <div className='container-xl'>
          <ul className='nav-tabs'>
            <li>
              <span
                onClick={() => setMenu(1)}
                className={menu === 1 ? 'active' : ''}>Lịch Chiếu</span>
            </li>
            <li >
              <span
                onClick={() => setMenu(2)}
                className={menu === 2 ? 'active' : ''}>Thông Tin</span>
            </li>

          </ul>

          <div className='tab-content' id="tab-content">
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
                    {movieDetails?.ngayKhoiChieu?.slice(0, 10)}
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
      </div></> }
     



    </>
  )
}
