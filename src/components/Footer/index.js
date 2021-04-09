import {
  Box,
  Container,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import theater1 from "../../assets/image/theaters/bhd.jpg";
import theater2 from "../../assets/image/theaters/cgv.jpg";
import theater3 from "../../assets/image/theaters/cine.jpg";
import theater4 from "../../assets/image/theaters/cinestar.jpg";
import theater5 from "../../assets/image/theaters/dd.jpg";
import theater6 from "../../assets/image/theaters/flamingo.jpg";
import theater7 from "../../assets/image/theaters/galaxy.jpg";
import theater8 from "../../assets/image/theaters/lotte.jpg";
import theater9 from "../../assets/image/theaters/mega.jpg";
import ios from "../../assets/image/devices/appstore.png";
import android from "../../assets/image/devices/playstore.png";
import facebook from "../../assets/image/social/facebook.png";
import zalo from "../../assets/image/social/zalo.jpg";
import instagram from "../../assets/image/social/instagram.png";
import youtube from "../../assets/image/social/youtube.png";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIphoneRoundedIcon from "@material-ui/icons/PhoneIphoneRounded";
import MailRoundedIcon from "@material-ui/icons/MailRounded";
import styles from "./style";
import LazyLoad from "react-lazyload";
const Footer = ({ classes }) => {
  return (
    <div id="footer" className={classes.compFooter} name="Footer">
      <Container maxWidth="lg">
        <Box className={classes.contentFooter}>
          <Box className={classes.itemContentFooter}>
            <Typography
              style={{
                marginBottom: 15,
                fontWeight: "bold",
                fontSize: "1.2rem",
                color: "white",
              }}
            >
              VPVCENTER
            </Typography>
            <Box>
              <Link
                className={classes.styleLink}
                to={{ pathname: "https://www.facebook.com/minhphuc219" }}
                target="_blank"
              >
                <Typography>FAQ</Typography>
              </Link>
              <Link
                className={classes.styleLink}
                to={{ pathname: "https://www.facebook.com/vuongvgc" }}
                target="_blank"
              >
                <Typography>Điều khoản VPVCenter</Typography>
              </Link>
              <Link
                className={classes.styleLink}
                to={{ pathname: "https://www.facebook.com/cainaylaurl" }}
                target="_blank"
              >
                <Typography>Thỏa thuận sử dụng</Typography>
              </Link>
              <Link
                className={classes.styleLink}
                to={{ pathname: "https://github.com/flashphuc" }}
                target="_blank"
              >
                <Typography>Chính sách bảo mật</Typography>
              </Link>
              <Link
                className={classes.styleLink}
                to={{ pathname: "https://github.com/vuongvgc" }}
                target="_blank"
              >
                <Typography>Chăm sóc khách hàng</Typography>
              </Link>
              <Link
                className={classes.styleLink}
                to={{ pathname: "https://github.com/BuiVoQuangVinh" }}
                target="_blank"
              >
                <Typography>Giấy phép bản quyền</Typography>
              </Link>
            </Box>
          </Box>
          <Box className={classes.itemContentFooter}>
            <Typography
              style={{
                fontWeight: "bold",
                marginBottom: 15,
                fontSize: "1.2rem",
                color: " white",
              }}
            >
              ĐỐI TÁC
            </Typography>
            <Grid
              container
              alignItems="center"
              className={classes.gridLogoPartner}
            >
              <Grid container item md={3} sm={6} xs={3}>
                <Link
                  className={classes.styleLogoPartner}
                  to={{ pathname: "https://www.bhdstar.vn/" }}
                  target="_blank"
                >
                  <LazyLoad once={true}>
                    <img
                      src={theater1}
                      alt="logo-partner"
                      style={{ width: 40, height: 40, borderRadius: "50%" }}
                    />
                  </LazyLoad>
                </Link>
              </Grid>
              <Grid container item md={3} sm={6} xs={3}>
                <Link
                  className={classes.styleLogoPartner}
                  to={{ pathname: "https://www.cgv.vn/" }}
                  target="_blank"
                >
                  <LazyLoad once={true}>
                    <img
                      src={theater2}
                      alt="logo-partner"
                      style={{ width: 40, height: 40, borderRadius: "50%" }}
                    />
                  </LazyLoad>
                </Link>
              </Grid>
              <Grid container item md={3} sm={6} xs={3}>
                <Link
                  className={classes.styleLogoPartner}
                  to={{ pathname: "http://www.cinebox.vn/" }}
                  target="_blank"
                >
                  <LazyLoad once={true}>
                    <img
                      src={theater3}
                      alt="logo-partner"
                      style={{ width: 40, height: 40, borderRadius: "50%" }}
                    />
                  </LazyLoad>
                </Link>
              </Grid>
              <Grid container item md={3} sm={6} xs={3}>
                <Link
                  className={classes.styleLogoPartner}
                  to={{ pathname: "https://cinestar.com.vn/" }}
                  target="_blank"
                >
                  <LazyLoad once={true}>
                    <img
                      src={theater4}
                      alt="logo-partner"
                      style={{ width: 40, height: 40, borderRadius: "50%" }}
                    />
                  </LazyLoad>
                </Link>
              </Grid>
              <Grid container item md={3} sm={6} xs={3}>
                <Link
                  className={classes.styleLogoPartner}
                  to={{ pathname: "http://ddcinema.vn/" }}
                  target="_blank"
                >
                  <LazyLoad once={true}>
                    <img
                      src={theater5}
                      alt="logo-partner"
                      style={{ width: 40, height: 40, borderRadius: "50%" }}
                    />
                  </LazyLoad>
                </Link>
              </Grid>
              <Grid container item md={3} sm={6} xs={3}>
                <Link
                  className={classes.styleLogoPartner}
                  to={{ pathname: "http://flamingoresorts.vn/vi/trang-chu" }}
                  target="_blank"
                >
                  <LazyLoad once={true}>
                    <img
                      src={theater6}
                      alt="logo-partner"
                      style={{ width: 40, height: 40, borderRadius: "50%" }}
                    />
                  </LazyLoad>
                </Link>
              </Grid>
              <Grid container item md={3} sm={6} xs={3}>
                <Link
                  className={classes.styleLogoPartner}
                  to={{ pathname: "https://www.galaxycine.vn/" }}
                  target="_blank"
                >
                  <LazyLoad once={true}>
                    <img
                      src={theater7}
                      alt="logo-partner"
                      style={{ width: 40, height: 40, borderRadius: "50%" }}
                    />
                  </LazyLoad>
                </Link>
              </Grid>
              <Grid container item md={3} sm={6} xs={3}>
                <Link
                  className={classes.styleLogoPartner}
                  to={{ pathname: "http://www.lottecinemavn.com/" }}
                  target="_blank"
                >
                  <LazyLoad once={true}>
                    <img
                      src={theater8}
                      alt="logo-partner"
                      style={{ width: 40, height: 40, borderRadius: "50%" }}
                    />
                  </LazyLoad>
                </Link>
              </Grid>
              <Grid container item md={3} sm={6} xs={3}>
                <Link
                  className={classes.styleLogoPartner}
                  to={{ pathname: "https://www.megagscinemas.vn/" }}
                  target="_blank"
                >
                  <LazyLoad once={true}>
                    <img
                      src={theater9}
                      alt="logo-partner"
                      style={{ width: 40, height: 40, borderRadius: "50%" }}
                    />
                  </LazyLoad>
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.itemContentFooter}>
            <Typography
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontSize: "1.2rem",
                color: "white",
              }}
            >
              ỨNG DỤNG TRÊN ĐIỆN THOẠI
            </Typography>
            <Box display="block">
              <Link
                style={{ cursor: "pointer" }}
                to={{ pathname: "https://www.apple.com/app-store/" }}
                target="_blank"
              >
                <LazyLoad once={true}>
                  <img
                    src={ios}
                    alt="logo-os"
                    className={classes.styleImgOS}
                    style={{ marginBottom: 2 }}
                  />
                </LazyLoad>
              </Link>
            </Box>
            <Box display="block">
              <Link
                style={{ cursor: "pointer" }}
                to={{ pathname: "https://play.google.com/store" }}
                target="_blank"
              >
                <LazyLoad once={true}>
                  <img
                    src={android}
                    alt="logo-os"
                    className={classes.styleImgOS}
                  />
                </LazyLoad>
              </Link>
            </Box>
          </Box>
          <Box className={classes.itemContentFooter}>
            <Typography
              style={{
                fontWeight: "bold",
                marginBottom: 15,
                fontSize: "1.2rem",
                color: "white",
              }}
            >
              KẾT NỐI VỚI CHÚNG TÔI
            </Typography>
            <Grid
              container
              alignItems="center"
              className={classes.gridLogoSocial}
            >
              <Grid container item md={3} sm={6} xs={3}>
                <Link
                  className={classes.styleLogoPartner}
                  to={{ pathname: "https://zalo.me/0372993412" }}
                  target="_blank"
                >
                  <LazyLoad once={true}>
                    <img
                      src={facebook}
                      alt="logo-social"
                      style={{ width: 40, height: 40, borderRadius: 10 }}
                    />
                  </LazyLoad>
                </Link>
              </Grid>
              <Grid container item md={3} sm={6} xs={3}>
                <Link
                  className={classes.styleLogoPartner}
                  to={{ pathname: "https://zalo.me/0906686281" }}
                  target="_blank"
                >
                  <LazyLoad once={true}>
                    <img
                      src={zalo}
                      alt="logo-social"
                      style={{ width: 40, height: 40, borderRadius: 10 }}
                    />
                  </LazyLoad>
                </Link>
              </Grid>
              <Grid container item md={3} sm={6} xs={3}>
                <Link
                  className={classes.styleLogoPartner}
                  to={{ pathname: "https://zalo.me/0789200396" }}
                  target="_blank"
                >
                  <LazyLoad once={true}>
                    <img
                      src={instagram}
                      alt="logo-social"
                      style={{ width: 40, height: 40, borderRadius: 10 }}
                    />
                  </LazyLoad>
                </Link>
              </Grid>
              <Grid container item md={3} sm={6} xs={3}>
                <Link
                  className={classes.styleLogoPartner}
                  to={{ pathname: "https://www.facebook.com/minhphuc219/" }}
                  target="_blank"
                >
                  <LazyLoad once={true}>
                    <img
                      src={youtube}
                      alt="logo-social"
                      style={{ width: 40, height: 40, borderRadius: 10 }}
                    />
                  </LazyLoad>
                </Link>
              </Grid>
            </Grid>
            <Typography
              style={{
                fontWeight: "bold",
                margin: "15px 0 10px 0",
                color: "white",
              }}
            >
              LIÊN HỆ
            </Typography>
            <Box className={classes.boxContact}>
              <Box display="flex" mb={1}>
                <RoomIcon />
                <div>
                  <h5>Ho Chi Minh City, VietNam</h5>
                </div>
              </Box>
              <Box display="flex" mb={1}>
                <MailRoundedIcon />
                <div>
                  <h5>VPVCENTER@gmail.com</h5>
                </div>
              </Box>
              <Box display="flex">
                <PhoneIphoneRoundedIcon />
                <div>
                  <h5>0372993412</h5>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box style={{ textAlign: "center" }}>
          <Typography style={{ fontWeight: 500 }}>
            Đồ án cuối khóa - CyberSoft Academy
          </Typography>

          <Typography>© 2021. All Rights Reserved.</Typography>
        </Box>
      </Container>
    </div>
  );
};
export default withStyles(styles)(React.memo(Footer));
