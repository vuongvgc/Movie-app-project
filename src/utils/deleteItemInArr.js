const deleteItemInArr = (arr, deleteItem) => {
  let newUserList = arr.filter((item) => item.taiKhoan !== deleteItem);
  return newUserList;
};

export default deleteItemInArr;
