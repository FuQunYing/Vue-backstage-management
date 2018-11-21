<template>
  <div class="pieClassName" :style="style">
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip :showTitle="false"/>
      <v-axis/>
      <v-legend dataKey="item"/>
      <v-pie position="percent" color="item" :vStyle="pieStyle" :label="labelConfig"/>
      <v-coord type="theta" :radius="0.75" :innerRadius="0.6"/>
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
  const sourceData = [
    {item: '事例一', count: 40},
    {item: '事例二', count: 21},
    {item: '事例三', count: 17},
    {item: '事例四', count: 13},
    {item: '事例五', count: 9}
  ];
  const scale = [
    {
      dataKey: 'percent',
      min: 0,
      formatter: '.0%'
    }
  ];
  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'percent',
    field: 'count',
    dimension: 'item',
    as: 'percent'
  });
  const data = dv.rows;
  export default {
    name: "Pie",
    props: {
      valueFormat: {},
      subTitle: {},
      total: {},
      hasLegend: {
        default: false
      },
      className: {},
      style: {},
      forceFit: {
        default: true
      },
      percent: {default: 0},
      color: {},
      inner: {default: 0.75},
      animate: {default: true},
      colors: {},
      lineWidth: {default: 1}
    },
    data () {
      return {
        data,
        scale,
        height: 100,
        pieStyle: {
          stroke: '#fff',
          lineWidth: 1
        },
        labelConfig: [
          'percent',
          {
            formatter: (val, item) => {
              return item.point.item + ':' + val;
            }
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
@import "./index.less";
</style>
