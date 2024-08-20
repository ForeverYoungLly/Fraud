<script setup>
import { ref } from 'vue'
const activeName = ref('first')
const handleClick = (() => {

})
</script>

<template>
    <page-contain title="APK 解析">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="文件上传" name="first">
                <FileUpload></FileUpload>
            </el-tab-pane>
            <el-tab-pane label="URL 上传" name="second">
                <UrlUpload></UrlUpload>
            </el-tab-pane>
            <el-tab-pane label="二维码上传" name="third">
                <QrcodeUpload></QrcodeUpload>
            </el-tab-pane>
        </el-tabs>
    </page-contain>
</template>

<style scoped></style>
