import axios from "axios";

const renderApi = axios.create({
  baseURL: "http://localhost:3000/api", //process.env.NEXT_PUBLIC_DATABASE_URL, //env 수정 필요
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const ssrRenderApi = (cookies) =>
  axios.create({
    baseURL: "http://localhost:3000/api", //process.env.NEXT_PUBLIC_DATABASE_URL, //env 수정 필요
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies,
    },
    withCredentials: true,
  });

export default renderApi;
