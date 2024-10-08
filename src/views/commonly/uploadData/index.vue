
<template>
  <div class="ct-card ct-content-box">
    <el-button type="primary" @click="addXlsx" >
      批量上传数据 🤹‍♂️
    </el-button>
    <ImportExcel ref="importRef"/>
  </div>
</template>
<script setup lange='ts' name="tabs">
import {ref} from "vue";
import ImportExcel from "@/components/ImportExcel/index.vue"
const importRef = ref();

const addXlsx =()=>{
  console.log(importRef.value);
  importRef.value.acceptParams({
    title: "数据",
    downloadTempUrl: ""
  })
}
</script>
<style scoped>
</style>
