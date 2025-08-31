import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("Logtk");
console.log(token);
export const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "Application/JSON",
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
  },
});
