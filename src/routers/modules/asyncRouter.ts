export const asyncRouter = [{
  path: "/home/index",
  name: "/home",
  component: "/home/index",
  meta: {
    title: "首页",
    icon: "Menu",
    isAffix: true,
    isKeepAlive: true,
  },
},
{
  path: "/data-big-screen/index",
  name: "/dataBigScreen",
  meta: {
    title: "数据大屏",
    icon: "Calendar",
    isAffix: false,
    isKeepAlive: true,
    iconSpare: "🌺"
  }
},

{
  path: "/commonly",
  name: "/commonly",
  meta: {
    title: "常用组件",
    icon: "WalletFilled",
    isAffix: false,
    isKeepAlive: true,
  },
  children: [{
    path: "/commonly/selectFilterMenu",
    name: "selectFilterMenu",
    component: "/commonly/selectFilterMenu/index",
    meta: {
      title: "分类筛选器",
      icon: "Menu",
      isAffix: false,
      isKeepAlive: true,
      iconSpare: "🌺"
    }
  }, {
    path: "/commonly/useCtTable",
    name: "useCtTable",
    component: "/commonly/useCtTable/index",
    meta: {
      title: "使用 CtTable",
      icon: "Menu",
      isAffix: false,
      isKeepAlive: true,
    }
  }, {
    path: "/commonly/useSelectCtTable",
    name: "useSelectCtTable",
    component: "/commonly/useSelectCtTable/index",
    meta: {
      title: "使用 SelectCtTable",
      icon: "Menu",
      isAffix: false,
      isKeepAlive: true,
    }
  }, {
    path: "/commonly/useTreeTable",
    name: "useTreeTable",
    component: "/commonly/useTreeTable/index",
    meta: {
      title: "使用 TreeTable",
      icon: "Menu",
      isAffix: false,
      isKeepAlive: true,
    }
  }, {
    path: "/commonly/uploadData",
    name: "uploadData",
    component: "/commonly/uploadData/index",
    meta: {
      title: "批量上传数据",
      icon: "Menu",
      isAffix: false,
      isKeepAlive: true,
      iconSpare: "🌺"
    }
  },]
},
// {
//   path: "/form-designe",
//   name: "/form-designe",
//   meta: {
//     title: "表单设计",
//     icon: "Monitor",
//     isAffix: false,
//     isKeepAlive: true,
//   },
//   children: [{
//     path: "/form-designe/designe",
//     name: "designe",
//     component: "/form-designe/designe",
//     meta: {
//       title: "表单设计",
//       icon: "Menu",
//       isAffix: false,
//       isKeepAlive: true,
//     }
//   }]
// },

{
  path: "/directives",
  name: "/directives",
  meta: {
    title: "自定义指令",
    icon: "BrushFilled",
    isAffix: false,
    isKeepAlive: true
  },
  children: [
    {
      path: "/directives/commonly",
      name: "directiveCommonly",
      component: "/directives/commonly/index",
      meta: {
        title: "常用指令",
        icon: "Menu",
        isAffix: false,
        isKeepAlive: true,
      }
    },
    //   {
    //   path: "/directives/copyDirect",
    //   name: "copyDirect",
    //   component: "/directives/copyDirect/index",
    //   meta: {
    //     title: "复制指令",
    //     icon: "Menu",
    //     isAffix: false,
    //     isKeepAlive: true
    //   }
    // }, {
    //   path: "/directives/debounceDirect",
    //   name: "debounceDirect",
    //   component: "/directives/debounceDirect/index",
    //   meta: {
    //     title: "防抖指令",
    //     icon: "Menu",
    //     isAffix: false,
    //     isKeepAlive: true,
    //   }
    // }, {
    //   path: "/directives/throttleDirect",
    //   name: "throttleDirect",
    //   component: "/directives/throttleDirect/index",
    //   meta: {
    //     title: "节流指令",
    //     icon: "Menu",
    //     isAffix: false,
    //     isKeepAlive: true
    //   }
    // }, {
    //   path: "/directives/dragDirect",
    //   name: "dragDirect",
    //   component: "/directives/dragDirect/index",
    //   meta: {
    //     title: "拖拽指令",
    //     icon: "Menu",
    //     isAffix: false,
    //     isKeepAlive: true
    //   }
    // }
  ]
},
  // {
  //   path: "/system",
  //   name: "/system",
  //   meta: {
  //     title: "系统管理",
  //     icon: "Setting",
  //     isAffix: false,
  //     isKeepAlive: true
  //   },
  //   children: [{
  //     path: "/system/account",
  //     name: "account",
  //     component: "/system/account/index",
  //     meta: {
  //       title: "账号管理",
  //       icon: "Menu",
  //       isAffix: false,
  //       isKeepAlive: true
  //     }
  //   }, {
  //     path: "/system/role",
  //     name: "role",
  //     component: "/system/role/index",
  //     meta: {
  //       title: "角色管理",
  //       icon: "Menu",
  //       isAffix: false,
  //       isKeepAlive: true,
  //     }
  //   }, {
  //     path: "/system/menu",
  //     name: "systemMenu",
  //     component: "/system/menu/index",
  //     meta: {
  //       title: "菜单管理",
  //       icon: "Menu",
  //       isAffix: false,
  //       isKeepAlive: true
  //     }
  //   }, {
  //     path: "/system/dept",
  //     name: "dept",
  //     component: "/system/dept/index",
  //     meta: {
  //       title: "部门管理",
  //       icon: "Menu",
  //       isAffix: false,
  //       isKeepAlive: true
  //     }
  //   }, {
  //     path: "/system/dict",
  //     name: "dict",
  //     component: "/system/dict/index",
  //     meta: {
  //       title: "字典管理",
  //       icon: "Menu",
  //       isAffix: false,
  //       isKeepAlive: true
  //     }
  //   }, {
  //     path: "/system/task",
  //     name: "task",
  //     component: "/system/task/index",
  //     meta: {
  //       title: "定时任务",
  //       icon: "Menu",
  //       isAffix: false,
  //       isKeepAlive: true
  //     }
  //   }]
  // },
  // {
  //   path: "/auth",
  //   name: "/auth",
  //   meta: {
  //     title: "权限管理",
  //     icon: "MessageBox",
  //     isAffix: false,
  //     isKeepAlive: true,
  //   },
  //   children: [{
  //     path: "/auth/menu",
  //     name: "menu",
  //     component: "/auth/menu/index",
  //     meta: {
  //       title: "菜单权限",
  //       icon: "Menu",
  //       isAffix: false,
  //       isKeepAlive: true,
  //     }
  //   }, {
  //     path: "/auth/button",
  //     name: "button",
  //     component: "/auth/button/index",
  //     meta: {
  //       icon: "Menu",
  //       title: "按钮权限",
  //       isAffix: false,
  //       isKeepAlive: true,
  //     }
  //   }]
  // }
]
