<script lang="ts" setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// 太多了，只取其中一部分
// onMounted(() => {
//   GetList();
// });

const SearchKey = ref("");
const SearchInput = ref("");
// 要渲染的数据
const FileList = ref([{ "_id": "6690e60207c4229a71c95846", "packageName": "ant0531", "apkName": "蚂蚁加速器", "md5": "912d306c6fe3efb57285505af9f2a654", "result": "black" }, { "_id": "6690e60207c4229a71c95847", "packageName": "525027", "apkName": "牡丹直播", "md5": "e09e4791ff323af6bf688d6c6b29b918", "result": "black" }, { "_id": "6690e60207c4229a71c95848", "packageName": "712020", "apkName": "青苹果视频", "md5": "79a94a3896f0fdbff99765daffa07a02", "result": "black" }, { "_id": "6690e60207c4229a71c95849", "packageName": "630021", "apkName": "青青直播", "md5": "c7a933628dad08f87411455f79998356", "result": "black" }, { "_id": "6690e60207c4229a71c9584a", "packageName": "712018", "apkName": "香肠视频", "md5": "ee6ed6edecd9669ced07f6834fe2dadd", "result": "black" }, { "_id": "6690e60207c4229a71c9584b", "packageName": "10", "apkName": "小创游戏库", "md5": "e55e8a3ad9f4a94addf985a71ae99175", "result": "black" }, { "_id": "6690e60207c4229a71c9584c", "packageName": "713011", "apkName": "夜月直播", "md5": "baff39ad0214ca46ae8197a107ea5bf2", "result": "black" }, { "_id": "6690e60207c4229a71c9584d", "packageName": "7539a28f18fb54af5ab62b824faf639d989878a471213aa2e2d02229363cfa8c", "apkName": "正宗南通长牌", "md5": "f1325c19af839335d87296d684335415", "result": "black" }, { "_id": "6690e60207c4229a71c9584e", "packageName": "qqhh", "apkName": "QQMM", "md5": "de5ef92d0437d5c77fd052b5602441b6", "result": "black" }, { "_id": "6690e60207c4229a71c9584f", "packageName": "qqww", "apkName": "QQMM", "md5": "de5ef92d0437d5c77fd052b5602441b6", "result": "black" }, { "_id": "6690e60207c4229a71c95850", "packageName": "tvchong2.3.6", "apkName": "虫虫影视", "md5": "90af9915a9891fb1d232997a7926ddf7", "result": "black" }, { "_id": "6690e60207c4229a71c95851", "packageName": "WindmillVPN_v2.61", "apkName": "WindmillVPN", "md5": "64349d26a98f1c6a672a38e2e635bd7a", "result": "black" }, { "_id": "6690e60207c4229a71c95852", "packageName": "www", "apkName": "欣然业务网", "md5": "47d8959037f897f1d854fda36771eacf", "result": "black" }, { "_id": "6690e60207c4229a71c95853", "packageName": "xctvtbb969305", "apkName": "小曾TV台标版", "md5": "1c610fbf12adebee0fa366a1edac903b", "result": "black" }, { "_id": "6690e60207c4229a71c95854", "packageName": "yxdmjsq0004", "apkName": "旋风加速器APP", "md5": "62b50c8569173c72a574b1fde1f2ed16", "result": "black" }, { "_id": "6690e60207c4229a71c95855", "packageName": "yxdmjsq0008", "apkName": "旋风加速器最新版", "md5": "6c4e73a60df2c50e8f42000eb20392a2", "result": "black" }, { "_id": "6690e60207c4229a71c95856", "packageName": "yxwpfz0019", "apkName": "游咔破解版", "md5": "2287c928a72635f04c647e4d593d7e03", "result": "black" }, { "_id": "6690e60207c4229a71c95857", "packageName": "yxwpfz0355", "apkName": "植物大战僵尸修改器2023", "md5": "da20173f095dde782f414a7cc615aa00", "result": "black" }, { "_id": "6690e60207c4229a71c95858", "packageName": "yxwpjsq0006", "apkName": "银河加速器", "md5": "99110dd1f74b7454896e537b14a38e3f", "result": "black" }, { "_id": "6690e60207c4229a71c95859", "packageName": "yxwpjsq0013", "apkName": "袋鼠加速器免费版", "md5": "e5427ad06c7e44467dddcb7468f1284c", "result": "black" }, { "_id": "6690e60207c4229a71c9585a", "packageName": "yxwpjsq0020", "apkName": "西柚加速器安卓APP免费", "md5": "6856185f2b552f34721a6f9003f87078", "result": "black" }, { "_id": "6690e60207c4229a71c9585b", "packageName": "yxwpjsq0031", "apkName": "旋风加速度器", "md5": "7deabcf03cead50ccecc60107a05fdc6", "result": "black" }, { "_id": "6690e60207c4229a71c9585c", "packageName": "yxwpjsq0298", "apkName": "西柚加速器", "md5": "8577462b59a1db6cb9728b065a1b732a", "result": "black" }, { "_id": "6690e60207c4229a71c9585d", "packageName": "217317", "apkName": "51茶馆儿", "md5": "c277b27e8e6b34f5a02b1e1c108af58a", "result": "black" }, { "_id": "6690e60207c4229a71c9585e", "packageName": "815020", "apkName": "91香蕉", "md5": "a08a76bd571d3859149c6c58a47466e3", "result": "black" }, { "_id": "6690e60207c4229a71c9585f", "packageName": "20230323172942220044", "apkName": "AppStores", "md5": "fd7a53bae7b1763a1c67a0f63adc6410", "result": "black" }]);
// 黑名单列表
const BlackList = ref([]);

