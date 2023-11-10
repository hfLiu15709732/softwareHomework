import React, { useState, memo, useEffect } from 'react';
import { Table, Dialog, Button, Row } from 'tdesign-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { selectListSelect, getList, clearPageState } from 'modules/list/select';
import SearchForm from './components/SearchForm';
import { StatusMap, ContractTypeMap, PaymentTypeMap } from '../Base';

import './index.module.less';
import classnames from 'classnames';
import CommonStyle from '../../../styles/common.module.less';

export const AirAdmin = () => {
  const dispatch = useAppDispatch();
  const pageState = useAppSelector(selectListSelect);
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([0, 1]);
  const [visible, setVisible] = useState(false);
  const { loading, contractList, current, pageSize, total } = pageState;

  useEffect(() => {
    dispatch(
      getList({
        pageSize: pageState.pageSize,
        current: pageState.current,
      }),
    );
    return () => {
      dispatch(clearPageState());
    };
  }, []);

  function onSelectChange(value: (string | number)[]) {
    setSelectedRowKeys(value);
  }

  function rehandleClickOp(record: any) {
    console.log(record);
  }

  function handleClickDelete(record: any) {
    console.log(record);
    setVisible(true);
  }

  function handleClose() {
    setVisible(false);
  }

  return (
    <>
      <Row justify='start' style={{ marginBottom: '20px' }}>
        <SearchForm
          onSubmit={async (value) => {
            console.log(value);
          }}
          onCancel={() => {}}
        />
      </Row>
      <Table
        loading={loading}
        data={contractList}
        columns={[
          {
            title: '航班号',
            fixed: 'left',
            align: 'left',
            ellipsis: true,
            colKey: 'name',
            width: 200,
          },
          {
            title: '乘客姓名',
            colKey: 'status',
            width: 200,
            cell({ row }) {
              return StatusMap[row.status || 5];
            },
          },
          {
            title: '身份证号',
            width: 200,
            ellipsis: true,
            colKey: 'no',
          },
          {
            title: '地点',
            width: 200,
            ellipsis: true,
            colKey: 'contractType',
            cell({ row }) {
              return ContractTypeMap[row.contractType];
            },
          },
          {
            title: '时间',
            width: 200,
            ellipsis: true,
            colKey: 'time',
            cell({ row }) {
              return ContractTypeMap[row.contractType];
            },
          },
          {
            title: '座位类型',
            width: 200,
            ellipsis: true,
            colKey: 'rowtype',
            cell({ row }) {
              return ContractTypeMap[row.contractType];
            },
          },
          {
            title: '票价',
            width: 200,
            ellipsis: true,
            colKey: 'price',
            cell({ row }) {
              return ContractTypeMap[row.contractType];
            },
          },
          {
            title: '支付情况',
            width: 200,
            ellipsis: true,
            colKey: 'pay',
            cell({ row }) {
              return ContractTypeMap[row.contractType];
            },
          },
          {
            title: '选项',
            width: 200,
            ellipsis: true,
            colKey: 'control',
            cell(record) {
              return (
                <>
                  <Button
                    theme='primary'
                    variant='text'
                    onClick={() => {
                      rehandleClickOp(record);
                    }}
                  >
                    支付
                  </Button>
                  <Button
                    theme='danger'
                    variant='text'
                    onClick={() => {
                      rehandleClickOp(record);
                    }}
                  >
                    删除
                  </Button>
                </>
              );
            },
          },
        ]}
        rowKey='index'
        selectedRowKeys={selectedRowKeys}
        hover
        onSelectChange={onSelectChange}
        pagination={{
          pageSize,
          total,
          current,
          showJumper: true,
          onCurrentChange(current, pageInfo) {
            dispatch(
              getList({
                pageSize: pageInfo.pageSize,
                current: pageInfo.current,
              }),
            );
          },
          onPageSizeChange(size) {
            dispatch(
              getList({
                pageSize: size,
                current: 1,
              }),
            );
          },
        }}
      />
      <Dialog header='确认删除当前所选合同？' visible={visible} onClose={handleClose}>
        <p>删除后的所有合同信息将被清空,且无法恢复</p>
      </Dialog>
    </>
  );
};

const selectPage: React.FC = () => (
  <div className={classnames(CommonStyle.pageWithPadding, CommonStyle.pageWithColor)}>
    <AirAdmin />
  </div>
);

export default memo(selectPage);
