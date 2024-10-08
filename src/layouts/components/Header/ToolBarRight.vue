<script setup lange='ts' name="ToolBarRight">
import Fullscreen from "./components/Fullscreen.vue";
import Guide from "./components/Guide.vue";
import ThemeSetting from "./components/ThemeSetting.vue";
import SearchMenu from "./components/SearchMenu.vue";
import Avatar from "./components/Avatar.vue";

</script>
<template>
  <div class="ct-tool-bar-rf">
    <div class="header-icon"> 
       <Fullscreen id="fullscreen" />
       <Guide id="Guide" />
       <SearchMenu id="SearchMenu" />
       <ThemeSetting id="ThemeSetting" />
       <Avatar id="Avatar" />
    </div>
  </div>
</template>
<style scoped>

.ct-tool-bar-rf {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 25px;
  cursor: pointer;
  .header-icon {
    display: flex;
    align-items: center;
    & > * {
      margin-left: 21px;
      color: var(--el-header-text-color);
    }
  }
  .username {
    margin: 0 20px;
    font-size: 15px;
    color: var(--el-header-text-color);
  }
}
</style>
