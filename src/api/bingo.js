import axios from 'axios';

export const postBingoApi = async (data) => {
  if (!data) {
    return [];
  } else {
    const { } = data;
    const response = await axios.post(`${process.env.REACT_APP_SERVER_ENDPOINT}`);
    return response.data;
  }
};

export const getUserBingoApi = async (data) => {
  if (!data) {
    return [];
  } else {
    const { } = data;
    const response = await axios.get(`${process.env.REACT_APP_SERVER_ENDPOINT}`);
    return response.data;
  }
};