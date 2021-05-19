import axios from "axios";
import pako from "pako";

export const ecomZ = (json) => {
  console.log("01", json);
  var encoded = unescape(encodeURIComponent(JSON.stringify(json)));
  console.log("02", json);
  var charData = encoded.split("").map(function (x) {
    return x.charCodeAt(0);
  });
  console.log("03", charData);
  var zippedResult = pako.gzip(charData, { to: "string" });

  console.log("04", json);

  var ss = btoa(zippedResult);
  return ss;

  console.log("05", json);
};

export const decomZ = (b64Data) => {
  var strData = atob(b64Data);
  var charData = strData.split("").map(function (x) {
    return x.charCodeAt(0);
  });
  var binData = new Uint16Array(charData);
  var data = pako.inflate(binData);
  try {
    var strData = new Uint8Array(data).reduce(function (data, byte) {
      return data + String.fromCharCode(byte);
    }, "");
  } catch (ex) {
    console.log(ex);
  }
  var result = decodeURIComponent(escape(strData));
  return JSON.parse(result.replace(/\t/g, ""));
};

// axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: "https://cloudapi.moto.mn:8181/erp-services/RestWS/runJson",
});

export default instance;
