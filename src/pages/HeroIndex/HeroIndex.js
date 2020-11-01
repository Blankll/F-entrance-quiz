import React from 'react';
import UserList from '../../Components/Hero/Hero';
import HeroApi from '../../Api/HeroApi/HeroApi';
import GroupList from '../../Components/GroupList/GroupList';

// TODO GTB-4: - 不是hero而是学员，且我们page命名后面不用加Index了
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
        {/* TODO GTB-4: - 标签等class命名我们采用a-b-c形式 */}
        <GroupList className="groupList" />
        <UserList heros={heroList} />
      </div>
    );
  }
}

export default HeroIndex;
