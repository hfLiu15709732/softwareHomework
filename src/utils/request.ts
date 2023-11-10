import axios from 'axios';
import proxy from '../configs/host';
import { ERROR_CODE, TOKEN_ERROR_CODE } from './responseCode';
import { Message, MessagePlugin } from 'tdesign-react';
import { removeToken } from './auth';
// import HistoryUtil from './historyUtil';

const env = import.meta.env.MODE || 'development';
const API_HOST = proxy[env].API;
// const navigate = H
const SUCCESS_CODE = 1;
const TIMEOUT = 5000;

export const instance = axios.create({
  baseURL: '/api',
  timeout: TIMEOUT,
  withCredentials: true,
});

instance.interceptors.response.use(
  // eslint-disable-next-line consistent-return
  (response) => {
    if (response.status === 200) {
      const { data } = response;
      if (data.code === SUCCESS_CODE) {
        return Promise.resolve(data);
      }
      return Promise.resolve(data);
    } else if (response.status in TOKEN_ERROR_CODE) {
      MessagePlugin.error('Token信息过期,请重新登录');
      removeToken();
      // navigate('/login/index');
    } else if (response.status in ERROR_CODE) {
      MessagePlugin.error('服务器错误,请稍后重试');
    }
    return Promise.reject(response?.data);
  },
  (e) => Promise.reject(e),
);

export default instance;
