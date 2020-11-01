import React from 'react';
import Hero from '../Hero/Hero';
import './Group.css';

class Group extends React.Component {
  // TODO GTB-4: - 这里字节使用props即可，不用state
  // TODO GTB-4: - 单纯的UI组件建议使用函数组件
  // eslint-disable-next-line react/state-in-constructor
  state = {
    group: this.props.group,
  };

  render() {
    const { heros } = this.state.group;
    return (
      <div className="group-box">
        <Hero heros={heros} />
      </div>
    );
  }
}

export default Group;
