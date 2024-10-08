import { Ref } from "vue"
// 定义列类型
export type TypeProps = "index" | "selection" | "radio" | "expand" | "sort"

// 字典类型
export interface EnumProps {
  lable?: string;
  value?: string | number | boolean | any[]; //选项框值
  disabled?: boolean;//是否禁用
  tagType?: string; // 当 tag 为 true 时，此选择会指定 tag 显示类型
  children?: EnumProps[]; // 为树形选择时，可以通过 children 属性指定子选项
  [key: string]: any;
}

// 定义搜索列字段类型
export type SearthType = "input" | "input-number" | "select" | "select-v2" | "tree-select" | "cascader" | "data-picker" | "time-picker" | "time-select" | "switch" | "slider"

// 所有条件类型
export type SearchProps = {
  el?: SearthType;//当前搜索框类型
  label?: string;
  props?: any;//搜索框参数
  tooltip?: string;
  order?: number; // 搜索项排序（从大到小）
  span?: number; // 搜索项所占用的列数，默认为 1 列
  offset?: number; // 搜索字段左侧偏移列数
  defaultValue?: string | number | boolean | any[] | Ref<any>; // 搜索项默认值
}


export type FieldNamesProps = {
  label: string;
  value: string | number;
  children?: FieldNamesProps
}

export interface ColumnProps {
  type?: TypeProps;//列类型
  tag?: boolean | Ref<boolean>;//是否是标签展示
  isShow?: boolean | Ref<boolean>; //是否在表格row中显示
  search?: SearchProps | undefined;
  enum?: EnumProps[] | Ref<EnumProps[]> | ((params?: any) => Promise<any>); // 枚举字典
  isFilterEnum?: boolean | Ref<boolean>;//是否根据enum进行格式化
  fieldNames?: FieldNamesProps; //指定 label && value && children 的key值

}
