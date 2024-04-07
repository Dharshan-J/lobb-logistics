<!-- App.vue -->
<template>
  <div id="app">
    <card :content="content" :refresh="refreshContent" :loading="isLoading" />
  </div>
</template>

<script>
import axios from 'axios'
import Card from './components/Card.vue'
import { ElButton, ElCard } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default {
  name: 'App',
  components: {
    Card,
    ElButton,
    ElCard,
  },
  data() {
    return {
      content: {},
      token: '',
      isLoading: false,
    }
  },
  async created() {
    await this.postData()
  },
  methods: {
    async postData() {
      try {
        const response = await axios.post(
          'https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken',
          {
            email: 'dharshan.240301@gmail.com',
          }
        )
        this.token = response.data.token
        this.getDataWithToken()
      } catch (error) {
        console.error('Error posting data:', error)
      }
    },
    async getDataWithToken() {
      this.isLoading = true
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
        const response = await axios.get(
          'https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent',
          config
        )
        this.content = response.data.content
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        this.isLoading = false
      }
    },
    refreshContent() {
      this.getDataWithToken()
    },
  },
}
</script>

<style>
#app {
  margin-top: 20px;
}
</style>
