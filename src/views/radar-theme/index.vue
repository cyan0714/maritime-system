<template>
  <div class="px-36">
    <section class="flex mt-8 justify-between">
      <div>
        <h2 class="text-4xl font-bold mb-10">雷达数据专题库</h2>
        <p class="mb-4">我们收集了自2019年以来的雷达数据。</p>
        <p class="font-bold">雷达数据基本信息:</p>
        <p>探测区域:海南岛环岛、福建省沿岸</p>
        <p>观测范围:岸线监测站点覆盖沿岸30km，海上平台覆盖部署点位周边30km。○时间范围:2019年至今，实时数据逐月更新发布。</p>
        <p>时间范围:2019年至今，实时数据逐月更新发布。</p>
        <p>参数项:雷达批号、平台编号、采集时间、目标名称、纬度、经度、目标类型、航向角、航速
          航艏向、目标长度、目标质量、是否预测、目标信息。</p>
      </div>
      <div>
        <p class="text-center">雷达观测范围示意图</p>
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

    <section>
      <h2 class="text-xl text-blue-600 font-bold mt-8">热力图检索</h2>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="查询时间(年月)">
          <el-date-picker v-model="formInline.time" type="daterange" start-placeholder="Start Date"
            end-placeholder="End Date" :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">一周内</el-button>
          <el-button type="primary" @click="onSubmit">一月内</el-button>
        </el-form-item>
        <el-form-item label="空间位置：">
          <el-radio-group v-model="formInline.resource">
            <el-radio label="地面选择" />
            <el-radio label="区域检索" />
          </el-radio-group>
        </el-form-item>
      </el-form>
      <img src="src/assets/imgs/demo1.jpg" alt="" class="w-full mb-8">
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