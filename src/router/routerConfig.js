import Layout from '../layout';

import {Analysis, Query} from './Dashboard';
import {Page404, Page403, Page500} from "./Pages";

const routerConfig = [
  {
    path: '/',
    layout: Layout,
    component: Analysis,
    children:[
      {
        path: '/dashboard/analysis',
        layout: Layout,
        component: Analysis
      },
      {
        path: '/dashboard/query',
        layout: Layout,
        component: Query
      },
      {
        path: '/exception/403',
        layout: Layout,
        component: Page403
      },
      {
        path: '/exception/404',
        layout: Layout,
        component: Page404
      },
      {
        path: '/exception/500',
        layout: Layout,
        component: Page500
      },
    ]
  },
  {
    path: '*',
    layout: Layout,
    component: Page404
  }
];

export default routerConfig;
