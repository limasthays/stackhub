import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 10000
})