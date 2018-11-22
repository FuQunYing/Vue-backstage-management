<template>
  <div>
    <p>
      数据分析页
    </p>
  </div>
</template>

<script>
  import {
    Bar,
    ChartCard,
    MiniArea,
    MiniBar,
    MiniProgress,
    Pie
  } from "../../components/Charts";
  import {Trend} from "../../components/Trend";
  import {NumberInfo} from "../../components/NumberInfo";
  import { getTimeDistance} from "../../utils/utils";
  import numeral from 'numeral';
  import { mapState } from 'vuex';
  const topColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 6
  };
  const rankingListData = [];
  for (let i = 0; i < 8; i += 1) {
    rankingListData.push({
      title: `四丁目${i+1}号店`,
      total: 514514
    })
  }
  const columns = [
    {
      title: '排名',
      dataIndex: 'index',
      key: 'index'
    },
    {
      title: '搜索关键词',
      dataIndex:'keyword',
      key: 'keyword',
      scopedSlots: {
        customRender: 'keyword'
      },
    },
    {
      title: '用户数',
      dataIndex: 'count',
      key: 'count',
      sorter: (a, b) => a.count - b.count,
      className: 'alignRight'
    },
    {
      title: '周涨幅',
      dataIndex: 'range',
      key: 'range',
      sorter: (a,b) => a.range - b.range,
      scopedSlots: {
        customRender: 'range'
      },
      align: 'right'
    },
  ];

  export default {
    name: "Analysis",
    data() {
      return {
        topColResponsiveProps,
        columns,
        rankingListData,
        currentTabKey: '',
        rangePickerValue: getTimeDistance('year'),
        salesType: 'all',
        salesPieData:
          this.salesType === 'all' ?
            this.salesTypeData :
            this.salesType === 'online' ?
              this.salesTypeDataOnline :
              this.salesTypeDataOffline
      }
    },
    computed: mapState('chart', {
      loading: 'loading',
      visitData: 'visitData',
      visitData2: 'visitData2',
      salesData: 'salesData',
      searchData: 'searchData',
      offlineData: 'offlineData',
      offlineChartData: 'offlineChartData',
      salesTypeData: 'salesTypeData',
      salesTypeDataOnline: 'salesTypeDataOnline',
      salesTypeDataOffline: 'salesTypeDataOffline'
    }),
    created () {
      this.$store.dispatch('chart/fetch')
    },
    filters: {
      formatNum: function(value) {
        return numeral(value).format('0.0')
      }
    },
    methods: {
      isActive(type) {
        const value = getTimeDistance(type);
        if(!this.rangePickerValue[0] || !this.rangePickerValue[1]) {
          return;
        }
        if (this.rangePickerValue[0].isSame(value[0],'day') &&
            this.rangePickerValue[1].isSame(value[1], 'day')
        ) {
          return 'currentDate'
        }
      },
      selectDate(type) {
        this.rangePickerValue = getTimeDistance(type);
        this.$store.dispatch('chart/fetchSalesData');
      },
      handleChangeSalesType(e) {
        this.salesType = e.target.value;
      }
    },
    components: {
      Bar,
      ChartCard,
      MiniArea,
      MiniBar,
      MiniProgress,
      Pie,
      Trend,
      NumberInfo
    }
  }
</script>

<style scoped lang="less">
@import "./Analysis.less";
</style>
