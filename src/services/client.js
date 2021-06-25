import axios from "axios";

export const client = axios.create({
  baseURL: "https://banounadmin2.herokuapp.com/api",
  // timeout: 10000,
});
