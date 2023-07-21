import Axios, { AxiosError, AxiosRequestConfig } from "axios";
import { BASE_URL } from "@/config";

interface IRequest {
  url?: string;
  data?: object;
  params?: object;
  action: string;
  guest?: boolean;
  isFormData?: boolean;
  hideLoader?: boolean;
  method?: AxiosRequestConfig["method"];
  headers?: AxiosRequestConfig["headers"];
}

const createPath = (action: string) => {
  const url = `${BASE_URL}${action}`;

  return { url };
};

interface authType {
  method: any;
  url: String;
  data: any;
}

const CustomAxios = Axios.create();

CustomAxios.interceptors.request.use(
  (req) => {
    // const tokens = getAuthToken();
    req.headers = {
      ...req.headers
      //   Authorization: tokens?.accessToken
    };
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

CustomAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const originalReq = error.config;
    const status = error.response ? error.response.status : null;
    if (status === 401) {
      console.log("🚀 ~ file: api.ts:57 ~ status:", status);
    }
    console.error(error);
    return Promise.reject(error);
  }
);

const authRequest = async ({ method, url, data }: authType) => {
  try {
    const res = await Axios({
      method: method,
      url: BASE_URL + url,
      data: data
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};

const request = ({
  url,
  data,
  params,
  action,
  method,
  guest,
  isFormData,
  // guest = false,
  // hideLoader = false,
  headers: addHeaders
}: IRequest) =>
  new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": isFormData ? "multipart/form-data" : "application/json",

      ...addHeaders
    };

    const customUrl = createPath(action);
    const axiosFormDataConfig: AxiosRequestConfig = {
      data,
      params,
      headers,
      timeout: 60000,
      method: method || "post",
      transformRequest: (formdata, headers) => {
        return data;
      },
      url: url || customUrl.url
    };

    const axiosConfig: AxiosRequestConfig = {
      data,
      params,
      headers,
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      },
      timeout: 60000,
      method: method || "post",
      url: url || customUrl.url
    };

    CustomAxios(isFormData ? axiosFormDataConfig : axiosConfig)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error?.response?.data || error);
      });
  });

export default { request, authRequest };
