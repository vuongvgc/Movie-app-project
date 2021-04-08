const deleteMovieInArr = (arr, deleteItem) => {
  let newUserList = arr.filter((item) => item.maPhim !== deleteItem);
  return newUserList;
};

export default deleteMovieInArr;
