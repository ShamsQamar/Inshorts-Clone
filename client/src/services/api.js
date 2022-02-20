import axios from 'axios';

const URL = 'http://localhost:8000';

export const getNews = async (page, category, size = 5 ) => {
  try {
    return await axios.get(`${URL}/news?page=${page}&category=${category}&size=${size}`);
  } catch (error) {
    console.log('error while calling getNews api is ', error);
  }
}