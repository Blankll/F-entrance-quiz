import React from 'react';
import Hero from '../Hero/Hero';
import './Group.css';

class Group extends React.Component {
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
