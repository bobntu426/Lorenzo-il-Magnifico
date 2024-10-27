<template>
  <h1>{{ message }}</h1>
</template>

<script>
import { getUsers } from './api'; // 確保正確導入

export default {
  data() {
    return {
      message: '' // 初始為空字串
    };
  },
  async mounted() {
    try {
      const users = await getUsers(); // 調用 getUsers 函數
      this.message = JSON.stringify(users); // 將用戶數據轉換為字串顯示
    } catch (error) {
      this.message = 'Failed to fetch users'; // 錯誤處理
    }
  }
};
</script>

<style></style>