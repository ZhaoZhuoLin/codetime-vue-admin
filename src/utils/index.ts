/**
 * @description 获取浏览器默认语言
 * @returns {string}
 */
export function getBrowserLang() {
  let browserLang = navigator.language ? navigator.language : navigator.browserLanguage;
  let defaultBrowserLang = "";
  if (["cn", "zh", "zh-cn"].includes(browserLang.toLowerCase())) {
    defaultBrowserLang = "zh";
  } else {
    defaultBrowserLang = "en";
  }
  return defaultBrowserLang;
}

/**
 * @description 获取当天时间段
 * @returns {string}
 */
export function getTimeStateStr() {
  const timeNow = new Date();
  const hours = timeNow.getHours();
  if (hours >= 6 && hours <= 10) return `早上好`;
  if (hours >= 10 && hours <= 14) return `中午好`;
  if (hours >= 14 && hours <= 18) return `下午好`;
  if (hours >= 18 && hours <= 24) return `晚上好`;
  if (hours >= 0 && hours <= 6) return `凌晨好`;
}

/**
 * @description 使用递归扁平化菜单,方便添加动态路由
 * @param {Array} menuList 
 * @returns {Array}
 */
export function getFlatMenuList(menuList: Menu.MenuOptions[]): Menu.MenuOptions[] {
  let newMenuList: Menu.MenuOptions[] = JSON.parse(JSON.stringify(menuList));
  return newMenuList.flatMap(item => [item, ...(item.children ? getFlatMenuList(item.children) : [])]);
}

/**
 * @description 使用递归找出所有面包屑进行存储
 * @param {Array} menuList 
 * @param {Object} parent 
 * @param {Object} result 处理后的结果 
 */
export const getAllBreadcrumbList = (menuList: Menu.MenuOptions[], parent = [], result: { [key: string]: any } = {}) => {
  for (const item of menuList) {
    result[item.path] = [...parent, item];
    if (item.children) getAllBreadcrumbList(item.children, result[item.path], result);
  }
  return result;
};
