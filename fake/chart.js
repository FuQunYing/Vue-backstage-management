import moment from 'moment';
// data is a fake
const visitData = [];
const beginDay = new Date().getTime();

const fakeY = [3,6,5,4,8,6,1,4,9,6,4,5,7,1,2,7,5,4,3,6,8,4,3,5];
for (let i = 0; i < fakeY.length; i++) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i]
  })
}

const visitData2 = [];
const fakeY2 = [1,5,7,4,5,7,9,4,6];
for(let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i]
  })
}

const salesData = [];
for(let i = 0; i < 12; i++) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200
  })
}

const searchData = [];
for (let i = 0; i < 50; i++) {
  searchData.push({
    index:i+1,
    keyword: `搜索关键词-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2)
  })
}
const salesTypeData = [
  {
    x: '外套',
    y: 2301
  },
  {
    x: '卫衣',
    y: 3246
  },
  {
    x: '短袖T恤',
    y: 5624
  },
  {
    x: '羽绒服',
    y: 4628
  },
  {
    x: '鞋子',
    y: 860
  },
  {
    x: '裤装',
    y: 3264
  },
  {
    x: '配饰',
    y: 1472
  }
];
const salesTypeDataOnline = [
  {
    x: '外套',
    y: 368
  },
  {
    x: '卫衣',
    y: 428
  },
  {
    x: '短袖T恤',
    y: 457
  },
  {
    x: '羽绒服',
    y: 302
  },
  {
    x: '鞋子',
    y: 298
  },
  {
    x: '裤装',
    y: 346
  },
  {
    x: '配饰',
    y: 276
  }
];
const salesTypeDataOffline = [
  {
    x: '外套',
    y: 142
  },
  {
    x: '卫衣',
    y: 286
  },
  {
    x: '短袖T恤',
    y: 364
  },
  {
    x: '羽绒服',
    y: 201
  },
  {
    x: '鞋子',
    y: 104
  },
  {
    x: '裤装',
    y: 243
  },
  {
    x: '配饰',
    y: 189
  }
];
const offlineData = [];
for (let i = 0; i < 10; i++) {
  offlineData.push({
    name:  `门店${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10
  })
}
const offlineChartData = [];
for (let i = 0; i<  20; i++) {
  offlineChartData.push({
    x: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 10,
    y2: Math.floor(Math.random() * 100) + 10
  })
}
//雷达图
const radarOriginData = [
  {
    name: '个人',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 5
  },
  {
    name: '团队',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: '部门',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

const radarData = [];
const radarTitleMap = {
  ref: '引用',
  koubei: '口碑',
  output: '产量',
  contribute: '贡献',
  hot: '热度'
};
radarOriginData.forEach(item  => {
  Object.keys(item).forEach(key => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key]
      })
    }
  })
});
export const getFakeChartData = {
  visitData,
  visitData2,
  salesData,
  searchData,
  offlineData,
  offlineChartData,
  salesTypeData,
  salesTypeDataOnline,
  salesTypeDataOffline,
  radarData,
};

export default {
  getFakeChartData,
};
