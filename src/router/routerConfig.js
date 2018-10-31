import Layout from '../layout';

import {Analysis} from './Dashboard';

const routerConfig = [{
  path: '/',
  layout: Layout,
  component: Analysis,
  children:[{
    path: '/dashboard/analysis',
    layout: Layout,
    component: Analysis
  }]
}];

export default routerConfig;
