import axios from "axios";
import { getAccessToken } from "libs/functions";

axios.defaults.baseURL = "http://localhost:3000/api";

const options = {
  headers: {
    Authorization: "Bearer " + getAccessToken(),
  },
};

export const loginUser = async (body: any) => {
  const response = await axios.post("/auth/login", body).catch((err) => {
    throw new Error(err);
  });

  return response;
};

export const getUsers = async () => {
  const response = await axios.get("/users", options).catch((err) => {
    throw new Error(err);
  });
  return response;
};

export const getMe = async () => {
  const response = await axios.get("/users/me", options).catch((err) => {
    throw new Error(err);
  });

  return response;
};
