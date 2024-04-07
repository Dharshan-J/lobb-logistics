<template>
  <div>
    <el-card v-if="!showDetails" shadow="always" style="margin: 0 30px; width: calc(100% - 60px)">
      <div slot="header" class="card-header">
        <img v-if="!loading" :src="content.thumbNailImage" alt="Thumbnail" class="thumbnail" @click="handleClick" />
        <el-spinner v-else :size="loadingSize" style="width: 300px; height: 150px"></el-spinner>
      </div>
      <div class="card-content">
        <div class="logo-container">
          <img :src="content.logo" alt="Logo" class="logo" />
        </div>
        <div class="title">{{ content.title }}</div>
        <el-button class="refresh-btn" @click="refreshContent">
          <span style="color: #007bff">REFRESH</span>
        </el-button>
      </div>
    </el-card>
    <DetailsComponent
      v-else-if="showDetails && !loading"
      :content="content"
      :loading="loading"
      @refresh="refresh"
      @close="closeDetails"
    ></DetailsComponent>
  </div>
</template>

<script>
import DetailsComponent from './Details.vue'
export default {
  props: {
    content: Object,
    refresh: Function,
    loading: Boolean,
  },
  components: { DetailsComponent },
  data() {
    return {
      loadingSize: 'medium',
      showDetails: false,
    }
  },
  methods: {
    handleClick() {
      console.log('click')
      this.showDetails = true
    },
    async refreshContent(event) {
      event.stopPropagation()
      try {
        await this.refresh()
      } catch (error) {
        console.error('Error refreshing data:', error)
      }
    },
    closeDetails() {
      this.showDetails = false
    },
  },
}
</script>

<style scoped>
.card {
  cursor: pointer;
  margin-bottom: 20px;
}
.thumbnail {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.card-header {
  padding: 0;
}
.card-content {
  display: flex;
  align-items: center;
  gap: 20px;
}
.logo-container {
  width: 40px;
  height: 40px;
  border-radius: 20%;
  overflow: hidden;
}
.logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.title {
  font-size: 18px;
  flex: 1;
}
.refresh-btn {
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 10px 20px;
}
</style>
