const addItemInArr = (arr, addItem) => {
  let newArr = arr.slice();
  newArr.unshift(addItem);
  return newArr;
};

export default addItemInArr;
