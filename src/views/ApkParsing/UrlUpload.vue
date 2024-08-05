<script setup lang="ts">
import { reactive, ref } from "vue";
import axios from "axios";
defineOptions({ name: "UrlUpload" });
const url = ref("");

// 折叠面板
const activeNames = ref(["1"]);
const handleChange = (val: string[]) => {
  console.log(val);
};

const loading = ref(false);
const fileId = ref("");
const dialogTableVisible = ref(false);

const AIResponse = ref('')
const md5 = ref("");
const application_name = ref("");
const qid = ref("");
const package_name = ref("");
const version_code = ref("");
const version_name = ref("");
const target_sdk_version = ref("");
const SHA1 = ref("");
const permissions = ref([]);
const activities = ref([]);
let StaticAnalysis = reactive({});
let ThreatAnalysis = reactive({});

const upload = () => {
  loading.value = !loading.value;
  axios({
    method: "post",
    url: `https://fu.oboard.eu.org/files/upload/url`, //此处为往后台发送请求的地址
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
