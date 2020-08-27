import axios from "axios";
import { useSnackbar } from "notistack";

export function useGetConversations() {
  const { enqueueSnackbar } = useSnackbar();
  const token = localStorage.getItem("jwtToken");
  const config = {};
  config["headers"] = {
    Authorization: token,
  };

  const getConversations = () => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/chat/conversations`, config)
      .catch((err) => {
        enqueueSnackbar("Could not load chats", {
          variant: "error",
        });
      });
  };

  return getConversations;
}

export function useGetConversationMessages() {
  const { enqueueSnackbar } = useSnackbar();
  const token = localStorage.getItem("jwtToken");
  const config = {};
  config["headers"] = {
    Authorization: token,
  };

  const getConversationMessages = (id) => {
    return axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/chat/converastions/query?userId=${id}`,
        config
      )
      .catch((err) => {
        enqueueSnackbar("Could not load chats", {
          variant: "error",
        });
      });
  };

  return getConversationMessages;
}

export function useSendConversationMessage() {
  const { enqueueSnackbar } = useSnackbar();
  const token = localStorage.getItem("jwtToken");
  const config = {};
  config["headers"] = {
    Authorization: token,
  };
  const requestOptions = {
    config,
    body: JSON.stringify({ to: id, body: body }),
  };

  const sendConversationMessage = (id, body) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}/api/chat`, requestOptions)
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Could send message", {
          variant: "error",
        });
      });
  };

  return sendConversationMessage;
}
