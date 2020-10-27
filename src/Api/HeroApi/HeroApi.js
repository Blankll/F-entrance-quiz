import axios from 'axios';
import { prefix } from '../../utils/config';

const HeroApi = {
  getAllHeros: async () => {
    const resp = await axios.get(`${prefix}/api/hero`);

    return resp.data;
  },
};

export default HeroApi;
