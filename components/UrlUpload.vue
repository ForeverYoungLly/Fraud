<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "nuxt/app";
const router = useRouter();
defineOptions({ name: "UrlUpload" });
const url = ref("");

const loading = ref(false);
const fileId = ref("");

const upload = () => {
  loading.value = !loading.value;
  axios({
    method: "post",
    url: "http://8.138.83.46:5000/files/upload/url", //此处为往后台发送请求的地址
    data: {
      url: url.value,
    },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }).then((res) => {
    // 处理组件加载中
    loading.value = !loading.value;
    console.log(res);
    fileId.value = res.data.id;
    if (res.status === 200) {

      router.push({
        path: '/report',
        query: {
          id: res.data.id
        }
      })


    }
  });
};
</script>

<template>
  <el-input type="textarea" :rows="10" placeholder="请输入需要分析的url" v-model="url" resize="none" class="textArea">
  </el-input>
  <el-button type="primary" class="button" @click="upload">上传分析</el-button>
</template>

<style scoped>
.textArea {
  font-size: 17px;
}

.button {
  font-size: 15px;
  font-family: "宋体";
  position: relative;
  left: 88%;
  transform: translateY(-150%);
}

:deep(.my-label) {
  background: var(--el-color-success-light-9) !important;
}

:deep(.my-content) {
  background: var(--el-color-danger-light-9);
}
</style>
