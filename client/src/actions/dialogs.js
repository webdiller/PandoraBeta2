import { dialogsApi } from "../utils/api";
import socket from "../core/socket";

const dialogsActions = {
  setDialogs: (items) => ({
    type: "DIALOGS:SET_ITEMS",
    payload: items,
  }),
  updateReadedStatus: ({ userId, dialogId }) => ({
    type: "DIALOGS:LAST_MESSAGE_READED_STATUS",
    payload: {
      userId,
      dialogId,
    },
  }),
  setCurrentDialogId: (id) => (dispatch) => {
    socket.emit("DIALOGS:JOIN", id);
    dispatch({
      type: "DIALOGS:SET_CURRENT_DIALOG_ID",
      payload: id,
    });
  },
  fetchDialogs: () => (dispatch) => {
    dialogsApi.getAll().then(({ data }) => {
      dispatch(dialogsActions.setDialogs(data));
    });
  },
};

export default dialogsActions;
