const updateItemInArr = (arr, updateItem, key) => {
  updateItem.soDt = updateItem.soDT;
  delete updateItem.soDT;
  let index = arr.findIndex((item) => item.taiKhoan === key);
  let newArr = arr.slice();
  newArr[index] = { ...updateItem };
  return newArr;
};

export default updateItemInArr;
