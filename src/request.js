import axios from "axios";
axios.interceptors.request.use(
  function (config) {
    console.log(config);
    if (config.url.includes("png")) {
      config.responseType = "blob";
    }
    config.headers["Token"] = "xxxx";
    if (config.method === "get") {
      config.params = { ...config.data };
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    if (response.headers["content-type"].includes("image")) {
      return URL.createObjectURL(new Blob([response.data]));
    }
    return response.data?.formats;
  },
  function (error) {
    alert(error.response?.data?.code || error.message);
    return Promise.reject(error.response?.data);
  }
);
const requestFactory = ({ status, type, method }) => {
  return (params) => {
    let data = null;
    if (Object.prototype.toString.call(params) === "[object FormData]") {
      data = params;
    } else {
      data = {
        ...params,
        real: 1,
      };
    }
    const res = axios({
      method,
      url: `/api/${type}/${status}`,
      data,
    });
    return res;
  };
};

const Get200 = requestFactory({ status: 200, type: "json", method: "get" });
const Post200 = requestFactory({ status: 200, type: "json", method: "post" });
const Get200PNG = requestFactory({ status: 200, type: "png", method: "get" });
const PostUpload = requestFactory({ status: 200, type: "png", method: "post" });

export default {
  Get200,
  Post200,
  Get200PNG,
  PostUpload,
};
