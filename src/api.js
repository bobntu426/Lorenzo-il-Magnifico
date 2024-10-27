import axios from 'axios';

const API_URL = 'http://bobproject.test/api';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`); // �T�O�o�̪� URL �O���T��
    return response.data; // ��^�Τ�ƾ�
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // ?�X���~
  }
};