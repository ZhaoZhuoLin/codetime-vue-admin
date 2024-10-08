<template>
  <div class="ct-card ct-content-box">
     <SelectFilter
      :data="filterData"
      :default-values="filterResult"
      @change="changeFilter"
    ></SelectFilter>
    <span>分类选择器，当前选中的值：{{ filterResult }}</span>

    <el-descriptions style="width: 100%;" title="配置项⭐️" border  column="1">
    <el-descriptions-item label="名称">描述</el-descriptions-item>
    <el-descriptions-item label="data">进行筛选的数据列表</el-descriptions-item>
    <el-descriptions-item label="default-values">默认选中</el-descriptions-item>    
    <el-descriptions-item label="@change">绑定选中的回调方法,返回default-values</el-descriptions-item>    

  </el-descriptions>
  </div>
</template>
<script setup lange="ts" name="selectFilterMenu">
import { ref } from "vue";
import SelectFilter from "@/components/SelectFilter/index.vue";
const filterResult = ref({ workState: "1", currentWeather: ["1", "2"],chooseTime:"1" });
const changeFilter = (val) => {
  filterResult.value = val;
}; 
const filterData = [
  {
    title: "作业目的",
    key: "workState", 
    multiple: false,
    options: [
      {
        label: "无作业",
        value: "",
      },
      {
        label: "增雨",
        value: "1",
        icon: "Pouring",
      },
      {
        label: "防雹",
        value: "2",
        icon: "Cloudy",
      },
    ],
  },
  {
    title: "当前天气",
    key: "currentWeather",
    multiple: true,
    options: [
      {
        label: "无天气",
        value: "",
      },
      {
        label: "多云",
        value: "1",
        icon: "PartlyCloudy",
      },
      {
        label: "零星小雨",
        value: "2",
        icon: "Drizzling",
      },
      {
        label: "晴空",
        value: "3",
        icon: "Sunny",
      },
      {
        label: "打雷",
        value: "4",
        icon: "Lightning",
      },
    ],
  },
  {
    title: "选择时间",
    key: "chooseTime",
    multiple: false,
    options: [
      {
        label: "全部",
        value: "",
      },
      {
        label: "近24h",
        value: "1",
      },
      {
        label: "近48h",
        value: "2",
       },
      {
        label: "本周",
        value: "3",
       },
       {
        label: "本月",
        value: "4",
       },
       {
        label: "本年度",
        value: "5",
       },
    ],
  },
];
</script>

<style scoped></style>
