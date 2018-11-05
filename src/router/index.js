import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './routerConfig'

/**
 * 将路由配置扁平化
 * @param {Array} config 路由配置
 * @return {route}
 * @example
 * const routes = [
 *  {
 *    path: '/dashboard/analysis',
 *    component: XXX
 *    children: [
 *      {
 *        path: '',
 *        component:Dashboard
 *      }
 *    ]
 *  }
 * ]
 */

const routerMap = [];
const recursiveRouterConfig = (config = []) => {
  config.forEach((item) => {
    const route = {
      path: item.path,
      component: item.layout,
      children: [
        {
          path: '',
          component: item.component,
        },
      ],
    };
    if (Array.isArray(item.children)) {
      recursiveRouterConfig(item.children)//如果children里面又有children数组，则再次调用
    }
    routerMap.push(route);
  });
  return routerMap;
};
const routes = recursiveRouterConfig(routerConfig);

Vue.use(Router);

export default new Router({
 routes
})
