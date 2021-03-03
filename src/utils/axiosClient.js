import axios from "axios";
const axiosClient = axios.create({
  baseURL: "https://movie0706.cybersoft.edu.vn/api",
});
export default axiosClient;
