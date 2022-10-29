<template>
  <div class="px-36">
    <section>
      <h2 class="text-4xl font-bold my-10">数据可视化</h2>
      <div class="flex shrink-0 w-full flex-wrap">
        <div class="w-1/3 text-center mb-10" v-for="(item, index) in dataStatistic">
          <div>{{ item.text }}</div>
          <div class="flex items-center justify-center text-blue-600  mt-2">
            <el-icon :size="30" color="blue">
              <Edit />
            </el-icon>
            <span class="text-2xl">{{ item.size }}</span>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <div class="flex justify-evenly">
          <div v-for="item in 3" :id="'demo'+ item" class="w-1/4 h-72"></div>
        </div>
        <div class="flex justify-evenly">
          <div v-for="item in 3" :id="'demo'+ (item + 3)" class="w-1/4 h-80"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, onMounted } from 'vue'

onMounted(() => {
  initChartBar('demo1', '用户注册量排名（Top5）');
  initChartBar('demo2', '数据下载次数单位排名（Top5）');
  initChartBar('demo3', '专题库累计下载次数排名（Top5）');
  initChartPie('demo4', '各类专题数据占比分析（Top5）');
  initChartPie('demo5', '海域/区域搜索排名占比分析（Top5）');
  initChartLine('demo6', '各专题库数据下载次数趋势（Top5）');
});

const initChartBar = (id, title) => {
  const myChartBar = echarts.init(document.getElementById(id));

  myChartBar.setOption({
    title: {
      text: title,
      left: 'center',
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });
}

const initChartPie = (id, title) => {
  const myChartPie = echarts.init(document.getElementById(id));

  myChartPie.setOption({
    title: {
      text: title,
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      // orient: 'vertical',
      // left: 'left',
      top: 30,
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        top: 25,
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  })
}

const initChartLine = (id, title) => {
  const myChartPie = echarts.init(document.getElementById(id));

  myChartPie.setOption({
    title: {
      text: title,
      left: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      top: 30
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
    ]
  })
}

const dataStatistic = [
  {
    text: '汇聚总量',
    size: '12323亿条'
  },
  {
    text: '文件总数',
    size: '2323份'
  },
  {
    text: '数据总量',
    size: '2334.34G'
  },
  {
    text: '总申请量',
    size: '123243次'
  },
  {
    text: '总下载量',
    size: '29.23TB'
  },
  {
    text: '总下载次数',
    size: '10434次'
  },
]
</script>

<style lang="scss" scoped>

</style>