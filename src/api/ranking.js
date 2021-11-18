import axios from 'axios';

export const getRankingApi = async (data) => {
  if (!data) {
    return [];
  } else {
    const { } = data;
    const response = await axios.get(`${process.env.REACT_APP_SERVER_ENDPOINT}`);
    return response.data;
  }
};