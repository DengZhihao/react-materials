import React, { Component } from 'react';
import { Search, Tab, Tag, DatePicker } from '@alifd/next';
import IceContainer from '@icedesign/container';
import { enquireScreen } from 'enquire-js';
import styles from './index.module.scss';

const TabItem = Tab.Item;

// mock data
const tagList = [
  {
    key: 'all',
    name: '全部商品',
  },
  {
    key: 'unclassified',
    name: '未分类',
  },
  {
    key: 'invalid',
    name: '已失效',
  },
  {
    key: 'haohuo',
    name: '有好货专用',
  },
  {
    key: 'bimai',
    name: '必买清单',
  },
];

export default class Index extends Component {
  static displayName = 'Index';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  componentDidMount() {
    this.enquireScreenRegister();
  }

  enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 720px)';

    enquireScreen((mobile) => {
      this.setState({
        isMobile: mobile,
      });
    }, mediaCondition);
  };

  onTabChange = (key) => {
    console.log(`select tab is: ${key}`);
  };

  onTagChange = (key, selected) => {
    console.log(`Tag: ${key} is ${selected ? 'selected' : 'unselected'}`);
  };

  onDateChange = (value) => {
    console.log(value);
  };

  onSearch = (value) => {
    console.log(value);
  };

  renderTabBarExtraContent = () => {
    return (
      <div className={styles.extraFilter}>
        <DatePicker
          locale={{ datePlaceholder: '发布日期' }}
          onChange={this.onDateChange}
        />
        <Search
          placeholder="搜索"
          searchText=""
          onSearch={this.onSearch}
          className={styles.search}
          shape="simple"
        />
      </div>
    );
  };

  render() {
    return (
      <div className="composite-filter">
        <IceContainer className={styles.filterCard}>
          <Tab
            shape="text"
            onChange={this.onTabChange}
            contentStyle={{ display: 'none' }}
            extra={
              !this.state.isMobile ? this.renderTabBarExtraContent() : null
            }
          >
            <TabItem title="全部" key="all" />
            <TabItem title="图文" key="pic" />
            <TabItem title="单品" key="item" />
            <TabItem title="店铺上新" key="new" />
            <TabItem title="短视频" key="video" />
          </Tab>

          <div className={styles.tagList}>
            {tagList.map((tag, index) => {
              return (
                <Tag.Selectable
                  type="normal"
                  key={index}
                  className={styles.tag}
                  onChange={this.onTagChange.bind(this, tag.key)}
                >
                  {tag.name}
                </Tag.Selectable>
              );
            })}
          </div>
        </IceContainer>
      </div>
    );
  }
}


