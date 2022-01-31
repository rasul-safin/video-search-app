import axios from 'axios';

const KEY = 'AIzaSyAhwdGJf6QsC-DGwyWxUAQ3hcRxpIfH2CQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
