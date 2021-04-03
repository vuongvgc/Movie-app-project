import React from "react";
import { Field, reduxForm } from "redux-form";
import renderInput from "../Form/renderInput";
import Validate from "./Validate";
class MovieForm extends React.Component {
  onSubmit = (formValue) => {
    this.props.onSubmit(formValue);
  };
  render() {
    // console.log(this.props)
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="tenPhim" component={renderInput} label="Tên Phim" />
        <Field name="biDanh" component={renderInput} label="Bí Danh" />
        <Field
          name="trailer"
          component={renderInput}
          label="Trailer"
          placeholder="https://youtu.be/uVa1lTvmVhs"
        />
        <Field
          name="hinhAnh"
          component={renderInput}
          label="Hình Ảnh"
          placeholder="https://media.vov.vn/sites/default/files/styles/large/public/2020-12/bo_gia_teaser_1_.jpg"
        />
        <Field name="moTa" component={renderInput} label="Mô tả" />
        <Field
          name="danhGia"
          component={renderInput}
          label="Đánh Giá"
          placeholder="Từ 0 đến 10"
        />
        <Field
          name="ngayKhoiChieu"
          component={renderInput}
          label="Ngày Khởi Chiếu"
          placeholder="21/03/2021"
        />
        {this.props.wrongAuth ? (
          <div className="alert alert-danger">{this.props.wrongAuth}</div>
        ) : (
          ""
        )}
        <button className="btn btn-primary m-2">Thêm Phim</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
          Đóng
        </button>
      </form>
    );
  }
}
export default reduxForm({
  form: "movieForm",
  validate: Validate,
})(MovieForm);
