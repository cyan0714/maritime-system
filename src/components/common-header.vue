<template>
  <div>
    <div
      class="flex justify-between w-full h-28 bg-[url('@/assets/imgs/demo1.jpg')] bg-no-repeat bg-cover text-white px-20">
      <div class="flex items-center h-full">
        <el-icon :size="60" color="#fff">
          <Edit />
        </el-icon>
        <h3 class="font-bold text-2xl tracking-widest ml-2">海上目标态势数据共享发布系统</h3>
      </div>
      <div class="flex items-center h-full">
        <span>2022-10-28 12:23:22</span>
        <span class="mx-2">丨</span>
        <el-icon :size="30" color="#fff">
          <UserFilled />
        </el-icon>
        <span>欢迎你</span>
      </div>
    </div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64"
      text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-sub-menu index="2">
        <template #title>海上数据专题</template>
        <el-menu-item index="2-1">AIS数据专题</el-menu-item>
        <el-menu-item index="2-2">雷达数据专题</el-menu-item>
        <el-menu-item index="2-3">ADS-B数据专题</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">船舶专题</el-menu-item>
      <el-menu-item index="4">港口专题</el-menu-item>
      <el-menu-item index="5">态势系统</el-menu-item>
      <el-menu-item index="6">数据可视化</el-menu-item>
      <el-menu-item index="7">文件管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from 'vue'

const router = useRouter()
const activeIndex2 = ref('1')

const handleSelect = (key, keyPath) => {
  console.log(key);
  if (key == 1) {
    router.push('/')
  }else if (key == '2-1') {
    router.push('/maritime-theme')
  } else if (key == '2-2') {
    router.push('/radar-theme')
  } else if (key == '3') {
    router.push('/shipping-theme')
  } else if (key == 6) {
    router.push('/data-visualization')
  } 
}
</script>

<style scoped>
/* svg {
  width: 40px;
  height: 40px;
  color: red;
} */
</style>