const Validate = (formValues) => {
  //   console.log(formValues);
  const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
  const regexEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
  const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  const { taiKhoan, matKhau, nhapLaiMatKhau, hoTen, email, soDT } = formValues;
  let error = {};
  if (!taiKhoan) {
    error.taiKhoan = "Bạn phải nhập tài khoản";
  }
  if (!matKhau) {
    error.matKhau = "Bạn phải nhập mật khẩu";
  }
  if (!nhapLaiMatKhau) {
    error.nhapLaiMatKhau = "Bạn phải nhập mật khẩu";
  }
  if (nhapLaiMatKhau !== matKhau) {
    error.nhapLaiMatKhau = "Mật khẩu không khớp nhau";
  }
  if (!hoTen) {
    error.hoTen = "Bạn phải nhập họ tên";
  }
  if (!regexName.test(hoTen)) {
    error.hoTen = "Họ tên không hợp lệ";
  }
  if (!email) {
    error.email = "Bạn phải nhập email";
  }
  if (!regexEmail.test(email)) {
    error.email = "Email không hợp lệ";
  }
  if (!soDT) {
    error.soDt = "Bạn phải nhập số điện thoại";
  }
  if (!regexPhoneNumber.test(soDT)) {
    error.soDT = "Số điện thoại không hợp lệ";
  }
  return error;
};
export default Validate;
