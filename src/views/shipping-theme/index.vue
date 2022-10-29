<template>
  <div class="px-36">
    <section class="flex mt-8 justify-between">
      <div>
        <h2 class="text-4xl font-bold mb-10">船舶档案专题库</h2>
        <p class="mb-4">我们收集了船舶档案数据。</p>
        <p class="font-bold">船舶档案数据基本信息:</p>
        <p class="text-neutral-400">船舶档案来自于十多个船级社，主要有:中国船级社、德劳-挪威船级社、美国船级社、日本船级社。韩国船级社、俄罗斯船级社、印度船级社、印尼船级社、法国船级社等。除船舶基本信息外，提供船
          舶尺寸、船舶轮机信息、船舶机舱信息等，主要内容包含:船名，中文名、MMSIIMO、呼号，船
          旗、船型、建造年代、载重吨、设计航速、船长、宽、设计吃水等信息。</p>
        <p class="text-neutral-400 mt-8">参数项:船名、中文名、MMSI、IMO、呼号、船旗、船型、建造年代、载重吨、设计航速、船长、宽、设计吃水、船舶尺寸、船舶轮机、船舶机舱等信息。</p>
      </div>
      <div>
        <p class="text-center">船舶档案信息</p>
        <img src="src/assets/imgs/demo1.jpg" alt="" width="350">
      </div>
    </section>

    <section>
      <h2 class="text-xl text-blue-600 font-bold mt-8">数据检索</h2>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="查询时间(年月)">
          <el-date-picker v-model="formInline.time" type="daterange" start-placeholder="Start Date"
            end-placeholder="End Date" :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]" />
        </el-form-item>
        <el-form-item label="区域范围">
          <el-select v-model="formInline.region" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="onSubmit">批量下载</el-button>
        </el-form-item>
      </el-form>
      <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column label="Date" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column property="name" label="Name" width="120" />
        <el-table-column property="address" label="Address" show-overflow-tooltip />
      </el-table>
    </section>

  </div>
</template>

<script setup>
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
  time: '',
  resource: '地面选择'
})

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const handleSelectionChange = (val) => {
  // multipleSelection.value = val
}

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style lang="scss" scoped>

</style>