import axios from 'axios';

export const logInApi = async (data) => {
  if (!data) {
    return [];
  } else {
    const { } = data;
    const response = await axios.get(`${process.env.REACT_APP_SERVER_ENDPOINT}`);
    return response.data;
  }
};

export const getUserInfoApi = async (data) => {
  if (!data) {
    return [];
  } else {
    const { } = data;
    const response = await axios.get(`${process.env.REACT_APP_SERVER_ENDPOINT}`);
    return response.data;
  }
};

export const logOutApi = async (data) => {
  if (!data) {
    return [];
  } else {
    const { } = data;
    const response = await axios.get(`${process.env.REACT_APP_SERVER_ENDPOINT}`);
    return response.data;
  }
};

export const modifyUserInfoApi = async (data) => {
  if (!data) {
    return [];
  } else {
    const { } = data;
    const response = await axios.patch(`${process.env.REACT_APP_SERVER_ENDPOINT}`);
    return response.data;
  }
};

export const deleteUserApi = async (data) => {
  if (!data) {
    return [];
  } else {
    const { } = data;
    const response = await axios.delete(`${process.env.REACT_APP_SERVER_ENDPOINT}`);
    return response.data;
  }
};