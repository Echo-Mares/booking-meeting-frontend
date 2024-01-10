import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3008/",
  timeout: 3000,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // axios 对于 400 多、500 多的请求，都会抛出错误。
    console.log('error',error)
    return error?.response || null;
  }
);

export async function login(username: string, password: string) {
  return await axiosInstance.post("/user/login", {
    username,
    password,
  });
}
