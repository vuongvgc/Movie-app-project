import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { NavLink } from "react-router-dom";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  console.log(props.isOpen);
  useEffect(() => {
    // console.log(props.isOpen);
    setOpen(props.isOpen);
  }, [props.isOpen]); //
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{"MOVIE APP"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Chúc mừng bạn đã đăng ký thành công !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <NavLink className="text-decoration-none" to="/">
              Về Trang Chủ
            </NavLink>
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            <NavLink className="text-decoration-none" to="/login">
              Đăng Nhập
            </NavLink>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
