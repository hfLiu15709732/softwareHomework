import { lazy } from 'react';
import { UserSettingIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const result: IRouter[] = [
  {
    path: '/user',
    meta: {
      title: '个人信息管理',
      Icon: UserSettingIcon,
    },
    children: [
      {
        path: 'index',
        Component: lazy(() => import('pages/User')),
        meta: {
          title: '个人中心',
        },
      },
    ],
  },
];

export default result;
