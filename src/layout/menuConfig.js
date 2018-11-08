// 菜单配置

const headerMenuConfig = [];
const sideMenuConfig = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'dashboard',
    children: [
      {
        path: '/analysis',
        name: '数据概览'
      },
      /*{
        path: '/monitor',
        name: '监控页'
      },
      {
        path: '/workplace',
        name: '工作台'
      }*/
    ]
  },
  {
    path: '/exception',
    name: '异常页',
    icon: 'warning',
    children: [
      {
        path: '/403',
        name: '403'
      },
      {
        path: '/404',
        name: '404'
      },
      {
        path: '/500',
        name: '500'
      }
    ]
  }
];

export {headerMenuConfig,sideMenuConfig}
