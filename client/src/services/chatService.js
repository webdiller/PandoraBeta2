import axios from "axios";

const apiEndpoint =
  process.env.REACT_APP_SERVICE_API || "http://localhost:5000/api";
const serviceEndpoint = apiEndpoint + "/chats";

export const getChats = async (channel, limit, config) => {
  const query = `limit=${limit}`;
  const token = localStorage.getItem("jwtToken");
  config["headers"] = {
    Authorization: token,
  };

  return await axios.get(`${serviceEndpoint}/${channel}?${query}`, config);
};

export async function sendChat(msgObj, config) {
  const token = localStorage.getItem("jwtToken");
  config["headers"] = {
    Authorization: token,
  };

  return await axios.post(serviceEndpoint, msgObj, config);
}

export async function getPrivateChannels(pbkHash, config) {
  const token = localStorage.getItem("jwtToken");
  config["headers"] = {
    Authorization: token,
  };

  return await axios.get(
    `${serviceEndpoint}/privateChannels/${pbkHash}`,
    config
  );
}

export async function seenChat(chatId, config) {
  const token = localStorage.getItem("jwtToken");
  config["headers"] = {
    Authorization: token,
  };

  return await axios.put(`${serviceEndpoint}/seen/${chatId}`, {}, config);
}
