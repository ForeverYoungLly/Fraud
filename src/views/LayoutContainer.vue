<script setup>
import { Files } from "@element-plus/icons-vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {});
</script>

<template>
  <el-container class="layout-container">
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
          <span>平台介绍</span>
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
    </el-aside>
    <el-container>
      <el-header>
        <h3 style="text-align: center; margin-right: 450px;">诈骗终结者——涉诈APK智能识别系统</h3>
        <div class="block" style="margin-right: 10px">
          <el-avatar
            :size="30"
            src="https://pic.616pic.com/ys_img/00/05/82/I2Pgna6kwf.jpg"
          />
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;
  .el-aside {
    background-color: #232323;
    &__logo {
      height: 120px;
      background: url("") no-repeat center / 120px auto;
    }
    .el-menu {
      border-right: none;
    }
  }
  .el-header {
    padding-right: 10vw;
    background-color: #fff;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    justify-content: end;
    .el-dropdown__box {
      display: flex;
      align-items: center;
      .el-icon {
        color: #999;
        margin-left: 10px;
      }

      &:active,
      &:focus {
        outline: none;
      }
    }
  }
  .el-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
  }
}
</style>
