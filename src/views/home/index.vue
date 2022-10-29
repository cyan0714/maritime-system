<template>
  <div class="flex pt-10">
    <el-col :span="3">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item v-for="(item,index) in menus" :index="index">
          <el-icon><setting /></el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-col>

    <el-col :span="20" class="ml-10">
      <h1 class="text-4xl font-bold mb-4">海上目标态势专题库</h1>
      <div class="flex justify-between">
        <div>
          <p>海上目标态势数据专题库 汇集了来自南方海洋实验室公共平台和创新团队获取、收集的各类海上目标监测数据，专题数据库周期性更新，提供海上目标态势数据的查询检索、信息预览、共享下载、态势展示等服务。海上目标态势专题数据包括:雷达、AIS、ADS-B、船舶档案、船舶图像、全球港口、船舶历史异常信息七类专题数据库。</p>
          <p class="mt-4">进入<span class="text-cyan-600 mx-2">海上目标态势</span>专题库</p>
        </div>
        <img src="src/assets/imgs/demo1.jpg" width="350">
      </div>

      <h4 class="text-xl text-black font-bold mt-3">海上目标态势数据包括:</h4>
      <p v-for="item in pList">{{ item }}</p>
      <p class="mt-4">用户进入该系统后能够检索到我们提供的海上目标态势数据，部分数据需要申请后才能提供下载。</p>

      <h4 class="text-lg text-black font-bold mt-3">数据使用事项：</h4>
      <p>1、本数据仅限科学研究使用，不得用于商业用途，其它网站和系统必须经南方海洋实验室海洋数据中心授权才可使用和转载。</p>
      <p>2、数据申请人员不得私自传播所申请到的数据。</p>
      <p>3、利用申请数据发表的论文和其它成果，必须标注数据来源并在数谢中说明。</p>

      <h4 class="text-lg text-black font-bold mt-3">致谢方式参考以下规范：</h4>
      <p>中文致谢方式:“感谢南方海洋科学与工程广东省实验室(珠海)提供数据支撑”</p>
      <p>英文致谢方式:“Acknowledgement for the data support from Southern Marine Sclence and Engineering Guangdong Laboratory (Zhuhal)</p>
    </el-col>
  </div>
</template>

<script setup>

const menus = [
  {
    name: '科考船次'
  },
  {
    name: '基础地理'
  },
  {
    name: '数值预报'
  },
  {
    name: '科考船'
  },
  {
    name: 'CTD/XCTD'
  },
  {
    name: 'XBT'
  },
  {
    name: '港珠澳大桥断面综合观测系统'
  },
  {
    name: '气象台站'
  },
  {
    name: '研究数据'
  },
  {
    name: '生物资源'
  },
  {
    name: '海洋遥感'
  },
  {
    name: '海上目标态势'
  },
]
const pList = [
  'AIS: 包括船舶ID、平台编号，采售时间，船舶识别号、信息类型编号、经度、结度、对地航向，航艏向，对地航速等数据。',
  'ADS-B: 包括平台编号、采集时间、系统区域代码、系统识别代码、经度、纬度等数据。',
  '船舶档案: 包括船舶类型、船籍、尺寸、载重、建造时间等数据',
  '船舶图像: 包括数据库索引信息(平台编号、日期、观测编号等)',
  '全球港口: 包括全球港口名称、国家、状态等数据。',
  '船舶历史异常信息:包括船舶消失、船舶出现、关注区船舶异常、船舶停航、船舶接驳等数据。'
]
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>

</style>