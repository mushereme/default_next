import axios from "../axios";
import https from "https";

import { mainConfig } from "../../config/config";

export const loadApi = async (props) => {
    
  var config = {
    url: mainConfig.JSON_URL,
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
      username: mainConfig.USERNAME,
      password: mainConfig.PASSWORD,
      command: props.command,
      parameters: {
        ...props.parameters
      }
    }
  };
  
  return await new Promise(async (resolve, reject) => {
    await axios(config).then((resp) => {
      if(resp.data.response.status === "success") {
        resolve(resp?.data?.response?.result || {});
      } else {
        reject(resp?.data?.response?.text);
      }
    }).catch((err) => {
      console.log("ERR: ", err.response);
      reject();
    })
  });
};