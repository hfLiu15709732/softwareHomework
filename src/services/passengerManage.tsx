import { GET, POST } from 'utils/request';

/**
 * @Description 乘客获取乘客信息列表的接口
 * @Date 2023-11-11 01:20:25
 */
export const getPassengerList = async () => {
  const result = await GET('/passenger/info');
  return result;
};

/**
 * @Description 乘客添加乘客信息的接口
 * @Date 2023-11-11 01:20:25
 */
export const addPassenger = async (params: any) => {
  const result = POST('/passenger/adding', params);
  return result;
};
