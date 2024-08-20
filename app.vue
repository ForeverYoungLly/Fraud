<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import './global.css'
</script>

<template>
  <div>
    <!-- App.vue只需要留一个路由出口 router-view即可 -->
    <el-config-provider :locale="zhCn">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </el-config-provider>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

.el-statistic__head {
  font-size: xx-large !important;
  color: #409eff !important;
}

.el-statistic__content {
  margin-top: 20px !important;
}

.el-statistic__number {
  font-size: xx-large !important;
}
</style>
