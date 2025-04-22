import axios from "axios";
import Cookies from "js-cookie";

export const axiosClient = () => {
  const token = Cookies.get("Logtk");
  console.log(token);
  return axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
      "Content-Type": "Application/JSON",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
  });
};
