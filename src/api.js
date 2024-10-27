import axios from 'axios';

const API_URL = 'http://bobproject.test/api';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`); // 確保這裡的 URL 是正確的
    return response.data; // 返回用戶數據
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // ?出錯誤
  }
};