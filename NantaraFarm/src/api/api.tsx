import axios, { AxiosResponse } from "axios";

const url = "https://nantara-api.hoaks.my.id/api/";

export const post = async (
  api: string,
  form: any
): Promise<AxiosResponse<any, any>> => {
  return await axios.post(url + api, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const postWithAuth = async (
  api: string,
  form: any,
  token: string
): Promise<AxiosResponse<any, any>> => {
  return await axios.post(url + api, form, {
    headers: {
      // Accept: "multipart/form-data",
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + token, //Add this line
    },
  });
};

export const get = async (
  apiParams: string
): Promise<AxiosResponse<any, any>> => {
  return await axios.get(url + apiParams);
};

export const getWithAuth = async (
  token: string,
  apiParams: string
): Promise<AxiosResponse<any, any>> => {
  return await axios.get(url + apiParams, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token, //Add this line
    },
  });
};