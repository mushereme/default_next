import axios from "../axios";
import https from "https";

import { mainConfig } from "../../config/config";

export const loadApi = async (props) => {
    
  var config = {
    url: mainConfig.BACKEND_URL + props.url,
    method: props.method,
    header: {
      headers: {
        "Content-Type": "application/json"
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    },
    data: {
      ...props.parameters
    }
  };
  
  return await new Promise(async (resolve, reject) => {
    await axios(config).then((resp) => {
      // console.log("==RESP: ", resp);
      resolve(resp?.data?.data || {});
    }).catch((err) => {
      // console.log("ERR: ", err.response);
      reject(err.response?.data?.error);
    })
  });
};