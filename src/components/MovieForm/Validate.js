const Validate = (formValues) => {
  //   console.log(formValues);
  const regexYoutubeLink = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
  const regexHinhAnhLink = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
  const regexDanhGia = /^([1-9]|10)$/;
  const regexDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
  const {
    tenPhim,
    biDanh,
    trailer,
    hinhAnh,
    danhGia,
    moTa,
    ngayKhoiChieu,
  } = formValues;
  let error = {};
  if (!tenPhim) {
    error.tenPhim = "Tên phim không được để trống";
  }
  if (!biDanh) {
    error.biDanh = "Bí danh không được để trống";
  }
  if (!trailer) {
    error.trailer = "Trailer không được để trống";
  }
  if (!hinhAnh) {
    error.hinhAnh = "Hình ảnh không được để trống";
  }
  if (!moTa) {
    error.moTa = "Mô tả không được để trống";
  }
  if (!danhGia) {
    error.danhGia = "Bạn phải nhập đánh giá không được để trống";
  }
  if (!regexYoutubeLink.test(trailer)) {
    error.trailer = "Trailer phải là link youtube";
  }
  if (!regexHinhAnhLink.test(hinhAnh)) {
    error.soDt = "Hình ảnh phải là link url";
  }
  if (!regexDanhGia.test(danhGia)) {
    error.danhGia = "Điểm đánh giá phải từ 0 tới 10";
  }
  if (!regexDate.test(ngayKhoiChieu)) {
    error.ngayKhoiChieu = "Ngày khởi chiếu phải định dạng dd/mm/yyyy";
  }
  return error;
};
export default Validate;
