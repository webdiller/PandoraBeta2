import axios from "axios";

export default {
  signIn: (postData) => axios.post("/api/users/login", postData),
  signUp: (postData) => axios.post("/api/users/register", postData),
  getMe: () => axios.get("/api/users/current"),
  // findUsers: query => axios.get("/user/find?query=" + query)
};
