<template>
  <div>
    <el-spinner v-if="loading" :size="loadingSize" style="width: 300px; height: 150px"></el-spinner>
    <el-card v-else class="details-card">
      <!-- Thumbnail image -->
      <div class="thumbnail-container">
        <img :src="content.thumbNailImage" alt="Thumbnail" class="thumbnail" />
        <div class="subtitle">{{ content.subTitle }}</div>
      </div>
      <!-- Logo, title, and refresh button -->
      <div class="header">
        <div class="logo-title-container">
          <img :src="content.logo" alt="Logo" class="logo" />
          <div class="title">{{ content.title }}</div>
        </div>
        <el-button class="refresh-btn" @click="refreshContent">
          <span style="color: #007bff">REFRESH</span>
        </el-button>
      </div>

      <div class="text-content">
        <p v-html="content.text"></p>
      </div>
      <img class="thumbnail" :src="content.mainImage" alt="Main Image" />
      <el-button class="close-icon" icon="el-icon-close" @click="closeDetails"></el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    content: Object,
    loading: Boolean,
  },
  methods: {
    refreshContent() {
      this.$emit('refresh')
    },
    closeDetails() {
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.details-card {
  width: 80%;
  margin: 0 auto;
}
.thumbnail-container {
  position: relative;
}
.thumbnail {
  width: 100%;
  height: auto;
  max-height: 300px; /* Adjust the max-height as needed */
  object-fit: cover;
}
.subtitle {
  position: absolute;
  font-family: 'Gill Sans', sans-serif;
  top: 10px;
  left: 10px;
  font-size: 24px;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.logo-title-container {
  display: flex;
  align-items: center;
}
.logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.title {
  font-size: 18px;
}
.refresh-btn {
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 10px 20px;
}
.text-content {
  margin-top: 20px;
}
.main-image {
  margin-top: 20px;
}
.close-icon {
  position: fixed;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  padding: 0;
  width: 40px;
  height: 40px;
  background-color: #bbb;
}
</style>
