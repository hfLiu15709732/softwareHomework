import React, { memo, useRef } from 'react';
import {
  Form,
  Row,
  Col,
  Input,
  Radio,
  Button,
  DatePicker,
  Select,
  Textarea,
  Avatar,
  Upload,
  MessagePlugin,
} from 'tdesign-react';
import classnames from 'classnames';
import { SubmitContext, FormInstanceFunctions } from 'tdesign-react/es/form/type';
import CommonStyle from 'styles/common.module.less';
import Style from './index.module.less';

const { FormItem } = Form;
const { Option } = Select;
const { Group } = Avatar;

const INITIAL_DATA = {
  name: '',
  type: '',
  payment: '',
  partyA: '',
  partyB: '',
  signDate: '',
  effectiveDate: '',
  endDate: '',
  remark: '',
  notary: '',
  file: [],
};

export default memo(() => {
  const formRef = useRef<FormInstanceFunctions>();

  const onSubmit = (e: SubmitContext) => {
    if (e.validateResult === true) {
      console.log('form 值', formRef.current?.getFieldsValue?.(true));
      MessagePlugin.info('提交成功');
    }
  };

  const handleFail = ({ file }: { file: any }) => {
    console.error(`文件 ${file.name} 上传失败`);
  };

  return (
    <div className={classnames(CommonStyle.pageWithColor)}>
      <div className={Style.formContainer}>
        <Form ref={formRef} onSubmit={onSubmit} labelWidth={100} labelAlign='top'>
          <div className={Style.titleBox}>
            <div className={Style.titleText}>航班信息录入</div>
          </div>
          <Row gutter={[32, 24]}>
            <Col span={6}>
              <FormItem
                label='航班号信息'
                name='name'
                initialData={INITIAL_DATA.name}
                rules={[{ required: true, message: '合同名称必填', type: 'error' }]}
              >
                <Input placeholder='请输入内容' />
              </FormItem>
            </Col>

            <Col span={6}>
              {/* <FormItem
                label='合同类型'
                name='type'
                initialData={INITIAL_DATA.type}
                rules={[{ required: true, message: '合同类型必填', type: 'error' }]}
              >
                <Select placeholder='请选择类型'>
                  <Option key='A' label='类型A' value='A' />
                  <Option key='B' label='类型B' value='B' />
                  <Option key='C' label='类型C' value='C' />
                </Select>
              </FormItem> */}
            </Col>

            <Col span={12}></Col>

            <Col span={6}>
              <FormItem
                label='航班出发地'
                name='name'
                initialData={INITIAL_DATA.name}
                rules={[{ required: true, message: '航班出发地必填', type: 'error' }]}
              >
                <Input placeholder='请输入内容' />
              </FormItem>
            </Col>

            <Col span={6}>
              <FormItem
                label='航班目的地'
                name='name'
                initialData={INITIAL_DATA.name}
                rules={[{ required: true, message: '航班目的地必填', type: 'error' }]}
              >
                <Input placeholder='请输入内容' />
              </FormItem>
            </Col>

            <Col span={6} className={Style.dateCol}>
              <FormItem
                label='航班起飞时间'
                name='effectiveDate'
                initialData={INITIAL_DATA.effectiveDate}
                rules={[{ required: true }]}
              >
                <DatePicker mode='date' enableTimePicker />
              </FormItem>
            </Col>

            <Col span={6} className={Style.dateCol}>
              <FormItem
                label='航班降落日期'
                name='effectiveDate2'
                initialData={INITIAL_DATA.effectiveDate}
                rules={[{ required: true }]}
              >
                <DatePicker mode='date' enableTimePicker />
              </FormItem>
            </Col>

            <Col span={6} className={Style.dateCol}></Col>

            <Col span={6}></Col>
          </Row>

          <FormItem>
            <Button type='submit' theme='primary'>
              提交
            </Button>
            <Button type='reset' style={{ marginLeft: 12 }}>
              重置
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
});
