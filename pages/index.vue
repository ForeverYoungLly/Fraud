<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { Setting } from "@element-plus/icons-vue";
import { useRouter } from "nuxt/app";

const router = useRouter();
const pushApkParsing = () => {
  router.push("/ApkParsing");
};

const toReport = (data) => {
  router.push({
    path: "/report",
    query: {
      id: data
    },
  });
};

onMounted(() => {
  getlist();
});

const ListData = ref([]);
const getlist = () => {
  axios.get("http://127.0.0.1:5000/reports/list").then((response) => {
    ListData.value = response.data;
    console.log(response.data);
  });
};
</script>

<template>
  <el-main>
    <div class="logo">
      <img src="@/assets/bg.png" alt="Logo" />
    </div>
    <div class="content">
      <div class="btn">
        <el-button type="primary" style="
              font-size: larger;
              background-color: rgb(12, 53, 101);
              margin-top: 300px;
              height: 65px;
            " @click="pushApkParsing">上传可疑APK & 查线索<i class="el-icon-upload el-icon--right"></i></el-button>
        <p style="margin-top: 0px">
          <em class="type">"普通民众也能轻松分析违法APK"</em>
        </p>
      </div>
    </div>
    <el-divider style="margin-top: 220px"></el-divider>
    <div style="display: flex; justify-content: center">
      <img src="@/assets/report.png" alt="Logo" style="width: 80px" />
      <h1 style="
            margin-left: 40px;
            margin-top: 20px;
            font-size: larger;
            font-weight: bolder;
            color: rgb(12, 53, 101);
          ">
        最近分析
      </h1>
    </div>
    <p style="color: #909399; margin-top: 20px">
      <em style="color: red">*</em><em>下述仅为访客的分析记录，如果您不想在此显示自己的分析记录，请登录用户账号后再上传分析</em><em style="color: red">*</em>
    </p>
    <div style="
          display: flex;
          justify-content: center;
          margin-bottom: 10px;
          margin-top: 50px;
        ">
      <el-table :data="ListData" border ref="myTable" style="width: 75%; margin-bottom: 100px">
        <el-table-column prop="qid" label="id" width="230">
          <!-- <template #default="scope">
              <div style="display: flex; align-items: center">
                <span style="margin-left: 10px">{{ scope.row.id }}</span>
              </div>
            </template> -->
        </el-table-column>
        <el-table-column prop="application_name" label="软件名称" width="140">
        </el-table-column>
        <el-table-column prop="package_name" label="下载包名" width="240">
        </el-table-column>
        <el-table-column prop="md5" label="md5" width="300"></el-table-column>
        <el-table-column prop="target_sdk_version" label="目标版本号" width="100"></el-table-column>
        <el-table-column label="操作" min-width="80">
          <template v-slot="scope">
            <el-button link type="primary" size="small" @click="toReport(scope.row.qid)">查看报告</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-divider></el-divider>
    <div style="display: flex; justify-content: center; margin-bottom: 20px">
      <el-icon :size="30">
        <Setting />
      </el-icon>
      <h1 style="
            margin-left: 30px;
            font-size: larger;
            font-weight: bolder;
            color: rgb(12, 53, 101);
          ">
        技术优势
      </h1>
    </div>
    <!-- 第一张图 -->
    <div>
      <h1 style="
            font-size: larger;
            font-weight: bolder;
            color: rgb(12, 53, 101);
            margin-bottom: 50px;
          ">
        AI赋能、精准破解
      </h1>
      <img style="
            width: 70%;
            display: block;
            margin-left: auto;
            margin-right: auto;
          " src="@/assets/2.png" />
    </div>
    <!-- 第二张图 -->
    <div style="margin-top: 100px; margin-bottom: 80px">
      <h1 style="
            font-size: larger;
            font-weight: bolder;
            color: rgb(12, 53, 101);
            margin-bottom: 50px;
          ">
        解析全面、专业科学
      </h1>
      <img style="
            width: 70%;
            display: block;
            margin-left: auto;
            margin-right: auto;
          " src="@/assets/1.jpg" />
    </div>
    <el-divider></el-divider>
    <!-- 关于我的文字阐述 -->
    <div>
      <h1 style="color: rgb(12, 53, 101)">关于我们</h1>
      <P class="aboutme">社会治安好了，网上的骗子越来越多。</P>
      <P class="aboutme">罪犯通常用手机APP来操作花样百出的网上诈骗和赌博</P>
      <P class="aboutme">受害者和警察同志饱受其害。</P>
      <P class="aboutme">然而因专业技术有限，不是每个人都能对手机APK进行反编译。</P>
      <p class="aboutme">
        因此，诈骗终结者自动化APK违法线索分析平台，应运而生。
      </p>
    </div>
  </el-main>
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
  transform: translate(-39%, -50%);
  width: 650px;
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

.aboutme {
  color: #a8abb2;
  line-height: 30px;
}
</style>
