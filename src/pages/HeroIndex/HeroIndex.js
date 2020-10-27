import React from 'react';
import UserList from '../../Components/UserList/UserList';

class HeroIndex extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    heros: [
      {
        id: 1,
        name: '成吉思汗',
      },
    ],
  };

  render() {
    const heroList = this.state.heros;
    return <UserList heros={heroList} />;
  }
}

export default HeroIndex;
