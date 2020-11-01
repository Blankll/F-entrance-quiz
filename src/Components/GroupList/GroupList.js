import React from 'react';
import Group from '../HeroGroup/HeroGroup';
import './GroupList.css';

class GroupList extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    groups: [
      {
        id: 1,
        group: '1 组',
        heros: [
          {
            id: 1,
            name: 'dsfdsfh',
          },
        ],
      },
    ],
  };

  render() {
    const { groups } = this.state;
    return (
      // TODO GTB-3: - 加强语义化标签的使用
      <div>
        <div className="top-title">
          <div>
            <p>分组列表</p>
          </div>
          <div>
            {/* eslint-disable-next-line react/button-has-type */}
            <button>分组学员</button>
          </div>
        </div>
        {groups.map((item) => (
          <div key={item.id} className="group">
            <p className="title">{item.group}</p>
            <Group group={item} />
          </div>
        ))}
      </div>
    );
  }
}

export default GroupList;
