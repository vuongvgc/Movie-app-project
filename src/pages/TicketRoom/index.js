import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Seat from "../../components/Seat";
import '../../styles/TicketRoom.css'
import { getTicketRoom } from "../../actions/TicketRoom"
import { getBooking } from "../../actions/Booking"

import Loading from "../../components/Loading"
import Error from "../../components/Error"
// material-ui
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

// icon
import { TiTickOutline } from "react-icons/ti";
import { VscError } from "react-icons/vsc";
import { MdEventSeat } from 'react-icons/md'
import { NavLink } from "react-router-dom";





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
  },
  popupTitle2: {
    color: 'black',
    fontSize: "18px",
    width: "360px",
    textAlign: "center"
  },
  popupBtn2: {
    paddingBottom: "18px",
    textAlign: "center",
  },
  icon: {
    color: "#61affe",
    width: "55px",
    height: "55px",
    border: " 4px solid #61affe",
    borderRadius: "50%",
    textAlign: "center"
  },
  icon2: {
    color: "#e91e63",
    width: "55px",
    height: "55px",

    borderRadius: "50%",
    textAlign: "center"
  }
  ,
  btnNav: {
    backgroundColor: "#61affe",
    marginRight: "20px",
    '&:hover': {
      backgroundColor: "#3480cd"
    }
  },
  btnError: {
    backgroundColor: "#e91e63",
    marginRight: "20px",
    '&:hover': {
      backgroundColor: "#d11d5a"
    }
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


  const { ticketRoom, loadingTicketRoom, errorTicketRoom } = useSelector((state) => state.ticketRoomReducer)
  const { currentUser } = useSelector(state => state.authReducers)
  // const { booking, loading, error } = useSelector(state => state.bookingReducer)
  const { booking, error } = useSelector(state => state.bookingReducer)

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

  }, [dispatch,props.match.params.ticketRoomId]);

  const arrLogo = [
    "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
    "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
    "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
    "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
    "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png"
  ]
  let logo = []



  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [mess, setMess] = useState(false);

  const handleMessage = () => {
    setMess(!mess);
  }

  const reset = () => {
    const temp = [];
    setDanhSachVe(temp);
    setGiaVe(temp);
    setListSeat(temp);
  }

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


  // hàm đặt vế
  const handleBooking = () => {
    // lấy id từ trên url  params :ticketRoomId
    const id = props.match.params.ticketRoomId;
    // lấy user từ localStorage để lấy accesssToken người dùng
    const json = localStorage.getItem('user');
    const user = JSON.parse(json)

    const value = {
      maLichChieu: id,
      danhSachVe: danhSachVe,
      taiKhoanNguoiDung: user.taiKhoan
    };
    dispatch(getBooking(value))
    setTimeout(() => {
      dispatch(getTicketRoom(id))
    }, 0);

    handleClose();
    handleMessage();
    reset();
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
  // if (!currentUser) {

  //   return <Redirect to="/login" />;
  // }



  return (

    <div className='checkout'>
      
      { errorTicketRoom ? <Error /> :

        loadingTicketRoom ?
          <Loading /> :
          <>
            <div className='row mainCheckout'>
              <div className="col-md-9 checkout-content">
                <div className="headerCheckout row">
                  <ul className='stepCheckout'>
                    <li>

                      <NavLink to="/">
                        Trang Chủ
                </NavLink>
                    </li>
                    <li>
                      <NavLink to="/user/information">
                        Thay đổi Thông Tin
                </NavLink>

                    </li>
                    <li>


                    </li>
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
                        <span key={item.maGhe}
                          className="seatItem"
                        >
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
                        <span key={item.maGhe}
                          className="seatItem"
                        >

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
                        <span key={item.maGhe}
                          className="seatItem"
                        >

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
                        <span key={item.maGhe}
                          className="seatItem"
                        >

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
                        <span key={item.maGhe}
                          className="seatItem"
                        >

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
                        <span key={item.maGhe}
                          className="seatItem"
                        >

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
                        <span key={item.maGhe}
                          className="seatItem"
                        >

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
                        <span key={item.maGhe}
                          className="seatItem"
                        >

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
                        <span key={item.maGhe}
                          className="seatItem"
                        >

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
                        <span key={item.maGhe}
                          className="seatItem"
                        >

                          <Seat
                            item={item}
                            onListSeat={(seatId) => handleListSeat(seatId)} />
                        </span>
                      )
                    })}
                  </div>
                </div>

                <div className="seatInfo">
                  <span > <MdEventSeat className="seatInfo-thuong" /> <br/><span>Ghế Thường</span> </span>
                  <br/>
                  <span > <MdEventSeat className="seatInfo-vip" />  <br/> <span> Ghế Vip</span> </span>
                  <br/>
                  <span > <MdEventSeat className="seatInfo-daDat" /> <br/> <span>Ghế Đã Được Đặt</span> </span>
                  <br/>
                  <span > <MdEventSeat className="seatInfo-select" /> <br/> <span>Ghế Đang Chọn</span> </span>
                  
                </div>

              </div>

              <div className="col-md-3 checkout-side">
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
                    <input type="text" name='emailCheckout' id="emailCheckout"
                      value={currentUser?.email}
                      disabled
                      required />
                    <label htmlFor="emailCheckout" className='label-emailCheckout' >

                      <span className='span-emailCheckout' >E-Mail </span>
                    </label>
                  </div>

                  <div className='infoUser'>
                    <input type="text" id="phoneCheckout"
                      value={currentUser?.soDT}
                      disabled
                    />
                    <label htmlFor="phoneCheckout" className='label-phoneCheckout' >
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
                  {
                    error ?
                      <>
                        <Dialog
                          open={mess}
                          onClose={handleMessage}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >

                          <>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description"
                                className={classes.popupTitle2}
                              >
                                <span className="popUp-alert">Xảy ra lỗi khi đặt vé.</span>
                                <br />

                              </DialogContentText>
                              <div className="text-center">
                                <VscError className={classes.icon2} />
                              </div>
                            </DialogContent>
                            <DialogActions
                              className={classes.popupBtn2}
                            >
                              <Button size="large"

                                autoFocus className={classes.btnError}>

                                <NavLink to="/" className="nav-checkTicket">
                                  <span className='lanif2'
                                  >VỀ TRANG CHỦ !    </span>
                                </NavLink>
                              </Button>
                            </DialogActions>
                          </>
                        </Dialog>
                      </> :
                      <>
                        <Dialog
                          open={mess}
                          onClose={handleMessage}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >

                          <>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description"
                                className={classes.popupTitle2}
                              >
                                <span className="popUp-alert">{booking}</span>
                                <br />

                              </DialogContentText>
                              <div className="text-center">
                                <TiTickOutline className={classes.icon} />
                              </div>
                            </DialogContent>
                            <DialogActions
                              className={classes.popupBtn2}
                            >

                              <Button size="large"

                                autoFocus className={classes.btnNav}>
                                <NavLink to="/user/movie" className="nav-checkTicket">
                                  <span className='lanif' >
                                    Xem vé đã đặt
                          </span>
                                </NavLink>
                              </Button>

                              <Button onClick={handleMessage}
                                variant="contained"
                                color="primary"
                                className={classes.btnNav}
                              >
                                <span className='lanif'>Đặt thêm...</span>
                              </Button>
                            </DialogActions>
                          </>
                        </Dialog>

                      </>


                  }


                </div>
              </div>
            </div>
            <div className="btn-checkout2 d-block d-md-none">
              <Button

                className={classes.btn__booking}

                onClick={handleClickOpen}
                disabled={listSeat.length ? false : true}
              >
                Đặt vé
            </Button>
            </div>
          </>



      }

    </div>
  )



}
