/* eslint-disable react/no-unused-state, no-plusplus */
import React, { Component } from 'react';
import { Table, Switch, Icon, Button, Grid, Pagination } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class CustomTable extends Component {
  static displayName = 'CustomTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      formValue: {},
      current: 1,
    };
  }

  formChange = (value) => {
    console.log('changed value', value);
    this.setState({
      formValue: value,
    });
  };

  getData = () => {
    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push({
        id: i + 1,
        name: `李晓红${i + 1}`,
        university: '浙江大学',
        college: '计算机',
        class: i + 1,
        phone: `1876666123${i}`,
        role: '管理员',
      });
    }
    return result;
  };

  onChange = (...args) => {
    console.log(...args);
  };

  handlePaginationChange = (current) => {
    this.setState({
      current,
    });
  };

  renderOper = () => {
    return (
      <div className={styles.oper}>
        <Icon
          type="edit"
          size="small"
         
          className= {`${styles.icon} ${styles.editIcon}`}             
        />
        <Icon
          type="ashbin"
          size="small"
          className={`${styles.icon} ${styles.deleteIcon}`} 
        />
      </div>
    );
  };

  render() {
    return (
      <IceContainer title="用户列表">
        <Row wrap className={styles.headRow}>
          <Col l="12">
            <Button type="primary" className={styles.button}>
              <Icon type="add" size="xs" className={styles.user} />添加用户
            </Button>
          </Col>
          <Col l="12" className={styles.center}>
            <Button type="normal" className={styles.button}>
              删除
            </Button>
            <Button type="normal" className={`${styles.button} ${styles.normaiBtn}`}>
              导入
            </Button>
            <Button type="normal" className={`${styles.button} ${styles.normaiBtn}`}>
              下载
            </Button>
          </Col>
        </Row>
        <Table
          dataSource={this.getData()}
          rowSelection={{ onChange: this.onChange }}
        >
          <Table.Column title="序号" dataIndex="id" width={100} />
          <Table.Column title="姓名" dataIndex="name" width={100} />
          <Table.Column title="学校" dataIndex="university" width={200} />
          <Table.Column title="院校" dataIndex="college" width={200} />
          <Table.Column title="班级" dataIndex="class" width={100} />
          <Table.Column title="联系电话" dataIndex="phone" width={200} />
          <Table.Column title="角色" dataIndex="role" width={200} />
          <Table.Column title="启动/停用" width={100} cell={() => <Switch />} />
          <Table.Column title="操作" width={100} cell={this.renderOper} />
        </Table>
        <Pagination
          className={styles.pagination}
          current={this.state.current}
          onChange={this.handlePaginationChange}
        />
      </IceContainer>
    );
  }
}


