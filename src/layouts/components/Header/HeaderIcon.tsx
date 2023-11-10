import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Popup, Badge, Dropdown, Space, Avatar, Switch } from 'tdesign-react';
import {
  Icon,
  LogoGithubIcon,
  MailIcon,
  HelpCircleIcon,
  SettingIcon,
  PoweroffIcon,
  UserCircleIcon,
  SunnyIcon,
  MoonIcon,
  Fullscreen2Icon,
} from 'tdesign-icons-react';
import { useAppDispatch } from 'modules/store';
import { toggleSetting } from 'modules/global';
import { logout } from 'modules/user';
import Style from './HeaderIcon.module.less';

const { DropdownMenu, DropdownItem } = Dropdown;

export default memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const gotoWiki = () => {
    window.open('https://tdesign.tencent.com/react/overview');
  };

  const gotoGitHub = () => {
    window.open('https://github.com/Tencent/tdesign-react-starter');
  };

  const clickHandler = (data: any) => {
    if (data.value === 1) {
      navigate('/user/index');
    }
  };
  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/login/index');
  };

  return (
    <Space align='center'>
      {/* <Badge className={Style.badge} count={6} dot={false} maxCount={99} shape='circle' showZero={false} size='medium'>
        <Button className={Style.menuIcon} shape='square' size='large' variant='text' icon={<MailIcon />} />
      </Badge> */}
      {/* <Popup content='代码仓库' placement='bottom' showArrow destroyOnClose>
        <Button
          className={Style.menuIcon}
          shape='square'
          size='large'
          variant='text'
          onClick={gotoGitHub}
          icon={<LogoGithubIcon />}
        />
      </Popup>
      <Popup content='帮助文档' placement='bottom' showArrow destroyOnClose>
        <Button
          className={Style.menuIcon}
          shape='square'
          size='large'
          variant='text'
          onClick={gotoWiki}
          icon={<HelpCircleIcon />}
        />
      </Popup> */}
      <Dropdown trigger={'click'} onClick={clickHandler}>
        <Button variant='text' className={Style.dropdown}>
          {/* <Icon name='user-circle' className={Style.icon} /> */}
          <Avatar image='https://tdesign.gtimg.com/starter/avatar-user-b.png' shape='circle' className={Style.icon} />

          <span className={Style.text}>张伟</span>
          <Icon name='chevron-down' className={Style.icon} />
        </Button>
        <DropdownMenu>
          <DropdownItem value={1}>
            <div className={Style.dropItem}>
              <UserCircleIcon />
              <span>个人中心</span>
            </div>
          </DropdownItem>
          <DropdownItem value={1} onClick={handleLogout}>
            <div className={Style.dropItem}>
              <PoweroffIcon />
              <span>退出登录</span>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Popup content='全屏展示' placement='bottom' showArrow destroyOnClose>
        <Button
          className={Style.menuIcon}
          shape='square'
          size='large'
          variant='text'
          onClick={() => dispatch(toggleSetting())}
          icon={<Fullscreen2Icon />}
        />
      </Popup>
      <Popup content='页面设置' placement='bottom' showArrow destroyOnClose>
        <Button
          className={Style.menuIcon}
          shape='square'
          size='large'
          variant='text'
          onClick={() => dispatch(toggleSetting())}
          icon={<SettingIcon />}
        />
      </Popup>
    </Space>
  );
});
