import axios from 'axios';
import { prefix } from '../../utils/config';

// TODO GTB-3: - 可以给axios设置baseURL
const HeroApi = {
  getAllHeros: async () => {
    const resp = await axios.get(`${prefix}/api/hero`);

    return resp.data;
  },
};

export default HeroApi;
