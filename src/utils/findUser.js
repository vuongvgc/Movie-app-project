const findUser = (userArr, user) => {
  let index = userArr.findIndex((item) => item.taiKhoan === user);
  return userArr[index];
};

export default findUser;
