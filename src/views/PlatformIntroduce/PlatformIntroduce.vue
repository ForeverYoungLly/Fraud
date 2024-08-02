<script setup></script>

<template>
  <page-contain title="首页" style="width: 90%">
    <el-timeline style="max-width: 800px">
      <el-timeline-item timestamp="NO.1" placement="top">
        <el-card>
          <h4>项目简介</h4>
          <el-text class="mx-1">
            <p style="white-space: pre-wrap;text-align: justify; line-height: 2;">
                诈骗终结者综合APK解析技术、APK沙箱分析、机器学习模型、LLMs模型技术构建。
                该系统为业余用户、专业用户、警方设计的涉诈APK自动化分析工具，普通民众也能轻松分析违法APK,为诈骗取证和侦查提供有效帮助。
                诈骗终结者功能集成度高，包括多种APK采集方式、静动态分析相结合、快速识别涉诈站点及URL。
                核心优势在于基于XGBoost算法构建的涉诈判别模型以及基于LLMs大模型技术实现的智能分析模型。
                在算法构建部分，系统基于摸瓜平台获取白名单APK，并通过CICMalDroid数据集进行数据扩充以提高模型鲁棒性。
                系统基于APK获取的权限作为特征进行分析，通过Androguard获取APK对应权限特征构造数据集。
                其中基于APK获取的特征训练XGBoost判别模型在十折交叉验证集上二分类准确率高达0.976，
                能够对涉诈APK做出准确分类。
            </p>
        </el-text>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="NO.2" placement="top">
        <el-card>
          <h4>平台介绍</h4>
          <img
            src="@/assets/1.jpg"
            alt="图片加载失败"
            style="width: 700px; height: auto"
          />
          <p>采用前沿技术，为apk检测提供可靠平台</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="NO.3" placement="top">
        <el-card>
          <h4>功能简介</h4>
          <img
            src="@/assets/2.png"
            alt="图片加载失败"
            style="width: 700px; height: auto"
          />
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="NO.4" placement="top">
        <el-card>
          <h4>技术栈总结</h4>
          <img
            src="@/assets/3.png"
            alt="图片加载失败"
            style="width: 700px; height: auto"
          />
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </page-contain>
</template>

<style lang="scss" scoped></style>
