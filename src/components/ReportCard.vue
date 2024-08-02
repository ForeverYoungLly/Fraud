<script setup>
defineProps({
    obj:{
        required:true,
        type:{
            name:String,
            md5:String,
            time:String,
            environment:String,
            status:String,
            score:Number,
            IOC:String,
            tag:String
        }
    }
})
</script>

<template>
  <el-card class="box-card">
        <div slot="header" class="header">
            <span>{{obj.name}}</span>
        </div>
        <el-divider></el-divider>
        <div>
            <el-row type="flex" class="row-bg">
                <el-col :span="6"><div class="grid-content bg-purple">MD5:{{obj.md5}}</div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple-light">提交时间:{{obj.time}}</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">分析环境:{{obj.environment}}</div></el-col>
            </el-row>
            <el-row type="flex" class="row-bg">
                <el-col :span="6"><div class="grid-content bg-purple">分析状态:{{obj.status}}</div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple-light">恶意评分:{{obj.score}}</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple">相关IOC:{{obj.IOC}}</div></el-col>
            </el-row>
            <el-row type="flex" class="row-bg">
                <el-col :span="6"><div class="grid-content bg-purple">文件标签:{{ obj.tag }}</div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>
    </el-card>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.header{
    font-size: 1.5rem;
    transform: translateY(15%);
    margin:0 0 10px 0;
}
.row-bg{
    padding:0 0 0 10px;
    margin: 10px 0 0 0;
}
.box-card {
    width: 100%;
    height: 180px;
    margin-bottom: 10px;
  }
</style>
