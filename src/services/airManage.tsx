import { GET, POST } from 'utils/request';

/**
 * @Description 管理员获取航班列表信息接口
 * @Date 2023-11-11 01:16:24
 */
export const getAdminList = async () => {
  const result = await GET('/airline/admin');
  return result;
};

/**
 * @Description 乘客获取航班列表接口
 * @Date 2023-11-11 01:16:24
 */
export const getPassengerList = async () => {
  const result = await GET('/airline/passenger');
  return result;
};

/**
 * @Description 管理员添加航班信息接口
 * @param {any} param
 * @Date 2023-11-11 01:16:24
 */
export const addingAirline = async (params: any) => {
  const result = await POST('/airline/adding', params);
  return result;
};
