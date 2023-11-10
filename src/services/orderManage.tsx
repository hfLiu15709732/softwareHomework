import request, { GET } from 'utils/request';

/**
 * @Description 管理员获取订单信息的接口
 * @Date: 2023-11-11 01:19:44
 */
export const getOrderListAdmin = async () => {
  const result = await GET('/order/admin');
  return result;
};

/**
 * @Description 乘客获取订单信息的接口
 * @Date: 2023-11-11 01:19:44
 */
export const getOrderListPassenger = async () => {
  const result = await GET('/order/passenger');
  return result;
};
