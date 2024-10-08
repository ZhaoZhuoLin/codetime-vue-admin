<template>
  <div class="ct-guide-menu">
    <i :class="'iconfont icon-peiwangyindao'" class="toolBar-icon"  @click.prevent.stop="driverObj.drive()"></i>
  </div>
</template>

<script name="Guide" setup lang="ts">
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
const driverObj = driver({
  allowClose: true,
  doneBtnText: "结束",
  nextBtnText: "下一步",
  prevBtnText: "上一步",
  steps: [
    {
      element: "#Guide",
      popover: {
        title: "Guide",
        description: "查看指引",
        side: "right",
      },
    },
    {
      element: "#fullscreen",
      popover: {
        title: "fullscreen",
        description: "打开全屏",
        side: "right",
      },
    },
    {
      element: "#SearchMenu",
      popover: {
        title: "SearchMenu",
        description: "全局搜索",
        side: "right",
      },
    },
    {
      element: "#ThemeSetting",
      popover: {
        title: "ThemeSetting",
        description: "主题设置",
        side: "right",
      },
    },
  ],
});
 </script>
