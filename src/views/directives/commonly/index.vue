<template>
  <div class="ct-card ct-content-box">

    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="复制指令" name="copyDirect">
        <div>
          <el-input
            type="primary"
            v-model="copyValue"
            placeholder="请输入内容"
            style="width: 500px"
          >
            <template #append>
              <el-button v-copy="copyValue"> 复制 </el-button>
            </template>
          </el-input>
        </div>
      </el-tab-pane>
      <el-tab-pane label="防抖指令" name="debounceDirect">
        <div>
          <el-button
            type="primary"
            v-debounce="{ func: debouncefunc, millisecondNum: millisecondNum }"
            >防抖按钮{{ millisecondNum }}毫秒后执行</el-button
          >
        </div>
      </el-tab-pane>
      <el-tab-pane label="节流指令" name="throttleDirect">
        <el-button v-throttle="throttleClick" type="primary"
          >节流按钮(每隔1s后执行)</el-button
        >
      </el-tab-pane>
    </el-tabs>
    <el-button type="primary">添加拖拽指令盒子</el-button>
    <!-- <div class="drag-box" v-draggable>点我拖拽</div> -->
  </div>
</template>
<script setup lange="ts" name="directiveCommonly">
import { ref } from "vue";
import { ElMessage } from "element-plus";
const activeName = ref("copyDirect");
 

// 复制指令
const copyValue = ref("欢迎使用codetime-admin");

// 防抖指令
const millisecondNum = ref(500);
const debouncefunc = () => {
  ElMessage.success("我是防抖按钮触发的事件");
};

// 节流指令
const throttleClick = () => {
  ElMessage.success("我是节流按钮触发的事件");
};
</script>

<style scoped lang="scss">
 
.drag-box {
  width: 100px;
  height: 100px;
  font-size: 12px;
  text-align: center;
  line-height: 100px;
  border-radius: 20px;
  font-weight: bold;
  color: white;
  background: var(--el-color-primary);
  border-color: var(--el-color-primary);
}
</style>
