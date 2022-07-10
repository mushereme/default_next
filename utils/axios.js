import axios from "axios";
import { mainConfig } from "../config/config.js";

const instance = axios.create({
  baseURL: mainConfig.BACKEND_URL
});

instance.defaults.withCredentials = false;

export default instance;