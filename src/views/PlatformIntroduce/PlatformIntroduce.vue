<script setup>
import { useRouter } from 'vue-router'
import {  } from '@element-plus/icons-vue'

const router = useRouter()
const pushApkParsing = () => {
  router.push('/ApkParsing')
}
</script>

<template>
  <el-container>
    <el-header>
      <h2>诈骗终结者——涉诈APK智能识别系统</h2>
    </el-header>
    <el-main>
      <div class="logo">
        <img src="@/assets/bg.png" alt="Logo" />
      </div>
      <div class="content">
        <div class="btn">
          <el-button type="primary" style="font-size: larger; background-color: rgb(12, 53, 101); margin-top: 300px; height: 70px;" @click="pushApkParsing">上传可疑APK & 查线索<i class="el-icon-upload el-icon--right"></i></el-button>
          <p style="margin-top: 0px;">"普通民众也能轻松分析违法APK"</p>
        </div>
      </div>
      <el-divider style="margin-top: 220px;"></el-divider>
      <div style="display: flex; justify-content: center;">
        <img src="@/assets/report.png" alt="Logo" style="width: 80px;" />
        <h1 style="margin-left: 40px; color: rgb(12, 53, 101);">最近分析</h1>
      </div>
      <p style="color: #909399;"><em style="color: red;">*</em><em>下述仅为访客的分析记录，如果您不想在此显示自己的分析记录，请登录用户账号后再上传分析</em><em style="color: red;">*</em></p>
    </el-main>
  </el-container>
</template>

<style scoped>
.el-header {
  background-color: rgb(2, 53, 101);
  color: #fff;
  text-align: center;
  line-height: 20px;
}

.el-main {
  color: #333;
  text-align: center;
}

.body {
  background-color: #ffffff;
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: auto;
  opacity: 0.2;
}

.content {
  position: relative;
  z-index: 2;
}

.content p {
  color: #333;
  font-size: 16px;
  text-align: center;
  padding-top: 100px;
}


</style>
