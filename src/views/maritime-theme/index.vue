<template>
  <div class="w-3/4 mx-auto">
    <section>
      <h2 class="text-center text-2xl tracking-widest font-bold my-10">专题数据分类</h2>
      <div class="flex">
        <div v-for="(item, index) in subjectArr">
          <img :src="item.imgUrl" alt="">
          <span>{{ item.text }}</span>
        </div>
      </div>
    </section>
    <section>
      <h2 class="text-center text-2xl tracking-widest font-bold my-10">数据统计</h2>
      <div class="flex shrink-0 w-full flex-wrap">
        <div class="w-1/4 text-center mb-10" v-for="(item, index) in dataStatistic" >
          <div>{{ item.text }}</div>
          <div class="flex items-center justify-center text-blue-600  mt-2">
            <el-icon :size="30" color="blue">
              <Edit />
            </el-icon>
            <span class="text-2xl">{{ item.size }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

const subjectArr = [
  {
    text: 'AIS数据专题',
    imgUrl: 'src/assets/imgs/demo1.jpg' // 不需要使用 require，直接使用 src
  },
  {
    text: '雷达数据专题',
    imgUrl: 'src/assets/imgs/demo1.jpg'
  },
  {
    text: '船舶档案专题',
    imgUrl: 'src/assets/imgs/demo1.jpg'
  },
  {
    text: 'ADS-B数据专题',
    imgUrl: 'src/assets/imgs/demo1.jpg'
  },
  {
    text: '船舶图像专题',
    imgUrl: 'src/assets/imgs/demo1.jpg'
  },
  {
    text: '港口数据专题',
    imgUrl: 'src/assets/imgs/demo1.jpg'
  },
  {
    text: '船舶异常信息专题',
    imgUrl: 'src/assets/imgs/demo1.jpg'
  },
]

const dataStatistic = [
  {
    text: '数据库',
    size: '100个'
  },
  {
    text: '专题数据大小',
    size: '100个'
  },
  {
    text: '专题数据总量',
    size: '100个'
  },
  {
    text: '注册用户数',
    size: '100个'
  },
  {
    text: '网站访问量',
    size: '100个'
  },
  {
    text: '总申请量',
    size: '100个'
  },
  {
    text: '总下载量',
    size: '100个'
  },
  {
    text: '总下载次数',
    size: '100个'
  }
]

</script>

<style lang="scss" scoped>

</style>