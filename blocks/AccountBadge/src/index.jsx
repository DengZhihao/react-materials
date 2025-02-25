import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '@icedesign/container';
import styles from './index.module.scss';
import BadgeItem from './BadgeItem';
export default class AccountFeatures extends Component {
  static displayName = 'AccountFeatures';

  static propTypes = {
    value: PropTypes.string,
  };

  static defaultProps = {
    value: 'string data',
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          icon: require('./images/credit.png'),
          title: '账号信用',
          desc:
            '出现违规行为将会扣除信用分，信用分降低到一定分数会触发账号处罚，并降低微淘号达人指数',
          status: '0分',
          detail: '满分40分，不良行为会导致扣分',
          detailUrl: '#',
          recordUrl: '#',
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <div className={styles.header}>
          <h2 className={styles.titles}>账号勋章</h2>
        </div>
        <div className={styles.body}>
          {this.state.dataSource.map((item, index) => {
            return <BadgeItem data={item} key={index} />;
          })}
        </div>
      </Container>
    );
  }
}
