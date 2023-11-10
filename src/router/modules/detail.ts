import { lazy } from 'react';
import { CalendarEditIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/order',
    meta: {
      title: '订单信息管理',
      Icon: CalendarEditIcon,
    },
    children: [
      {
        path: 'base',
        Component: lazy(() => import('pages/Detail/Base')),
        meta: {
          title: '基础详情页',
          hidden: true,
        },
      },
      {
        path: 'search/passenger',
        Component: lazy(() => import('pages/OrderInfo/OrderPassenger')),
        meta: { title: '订单管理乘客' },
      },
      {
        path: 'search/admin',
        Component: lazy(() => import('pages/OrderInfo/OrderAdmin')),
        meta: { title: '订单信息查询管理员' },
      },
      {
        path: 'secondary',
        Component: lazy(() => import('pages/Detail/Secondary')),
        meta: { title: '二级详情页', hidden: true },
      },
    ],
  },
];

export default result;
