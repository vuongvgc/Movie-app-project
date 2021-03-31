import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Seat from "../../components/Seat";
import '../../styles/TicketRoom.css'
import { getTicketRoom } from "../../actions/TicketRoom"
import { getBooking } from "../../actions/Booking"

// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';



import { Redirect } from "react-router-dom";


import { } from "react-router-dom";





const useStyles = makeStyles({
  btn__booking: {
    width: "100%",
    transition: "all 0.3s",
    backgroundColor: "#44c020",
    fontSize: '24px',
    color: 'white',
    '&:hover': {
      backgroundColor: "#009900",

    }
  },
  popupTitle: {
    color: 'black',
    fontSize: "18px",
    width: "300px"
  },
  popupBtn: {
    paddingBottom: "18px"
  }
  ,
  popupBtnLeft: {
    marginRight: "20px",
  }
})

export default function TicketRoom(props) {
  const classes = useStyles();
  const dispatch = useDispatch();


  // lưu danh sách ghế: tên ghế
  const [listSeat, setListSeat] = useState([]);

  // luu tru toan bộ giá vé dùng để render ra tổng tiền
  const [giaVe, setGiaVe] = useState([]);

  //lưu danh sách vé{maGhe,giaVe}
  const [danhSachVe, setDanhSachVe] = useState([]);

  const { ticketRoom } = useSelector((state) => state.ticketRoomReducer)
  const { currentUser } = useSelector(state => state.authReducers)
  // const { booking, loading, error } = useSelector(state => state.bookingReducer)

  // !@$#!$@@#!@
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

  const arrLogo = [
    "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
    "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
    "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
    "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
    "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png"
  ]
  let logo = []
  // 


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  //  hàm thêm ghế vào danh sách ghê
  const handleListSeat = (seat) => {
    const arr = listSeat;
    const arr1 = giaVe;
    const cloneDanhSachVe = danhSachVe;
    const checkArr = arr.findIndex((item) => item === seat[0]);
    const ve = { maGhe: seat[2], giaVe: seat[1] }
    if (checkArr === -1) {
      setListSeat([...listSeat, seat[0]]);
      setGiaVe([...giaVe, seat[1]])
      setDanhSachVe([...danhSachVe, ve])
    }
    else {
      arr.splice(checkArr, 1);
      arr1.splice(checkArr, 1)
      cloneDanhSachVe.splice(checkArr, 1)
      setListSeat([...arr])
      setGiaVe([...arr1])
      danhSachVe.slice([...cloneDanhSachVe])
    }
  }


  const reState = () => {
    setTimeout(() => {

      window.location.reload(false);
    }, 1000);
  }





  // hàm đặt vế
  const handleBooking = () => {
    // lấy id từ trên url  params :ticketRoomId
    const id = props.match.params.ticketRoomId;
    // lấy user từ localStorage để lấy accesssToken người dùng
    const json = localStorage.getItem('user');
    const user = JSON.parse(json)



    const value = {
      "maLichChieu": id,
      "danhSachVe": danhSachVe,
      "taiKhoanNguoiDung": user.maLoaiNguoiDung
    };
    dispatch(getBooking(value))
    handleClose();
    reState();


  }




//  vì không có API lấy logo nên tạo ra 1 arr chứa url ảnh của rạm
  const setLogo = () => {
    //  gián biến name = 3 ký tự đầu của tên rạp
    const name = ticketRoom?.thongTinPhim?.tenCumRap.slice(0, 3).toUpperCase()
    
    //  dựa vào biến name để chọn logo đúng
    switch (name) {
      case "CGV": {
        logo = arrLogo[1];
        break;
      }
      case "CNS": {
        logo = arrLogo[2];
        break;
      }
      case "GLX": {
        logo = arrLogo[3];
        break;
      }
      case "LOT": {
        logo = arrLogo[4];
        break;
      }
      case "MEG": {
        logo = arrLogo[5];
        break;
      }


      default:
        logo = arrLogo[0];
        break;
    }
  }

  setLogo()


  // dùng để kiểm tra user có đăng nhập chưa nếu chưa thì đẩy về trang logins
  if (!currentUser) {

    return <Redirect to="/login" />;
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
              <div className='logoCinema'
              >
                <img src={logo} alt="logo" />
              </div>
              <div className='contentCinema'>
                <p className='address'>
                  <span className='nameCinema'>{ticketRoom?.thongTinPhim?.tenCumRap} </span>

                  <span className='addressCinema'>- {ticketRoom?.thongTinPhim?.diaChi}  </span>
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

              {giaVe?.reduce((total, item) => { return total + item }, 0)} Đ
            </div>

            <div className="row-film">
              <h3>{ticketRoom?.thongTinPhim?.tenPhim} </h3>
              <p> {ticketRoom?.thongTinPhim?.tenCumRap}</p>
              <p>{ticketRoom?.thongTinPhim?.ngayChieu}  - {ticketRoom?.thongTinPhim?.gioChieu} -{ticketRoom?.thongTinPhim?.tenRap} </p>
            </div>
            <div className={listSeat?.length ? "row-listSeat" : ''}>

              {listSeat.map((seat) => {

                return (
                  <span key={seat}>{seat}</span>
                )
              })}
            </div>
            <div className='infoUser'>
              <input type="text" name='emailCheckout' id="emailCheckout" required />
              <label htmlFor="emailCheckout" className='label-emailCheckout' >

                <span className='span-emailCheckout'>E-Mail </span>
              </label>
            </div>
            <div className='infoUser'>
              <input type="text" id="emailCheckout" />
              <label htmlFor="emailCheckout" className='label-phoneCheckout' >
                <span className='span-phoneCheckout'>Phone</span>
              </label>
            </div>

            <div className="btn-checkout">
              <Button

                className={classes.btn__booking}

                onClick={handleClickOpen}
                disabled={listSeat.length ? false : true}
              >

                Đặt vé
            </Button>
            </div>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"

            >

              <DialogContent>
                <DialogContentText id="alert-dialog-description"
                  className={classes.popupTitle}
                >
                  Bạn có muốn đặt vé không ?
                </DialogContentText>
              </DialogContent>
              <DialogActions
                className={classes.popupBtn}
              >

                <Button onClick={() => handleBooking()}
                  variant="contained"
                  color="primary"
                  autoFocus
                  className={classes.popupBtnLeft}
                >
                  Đồng ý
                </Button>

                <Button onClick={handleClose}
                  variant="contained"
                  color="secondary"
                  className={classes.popupBtnLeft}
                >
                  Không
              </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  )



}
