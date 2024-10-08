<template>
  <!-- 表格查询表单 -->
  
  <!-- 表格主体 -->
    <div class="ct-table">
        <div class="ct-table-header">
            <div class="ct-table-header-lt">
              <slot name="tableHeader"></slot>
            </div>
            <div class="ct-table-header-rt">
              <slot name="tableToolButton"></slot>

            </div>
        </div>

        <!-- <el-table
          ref="ctTable"
          :data="ctTableData"
          :border="border"
        >
          
        </el-table> -->
    </div>
</template>
<script setup lang='ts'>
// import {ref,computed} from "vue"
// import {ColumnProps} from "@/components/CtTable/interface/index.ts"
// import { ElTable } from "element-plus";

// export interface CtTableProps{
//     columns:ColumnProps[]; // 表格列配置
//     data?:any[];
//     requestApi?:(params:any)=>Promise<any>; //请求表格数据的api地址
//     requestAuto?:boolean;//是否自动请求表格数据
//     requestError?: (params: any) => void; // 表格 api 请求错误监听 ==> 非必传
//     dataCallback?: (data: any) => any; // 返回数据的回调函数，可以对数据进行处理 ==> 非必传
//     title?: string;//表格标题
//     pagination?:boolean;//是否需要分页组件
//     initParams?:any;//初始化请求参数
//     border?:boolean;//是否带有表格边框
//     toolButton?:("refresh" | "setting"| "search")[] | boolean; // 是否显示表格功能按钮
//     rowKey?:string;// 行数据的key
// }

// 接受父组件参数,配置默认值
// const  props = withDefaults(defineProps<CtTableProps>(),{
//     columns:()=>[],
//     requestAuto:false,
//     pagination:true,
//     initParams:{},
//     border:true,
//     toolButton:true,
//     rowKey:id
// })

// table实例
// const tableRef = ref<InstanceType<typeof ElTable>>();

// 是否显示搜索模块 
// const isShowSearth = ref<boolean>(false); 

// 判断ToolButtons是否显示
// const showToolButton = (key:"refresh" | "setting" | "searth")=>{
//   return Array.isArray(props.toolButton)? props.toolButton.includes(key) : props.toolButton
// }

// const ctTableData = computed(()=>{

// })
</script>
<style scoped>
</style>
