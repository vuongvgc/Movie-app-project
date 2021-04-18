const findTheaterList = (cumRap, maCumRap) => {
  let index = cumRap.findIndex((item) => item.maCumRap === maCumRap);
  let danhSachRap = cumRap[index].danhSachRap;
  return danhSachRap;
};

export default findTheaterList;
