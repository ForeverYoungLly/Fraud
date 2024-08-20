<script setup>
import { onMounted } from "vue";

onMounted(() => { });
</script>

<template>
  <el-container>
    <el-header>
      <el-menu class="el-menu-demo items-center" mode="horizontal"
        background-color="rgb(2, 53, 101)" text-color="#E4E7ED" active-text-color="#ffd04b"
        router="true">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/ApkParsing">APK解析</el-menu-item>
        <el-menu-item index="/ApkList">黑白名单列表</el-menu-item>
        <el-menu-item index="/report?id=AZCRcpgMh6wn_HCy2KmJ">样例 Demo</el-menu-item>
        <h1 class="text-white pl-4" style="margin-left: 10%; font-weight: bolder; font-size: large;">
          诈骗终结者——涉诈APK智能识别系统
        </h1>
      </el-menu>
    </el-header>
    <!--    
    <el-aside width="200px">
      <div class="el-aside__logo"></div>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#232323"
        :default-active="$route.path"
        text-color="#fff"
        router
      >
        <el-menu-item index="/PlatformIntroduce">
          <el-icon><Files /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/ApkParsing">
          <el-icon><Files /></el-icon>
          <span>APK解析</span>
        </el-menu-item>
        <el-menu-item index="/ApkList">
          <el-icon><Files /></el-icon>
          <span>黑白名单列表</span>
        </el-menu-item>
      </el-menu>
    </el-aside> -->
    <NuxtPage />
  </el-container>
</template>

<style scoped>
.el-header {
  --el-header-padding: 0;
}
</style>
