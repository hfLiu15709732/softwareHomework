import { lazy } from 'react';
import { manifest, MapCollectionIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';
console.log(manifest);

const result: IRouter[] = [
  {
    path: '/airline',
    meta: {
      title: '航班信息管理',
      Icon: MapCollectionIcon,
    },
    children: [
      {
        path: 'base',
        Component: lazy(() => import('pages/List/Base')),
        meta: {
          title: '基础列表页',
          hidden: true,
        },
      },
      {
        path: 'card',
        Component: lazy(() => import('pages/List/Card')),
        meta: {
          title: '卡片列表页',
          hidden: true,
          // TODO 路由信息的动态切换在这里也可以实现
          // hidden: 10 > 20 ? false : true,
        },
      },
      {
        path: 'admin',
        Component: lazy(() => import('pages/AirLineManage/AirAdmin')),
        meta: { title: '航班信息查询管理员' },
      },
      {
        path: 'passenger',
        Component: lazy(() => import('pages/AirLineManage/AirPassenger')),
        meta: { title: '航班信息查询乘客' },
      },
      {
        path: 'adding',
        Component: lazy(() => import('pages/AirLineManage/AirAdding')),
        meta: { title: '航班信息添加' },
      },
      {
        path: 'tree',
        Component: lazy(() => import('pages/List/Tree')),
        meta: { title: '树状筛选列表页', hidden: true },
      },
    ],
  },
];

export default result;
