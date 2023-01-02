import * as dotenv from "dotenv";

import axios, { AxiosResponse } from "axios";

dotenv.config();

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
});

export const get = async (
  relativeUrl: string,
  params?: unknown
): Promise<AxiosResponse> => {
  try {
    const result = await axiosInstance.get(relativeUrl, { params });
    return result;
  } catch (error) {
    return error.response;
  }
};

export const post = async (
  relativeUrl: string,
  body: unknown,
  headers = {}
): Promise<AxiosResponse> => {
  try {
    const result = await axiosInstance.post(relativeUrl, body, { headers });
    return result;
  } catch (error) {
    return error.response;
  }
};
