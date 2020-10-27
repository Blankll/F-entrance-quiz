import React from 'react';
import UserList from '../../Components/Hero/Hero';
import HeroApi from '../../Api/HeroApi/HeroApi';

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
    return <UserList heros={heroList} />;
  }
}

export default HeroIndex;
