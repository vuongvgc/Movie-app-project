import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getMovieInfo } from '../../actions/MovieInfo'
import '../../styles/ShowTime.css'

export default function ShowTime(props) {

    const dispatch = useDispatch();

    const [select, setSelect] = useState(0);
    const { movieInfo, loading, error } = useSelector((state) => state.movieInfoReducer)

    useEffect(() => {
        const movieId = props.movieId;

        dispatch(getMovieInfo(movieId));

    }, []);


    return (
        <div className='row showTimes'>
            <div className='col-3 showTime-logo'>
                {movieInfo?.heThongRapChieu?.map((item, index) => {
                    return (
                        <div key={item?.maHeThongRap} className='showTime-logoBorderBottom'
                            onClick={() => setSelect(index)}
                        >
                            <div className='logo'>
                                <img src={item?.logo} alt="" />

                            </div>
                            <span className='showTime-maRap'>{item?.maHeThongRap}</span>
                        </div>
                    )


                })}
            </div>

            <div className='col-9'>
                {movieInfo.heThongRapChieu ? movieInfo.heThongRapChieu[select].cumRapChieu.map((item) => {

                    return (

                        <div>

                            <div className='showTimes-tenCumRap'>{item?.tenCumRap}</div>
                            {item?.lichChieuPhim.map((time) => {
                                return (
                                    <div className='showTime-item'>
                                        Ngày: { time?.ngayChieuGioChieu?.slice(0, 10)}
                                        <br />
                                           Giờ: {time?.ngayChieuGioChieu?.slice(11, 16)}
                                    </div>
                                )

                            })}
                        </div>
                    )
                }) : ''}
            </div>

        </div>

    )
}
