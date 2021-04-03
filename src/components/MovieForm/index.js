import React from "react";
import { Field, reduxForm } from "redux-form";
import renderInput from "../Form/renderInput";
import Validate from "./Validate";
class MovieForm extends React.Component {
  render() {
    // console.log(this.props)
    return (
      <form>
        <Field name="tenPhim" component={renderInput} label="Tên Phim" />
        <Field name="biDanh" component={renderInput} label="Bí Danh" />
        <Field name="trailer" component={renderInput} label="Trailer" />
        <Field name="hinhAnh" component={renderInput} label="Hình Ảnh" />
        <Field name="moTa" component={renderInput} label="Mô tả" />
        <Field
          name="ngayKhoiChieu"
          component={renderInput}
          label="Ngày Khởi Chiếu"
        />
        {this.props.wrongAuth ? (
          <div className="alert alert-danger">{this.props.wrongAuth}</div>
        ) : (
          ""
        )}
      </form>
    );
  }
}
export default reduxForm({
  form: "movieForm",
  validate: Validate,
})(MovieForm);
