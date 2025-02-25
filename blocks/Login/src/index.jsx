/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Input, Button, Checkbox, Grid, Message, Icon, Form } from '@alifd/next';
import './Login.scss';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const Item = Form.Item;

export default class Index extends Component {
  static displayName = 'Index';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        account: '',
        password: '',
        checkbox: false,
      },
    };
  }

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = (values, errors) => {
    if (errors) {
      console.log('errors', errors);
      return;
    }
    console.log('values:', values);
    Message.success('登录成功');
    // 登录成功后做对应的逻辑处理
  };

  render() {
    return (
      <div className={`${styles.container} user-login`}>
        <div className={styles.header}>
          <a href="#" className={styles.meta}>
            <img
              className={styles.logo}
              src={require('./images/TB13UQpnYGYBuNjy0FoXXciBFXa-242-134.png')}
              alt="logo"
            />
            <span className={styles.title}>飞冰</span>
          </a>
          <p className={styles.desc}>飞冰让前端开发简单而友好</p>
        </div>
        <div className={styles.formContainer}>
          <h4 className={styles.formTitle}>登 录</h4>
          <Form
            value={this.state.value}
            onChange={this.formChange}
            size="large"
            ref="form"
          >
            <Item required requiredMessage="必填">
              <Input
                name="account"
                innerBefore={<Icon
                  type="account"
                  size="small"
                  className={styles.inputIcon}
                />}
                size="large"
                maxLength={20}
                placeholder="管理员账号"
              />
            </Item>
            <Item required requiredMessage="必填">
              <Input
                name="password"
                innerBefore={<Icon type="account" size="small" className={styles.inputIcon} test="lock" />}
                size="large"
                htmlType="password"
                placeholder="密码"
              />
            </Item>
            <Item >
              <Checkbox name="checkbox" className={styles.checkbox}>记住账号</Checkbox>
            </Item>


            <Row className={styles.formItem}>
              <Form.Submit
                type="primary"
                onClick={this.handleSubmit}
                className={styles.submitBtn}
                validate
              >
                登 录
                </Form.Submit>
            </Row>

            <Row className={`${styles.tips} tips`}>
              <a href="/" className={styles.link}>
                立即注册
                </a>
              <span className={styles.line}>|</span>
              <a href="/" className={styles.link}>
                忘记密码
                </a>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}


