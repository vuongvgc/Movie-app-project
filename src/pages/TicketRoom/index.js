import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Seat from "../../components/Seat";
import '../../styles/TicketRoom.css'
import { getTicketRoom } from "../../actions/TicketRoom"

export default function TicketRoom(props) {

  const dispatch = useDispatch();

  const heThongRapChieu = {

    "maHeThongRap": "BHDStar",
    "tenHeThongRap": "BHD Star Cineplex",
    "logo": "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
  };

  const cumRapChieu = {

    "maCumRap": "bhd-star-cineplex-3-2",
    "tenCumRap": "BHD Star Cineplex - 3/2",
    "hinhAnh": null
  };


  const [listSeat, setListSeat] = useState([]);
  const [giaVe, setGiaVe] = useState([]);


  const { ticketRoom, loading, error } = useSelector((state) => state.ticketRoomReducer)



  const row1 = ticketRoom?.danhSachGhe?.slice(0, 16);
  const row2 = ticketRoom?.danhSachGhe?.slice(16, 32);
  const row3 = ticketRoom?.danhSachGhe?.slice(32, 48);
  const row4 = ticketRoom?.danhSachGhe?.slice(48, 64);
  const row5 = ticketRoom?.danhSachGhe?.slice(64, 80);
  const row6 = ticketRoom?.danhSachGhe?.slice(80, 96);
  const row7 = ticketRoom?.danhSachGhe?.slice(96, 112);
  const row8 = ticketRoom?.danhSachGhe?.slice(112, 128);
  const row9 = ticketRoom?.danhSachGhe?.slice(128, 144);
  const row10 = ticketRoom?.danhSachGhe?.slice(144, 160);

  useEffect(() => {

    const id = props.match.params.ticketRoomId;

    dispatch(getTicketRoom(id));

  }, []);




  //  hàm thêm ghế vào danh sách ghê
  const handleListSeat = (seat) => {
    const arr = listSeat;
    const arr1 = giaVe;
    const checkArr = arr.findIndex((item) => item === seat[0])
   
    if (checkArr === -1) {
      setListSeat([...listSeat, seat[0]]);
      setGiaVe([...giaVe, seat[1]])

    }
    else {
      arr.splice(checkArr, 1);
      arr1.pop()
      setListSeat([...arr])
      setGiaVe([...arr1])
   


    }


  }






  return (
    <div className='checkout'>
      <div className='row mainCheckout'>
        <div className="col-9 checkout-content">
          <div className="headerCheckout row">
            <ul className='stepCheckout'>
              <li> 01 CHỌN GHẾ & THANH TOÁN </li>
              <li> 02 KẾT QUẢ ĐẶT VÉ</li>
            </ul>
          </div>

          <div className='checkoutContent container'>
            <div className="topContent">
              <div className='logoCinema'>
                <img src={heThongRapChieu.logo} alt="logo" />
              </div>
              <div className='contentCinema'>
                <p className='address'>
                  <span className='nameCinema'>{heThongRapChieu.tenHeThongRap} </span>
                  <span className='addressCinema'> {cumRapChieu.tenCumRap.slice(heThongRapChieu.tenHeThongRap.length)}  </span>
                  <br />
                  <span className='timeCinema'>{ticketRoom?.thongTinPhim?.ngayChieu}-{ticketRoom?.thongTinPhim?.tenRap}s</span>
                </p>

              </div>
            </div>

          </div>

          <div className="seatmap container">
            <div className="screen">
              <img src="../img/checkout/screen.png" alt="" />
            </div>
          </div>
          <div className='listseat'>

            <div className="rowSeat">
              <span className="col hang">A</span>
              {row1?.map((item) => {
                return (
                  <span key={item.maGhe}>
                    <Seat

                      item={item}
                      onListSeat={(seatId) => handleListSeat(seatId)}
                    />
                  </span>



                )
              })}
            </div>

            <div className="rowSeat">
              <span className="col hang">B</span>
              {row2?.map((item) => {
                return (
                  <span key={item.maGhe}>

                    <Seat
                      key={item.maGhe}
                      item={item}
                      onListSeat={(seatId) => handleListSeat(seatId)}
                    />
                  </span>
                )
              })}
            </div>

            <div className="rowSeat">
              <span className="col hang">C</span>
              {row3?.map((item) => {
                return (
                  <span key={item.maGhe}>

                    <Seat

                      item={item}
                      onListSeat={(seatId) => handleListSeat(seatId)} />
                  </span>
                )
              })}
            </div>


            <div className="rowSeat">
              <span className="col hang">D</span>
              {row4?.map((item) => {
                return (
                  <span key={item.maGhe}>

                    <Seat item={item}
                      onListSeat={(seatId) => handleListSeat(seatId)} />
                  </span>
                )
              })}
            </div>


            <div className="rowSeat">
              <span className="col hang">E</span>
              {row5?.map((item) => {
                return (
                  <span key={item.maGhe}>

                    <Seat
                      item={item}
                      onListSeat={(seatId) => handleListSeat(seatId)} />
                  </span>
                )
              })}
            </div>


            <div className="rowSeat">
              <span className="col hang">F</span>
              {row6?.map((item) => {
                return (
                  <span key={item.maGhe}>

                    <Seat
                      item={item}
                      onListSeat={(seatId) => handleListSeat(seatId)} />
                  </span>
                )
              })}
            </div>


            <div className="rowSeat">
              <span className="col hang">G</span>
              {row7?.map((item) => {
                return (
                  <span key={item.maGhe}>

                    <Seat
                      item={item}
                      onListSeat={(seatId) => handleListSeat(seatId)} />
                  </span>
                )
              })}
            </div>


            <div className="rowSeat">
              <span className="col hang">H</span>
              {row8?.map((item) => {
                return (
                  <span key={item.maGhe}>

                    <Seat
                      item={item}
                      onListSeat={(seatId) => handleListSeat(seatId)} />
                  </span>
                )
              })}
            </div>


            <div className="rowSeat">
              <span className="col hang">I</span>
              {row9?.map((item) => {
                return (
                  <span key={item.maGhe}>

                    <Seat
                      item={item}
                      onListSeat={(seatId) => handleListSeat(seatId)} />
                  </span>
                )
              })}
            </div>


            <div className="rowSeat">
              <span className="col hang">J</span>
              {row10?.map((item) => {
                return (
                  <span key={item.maGhe}>

                    <Seat
                      item={item}
                      onListSeat={(seatId) => handleListSeat(seatId)} />
                  </span>
                )
              })}
            </div>
          </div>

        </div>

        <div className="col-3 checkout-side">
          <div className="checkout-sideContainer">
            <div className="row-total">

              {giaVe.reduce((total, item) => { return total + item }, 0)} Đ
            </div>

            <div className="row-film">
              <h3>{ticketRoom?.thongTinPhim?.tenPhim} </h3>
              <p> {ticketRoom?.thongTinPhim?.tenCumRap}</p>
              <p>{ticketRoom?.thongTinPhim?.ngayChieu}  - {ticketRoom?.thongTinPhim?.gioChieu} -{ticketRoom?.thongTinPhim?.tenRap} </p>
            </div>
            <div className={listSeat?.length ? "row-listSeat" : ''}>
            
              {listSeat.map((seat) => {

                return (
                  <span >{seat}</span>
                )
              })}
            </div>
            <div className='infoUser'>
              <input type="text" name='emailCheckout' id="emailCheckout" required />
              <label for="emailCheckout" className='label-emailCheckout' >
              
                <span className='span-emailCheckout'>E-Mail </span>
              </label>
            </div>
            <div className='infoUser'>
              <input type="text" id="emailCheckout" />
              <label for="emailCheckout" className='label-phoneCheckout' >
                <span className='span-phoneCheckout'>Phone</span>
              </label>
            </div>


            <button className='btn btn-success btn-checkout'>
              <span> Đặt Vé</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )



}
