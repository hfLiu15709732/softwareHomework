import axios from 'axios';
import proxy from '../configs/host';
import { ERROR_CODE, TOKEN_ERROR_CODE } from './responseCode';
import { Message, MessagePlugin } from 'tdesign-react';
import { getToken, removeToken } from './auth';
// import HistoryUtil from './historyUtil';

const env = import.meta.env.MODE || 'development';
const API_HOST = proxy[env].API;
const SUCCESS_CODE = 1;
const TIMEOUT = 5000;

export const instance = axios.create({
  baseURL: '/api',
  timeout: TIMEOUT,
  withCredentials: true,
});

function requestStart(config: any): any {
  if (config.headers && !config.noToken) {
    console.log(config, 'config');

    config.headers.Authorization = `${getToken()}`;
    // 设置响应头信息为token
  }

  return config;
}

instance.interceptors.response.use(
  // eslint-disable-next-line consistent-return
  (response) => {
    if (response.status === 200) {
      const { data } = response;
      if (data.code === SUCCESS_CODE) {
        return Promise.resolve(data);
      }
      return Promise.resolve(data);
    }
    if (response.status in TOKEN_ERROR_CODE) {
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
/* 请求拦截 */
instance.interceptors.request.use(requestStart, (err) => Promise.reject(err));

function request(url: string, data: any, config: ConfigType, method: Method): any {
  /* 去空 */
  for (const key in data) {
    if (data[key] === null || data[key] === undefined) {
      delete data[key];
    }
  }

  return instance
    .request({
      baseURL: '/api',
      timeout: config.timeout || 5000, // 超时时间
      url,
      method,
      data: method === 'GET' ? null : data,
      params: method === 'GET' ? data : null, // get请求不携带data，params放在url上
      ...config, // 用户自定义配置，可以覆盖前面的配置
    })
    .then((res) => res)
    .catch((err) => {
      Promise.reject(err);
    });
}

/**
 * api请求方式
 * @param {String} url
 * @param {Any} params
 * @param {Object} config
 * @returns
 */
export function GET<T>(url: string, params = {}, config: any = {}): Promise<T> {
  return request(url, params, config, 'GET');
}

export function POST<T>(url: string, data = {}, config: any = {}): Promise<T> {
  return request(url, data, config, 'POST');
}

export function PUT<T>(url: string, data = {}, config: any = {}): Promise<T> {
  return request(url, data, config, 'PUT');
}

export function DELETE<T>(url: string, data = {}, config: any = {}): Promise<T> {
  return request(url, data, config, 'DELETE');
}

export default instance;
