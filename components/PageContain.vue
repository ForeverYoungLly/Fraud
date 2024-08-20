<script setup>
defineProps({
  title: {
    required: true,
    type: String
  }
})
</script>
<template>
  <el-card class="page-container" shadow="never">
    <template #header>
      <div class="header">
        <span>{{ title }}</span>
      </div>
    </template>
    <slot></slot>
  </el-card>
</template>
<style scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
