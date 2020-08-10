import axios from "axios";

export default {
  getAllByDialogId: (id) => axios.get("/api/messages?dialog=" + id),
  removeById: (id) => axios.delete("/api/messages?id=" + id),
  send: (text, dialogId, attachments) =>
    axios.post("/api/messages", {
      text: text,
      dialog_id: dialogId,
      attachments,
    }),
};
