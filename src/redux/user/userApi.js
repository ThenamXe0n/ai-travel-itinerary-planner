import { axiosClient } from "../../webServices/axiosInstance";

export const meAPI = async () => {
  try {
    const response = await axiosClient.get("/me");
    return response.data;
  } catch (err) {
    return {
      status: false,
      data: null,
      message: err.message,
    };
  }
};
