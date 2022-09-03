import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDliZjYxNDk2NTQxOGViMmQ2MDI5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjA4OTkyNCwiZXhwIjoxNjYyMzQ5MTI0fQ.2fGwCwFcbKHOPWbkmFjhq2cnCngNijbC3Ft_p8q6MHQ";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
