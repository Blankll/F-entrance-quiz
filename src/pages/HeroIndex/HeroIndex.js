import React from 'react';
import UserList from '../../Components/Hero/Hero';
import HeroApi from '../../Api/HeroApi/HeroApi';
import GroupList from '../../Components/GroupList/GroupList';

class HeroIndex extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    heros: [],
  };

  async componentDidMount() {
    const resp = await HeroApi.getAllHeros();
    this.setState({ heros: resp?.data });
  }

  render() {
    const heroList = this.state.heros;
    return (
      <div>
        <GroupList className="groupList" />
        <UserList heros={heroList} />
      </div>
    );
  }
}

export default HeroIndex;
