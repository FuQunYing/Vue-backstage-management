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
        name: '分析页'
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
];

export {headerMenuConfig,sideMenuConfig}
