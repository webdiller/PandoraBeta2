import { axios } from "../../core";

export default {
  getAll: () => axios.get("/api/chats"),
  create: ({ partner, text }) => axios.post("/api/chats", { partner, text })
};
