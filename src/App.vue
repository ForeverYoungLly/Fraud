<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<template>
  <div>
    <!-- App.vue只需要留一个路由出口 router-view即可 -->
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<style>
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
