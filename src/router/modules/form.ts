import { lazy } from 'react';
import { CardmembershipIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/passenger',
    meta: {
      title: '旅客信息管理',
      Icon: CardmembershipIcon,
    },
    children: [
      {
        path: 'info',
        Component: lazy(() => import('pages/PassengerInfo/PassengerInfoSearch')),
        meta: {
          title: '旅客信息查询',
        },
      },
      {
        path: 'add',
        Component: lazy(() => import('pages/PassengerInfo/PassengerInfoAdding')),
        meta: {
          title: '增添旅客信息',
        },
      },
      {
        path: 'step',
        Component: lazy(() => import('pages/Form/Step')),
        meta: { title: '分步表单页', hidden: true },
      },
    ],
  },
];

export default result;
