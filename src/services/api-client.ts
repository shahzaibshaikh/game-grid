import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '07eef8e2c55a4106a10db5ac5f5065b6'
  }
});
