import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const stateMap = {
  0: { color: '#F4F7FF', text: '未开始' },
  1: { color: '#FFFAE8', text: '进行中' },
  2: { color: '#EAFCF6', text: '完成' },
};

export default class SortCardList extends Component {
  static displayName = 'SortCardList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          state: 0,
          description:
            '这里是任务的描述，用简短的文字介绍任务的内容，最多可以展示两行的文字',
          datetime: '07-07  18:36',
        },
        {
          id: 2,
          state: 0,
          description:
            '这里是任务的描述，用简短的文字介绍任务的内容，最多可以展示两行的文字',
          datetime: '07-07  18:36',
        },
        {
          id: 3,
          state: 0,
          description:
            '这里是任务的描述，用简短的文字介绍任务的内容，最多可以展示两行的文字',
          datetime: '07-07  18:36',
        },
      ],
      doings: [
        {
          id: 1,
          state: 1,
          description:
            '这里是任务的描述，用简短的文字介绍任务的内容，最多可以展示两行的文字',
          datetime: '07-07  18:36',
        },
        {
          id: 2,
          state: 1,
          description:
            '这里是任务的描述，用简短的文字介绍任务的内容，最多可以展示两行的文字',
          datetime: '07-07  18:36',
        },
        {
          id: 3,
          state: 1,
          description:
            '这里是任务的描述，用简短的文字介绍任务的内容，最多可以展示两行的文字',
          datetime: '07-07  18:36',
        },
        {
          id: 4,
          state: 1,
          description:
            '这里是任务的描述，用简短的文字介绍任务的内容，最多可以展示两行的文字',
          datetime: '07-07  18:36',
        },
        {
          id: 5,
          state: 1,
          description:
            '这里是任务的描述，用简短的文字介绍任务的内容，最多可以展示两行的文字',
          datetime: '07-07  18:36',
        },
      ],
      dones: [
        {
          id: 2,
          state: 2,
          description:
            '这里是任务的描述，用简短的文字介绍任务的内容，最多可以展示两行的文字',
          datetime: '07-07  18:36',
        },
      ],
    };
  }

  // ICE: React Component 的生命周期

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  handleFinish = () => {};

  renderItem = (item) => {
    return (
      <div
        className={styles.cardItem}
        style={{backgroundColor: stateMap[item.state].color}}
        key={item.id}
        draggable
      >
        <div className={styles.desc}>{item.description}</div>
        <div>
          <span>
            <img
              alt="icon"
              src={require('./images/TB1b8vJjlTH8KJjy0FiXXcRsXXa-22-22.png')}
              className={styles.icon}
            />
            {item.datetime}
          </span>
          <span className={styles.done} onClick={this.handleFinish}>
            {stateMap[item.state].text}
          </span>
        </div>
      </div>
    );
  };

  render() {
    const { todos, doings, dones } = this.state;
    return (
      <div className="sort-card-list">
        <IceContainer className={styles.cardContainer}>
          <Row wrap gutter={20}>
            <Col xxs="24" s="8" l="8" className={styles.cardList}>
              <div className={styles.title}>待办事项</div>
              <div className={styles.subTitle}>在任务卡片间拖拽来排序</div>
              {todos.map(this.renderItem)}
            </Col>
            <Col xxs="24" s="8" l="8" style={styles.cardList}>
              <div className={styles.title}>进行中</div>
              <div className={styles.subTitle}>在任务卡片间拖拽来排序</div>
              {doings.map(this.renderItem)}
            </Col>
            <Col xxs="24" s="8" l="8" className={styles.cardList}>
              <div className={styles.title}>已完成</div>
              <div className={styles.subTitle}>在任务卡片间拖拽来排序</div>
              {dones.map(this.renderItem)}
            </Col>
          </Row>
        </IceContainer>
      </div>
    );
  }
}


