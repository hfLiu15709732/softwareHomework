import React, { memo, useEffect } from 'react';
import { Row, Col, Button, List, Card } from 'tdesign-react';
import { IconFont } from 'tdesign-icons-react';
import { BrowserRouterProps } from 'react-router-dom';
import ReactEcharts from 'echarts-for-react';
import { TEAMS } from './consts';
import { visitData } from './chart';
import ProductA from 'assets/svg/assets-product-1.svg?component';
import ProductB from 'assets/svg/assets-product-2.svg?component';
import ProductC from 'assets/svg/assets-product-3.svg?component';
import ProductD from 'assets/svg/assets-product-4.svg?component';
import useDynamicChart from 'hooks/useDynamicChart';

import styles from './index.module.less';
import { getContractList2 } from 'services/contract';

const { ListItem, ListItemMeta } = List;

const User: React.FC<BrowserRouterProps> = () => {
  const chartData = useDynamicChart(visitData, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.axisLabel.color', 'yAxis.axisLabel.color'],
  });

  // const handleGetData = async () => {
  //   try {
  //     const airList = await getContractList2();
  //     console.log(airList);
  //   } catch (error) {
  //     console.log(error, '出错啦');
  //   }
  // };

  useEffect(() => {
    // handleGetData();
  }, []);
  return (
    <div style={{ overflow: 'hidden !important' }}>
      <Row
        gutter={[16, 16]}
        style={{ padding: '10px,20px', overflowX: 'hidden', maxWidth: '100vw', overflow: 'hidden !important' }}
      >
        <Col xs={12} lg={12} xl={12}>
          <Card className={styles.welcome} bordered={false}>
            <Row justify='space-between'>
              <Col className={styles.name}>
                Hi，张伟&nbsp;&nbsp;<span className={styles.regular}>下午好，今天是你加入鹅厂的第 100 天～</span>
              </Col>
              <Col>
                <img alt='' src='https://tdesign.gtimg.com/starter/assets-tencent-logo.png' className={styles.logo} />
              </Col>
            </Row>
          </Card>
          <Card
            className={styles.userinfo}
            title='个人信息'
            bordered={false}
            actions={
              <Button shape='square' theme='default' variant='text'>
                <IconFont name='edit' />
              </Button>
            }
            header
          >
            <Row gutter={[16, 16]}>
              <Col span={3}>
                <div className={styles.label}>手机</div>
                <div className={styles.value}>+86 13923734567</div>
              </Col>
              <Col span={3}>
                <div className={styles.label}>座机</div>
                <div className={styles.value}>734567</div>
              </Col>
              <Col span={3}>
                <div className={styles.label}>办公室邮箱</div>
                <div className={styles.value}>Account@qq.com</div>
              </Col>
              <Col span={3}>
                <div className={styles.label}>座位</div>
                <div className={styles.value}>T32F 012</div>
              </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={3}>
                <div className={styles.label}>管理主体</div>
                <div className={styles.value}>腾讯集团</div>
              </Col>
              <Col span={3}>
                <div className={styles.label}>直属上级</div>
                <div className={styles.value}>Michael Wang</div>
              </Col>
              <Col span={3}>
                <div className={styles.label}></div>
                <div className={styles.label}></div>
                <div className={styles.value}>
                  <Button>修改密码</Button>
                </div>
              </Col>
              <Col span={3}>
                <div className={styles.label}></div>
                <div className={styles.label}></div>
                <div className={styles.value}>
                  <Button theme='danger'>退出登录</Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default memo(User);