const TypeList = ref([
  {
    value: "md5",
    label: "md5",
  },
  {
    value: "name",
    label: "app名称",
  },
  {
    value: "package",
    label: "下载包名",
  },
]);

const GetList = () => {
  axios
    .get("http://8.138.83.46:5000/lists/blacklist")
    .then((response) => {
      const list = response.data.replace(/NaN/g, ' "" ');
      const filelist = JSON.parse(list).slice(0, 100);
      BlackList.value = filelist.map((obj) => {
        return obj.result === "black" ? { ...obj, result: "高危应用" } : obj;
      });
      FileList.value = BlackList.value;
    })
    .catch((error) => {
      console.error(error);
    });
};

const Search = () => {
  console.log(SearchKey.value);
  console.log(SearchInput.value);
  // 使用反引号和正确的变量插值语法
  axios
    .get(`http://8.138.83.46:5000/lists/search?value=${SearchInput.value}&type=${SearchKey.value}`)
    .then((response) => {
      console.log(response.data);
      FileList.value = response.data
    })
    .catch((error) => {
      console.error(error);
    });
};


const Refresh = () => {
  FileList.value = BlackList.value
};
</script>

<template>
  <page-contain title="黑白名单列表">
    <!-- 头部搜索区域 -->
    <el-form inline>
      <el-form-item label="搜索类别：">
        <el-select placeholder="请选择" v-model="SearchKey" style="width: 200px">
          <el-option v-for="item in TypeList" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="搜索:">
        <el-input style="width: 240px" placeholder="Please input" v-model="SearchInput" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Search">搜索</el-button>
        <el-button @click="Refresh">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 渲染名单表格 -->
    <el-table :data="FileList" stripe style="width: 100%">
      <el-table-column prop="packageName" label="下载包名" width="280" />
      <el-table-column prop="apkName" label="软件名称" width="250" />
      <el-table-column prop="md5" label="md5" width="180" />
      <el-table-column prop="_id" label="apkid" width="280" />
      <el-table-column prop="result" label="类别" width="180" />
    </el-table>
  </page-contain>
</template>

<style lang="scss" scoped></style>
