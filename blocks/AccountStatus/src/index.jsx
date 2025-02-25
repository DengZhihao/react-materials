import React, { Component } from 'react';
import Container from '@icedesign/container';
import styles from './index.module.scss';
import StateItem from './StateItem';

export default class Index extends Component {
  static displayName = 'Index';

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          icon: require('./images/star.png'),
          title: '官方账号',
          desc: '淘宝内部官方账号，请勿申请',
          status: '认证通过',
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <div className={styles.header}>
          <h2 className={styles.titles}>我的角色</h2>
          <span className={styles.contents} >
            角色认证通过后，角色标识及认证信息将显示在账号主页，拥有个性化的玩法，如渠道快速合作等
          </span>
        </div>
        <div>
          {this.state.dataSource.map((item, index) => {
            return <StateItem data={item} key={index} />;
          })}
        </div>
      </Container>
    );
  }
}

