<template>
  <div class="dashboard">
    <a-row :gutter="24">
      <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" :style="{marginBottom: '24px'}">
        <chart-card :borderd="false" :title="'总销售额'" :loading="loading" :tips="'指标说明'" :total="'51451424.00'">
          <template slot="content">
            <trend :flag="'up'" :style="{marginRight: '16px'}">
              周同比
              <span class="trendText">12%</span>
            </trend>
            <trend :flag="'down'">
              日环比
              <span class="trendText">10%</span>
            </trend>
          </template>
          <template slot="footer">
            <div class="field">
              <span>日均销售额</span>
              <span>￥123456</span>
            </div>
          </template>
        </chart-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" :style="{marginBottom: '24px'}">
        <chart-card :bordered="false" :title="'访问量'" :loading="loading" :tips="'指标说明'" :total="'8642'">
          <template slot="content">
            <mini-area :height="46" :data="visitData" :color="'#975fe4'"></mini-area>
          </template>
          <template slot="footer">
            <div class="field">
              <span>日访问量</span>
              <span>1234</span>
            </div>
          </template>
        </chart-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" :style="{marginBottom: '24px'}">
        <chart-card :bordered="false" :title="'支付笔数'" :loading="loading" :tips="'指标说明'" :total="'6,560'">
          <template slot="content">
            <mini-bar :height="100" :data="visitData"></mini-bar>
          </template>
          <template slot="footer">
            <div class="field">
              <span>转化率</span>
              <span>60%</span>
            </div>
          </template>
        </chart-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" :style="{marginBottom: '24px'}">
        <chart-card :bordered="false" :title="'运营活动效果'" :loading="loading" :tips="'指标说明'" :total="'78%'">
          <template slot="content">
            <mini-progress :percent="78" :strokeWidth="8" :target="80" :color="'#13C2C2'"></mini-progress>
          </template>
          <template slot="footer">
            <trend :flag="'up'" :style="{ marginRight: '16px' }">
              周同比
              <span class="trendText">12%</span>
            </trend>
            <trend :flag="'down'">
              日环比
              <span class="trendText">10%</span>
            </trend>
          </template>
        </chart-card>
      </a-col>
    </a-row>
    <a-card :loading="loading" :bordered="false" :bodyStyle="{padding: '0px'}">
      <div class="salesCard">
        <a-tabs :tab-bar-style="{'margin-bottom': '24px', 'padding-left': '16px'}" :size="'large'">
          <a-tab-pane tab="销售额" key="1">
            <a-row>
              <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="16">
                <div class="salesBar">
                  <Bar :height="295" :title="'销售额趋势'" :data="salesData"></Bar>
                </div>
              </a-col>
              <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
                <div class="salesRank">
                  <h4 class="rankingTitle">门店销售额排名</h4>
                  <ul class="rankingList">
                    <li v-for="(item, index) in rankingListData" :key="item.title">
                      <span :class="{'active': index < 3}">{{index + 1}}</span>
                      <span>{{item.title}}</span>
                      <span>{{item.total}}</span>
                    </li>
                  </ul>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="访问量" key="2">
            <a-row>
              <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="16">
                <div class="salesBar">
                  <Bar :height="295" :title="'访问量趋势'" :data="salesData"></Bar>
                </div>
              </a-col>
              <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8">
                <div class="salesRank">
                  <h4 class="rankingTitle">门店访问量排名</h4>
                  <ul class="rankingList">
                    <li v-for="(item, index) in rankingListData" :key="item.title">
                      <span :class="{'active': index < 3}">{{index+1}}</span>
                      <span>{{item.title}}</span>
                      <span>{{item.total | formatNum}}</span>
                    </li>
                  </ul>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
          <div class="salesExtraWrap" slot="tabBarExtraContent">
            <div class="salesExtra">
              <a :class="isActive('today')" @click="selectDate('today')">今日</a>
              <a :class="isActive('week')" @click="selectDate('week')">本周</a>
              <a :class="isActive('month')" @click="selectDate('month')">本月</a>
              <a :class="isActive('year')" @click="selectDate('year')">全年</a>
            </div>
            <a-range-picker :value="rangePickerValue" :change="rangePickerValue" style="width: 256px;" />
          </div>
        </a-tabs>
      </div>
    </a-card>
    <a-row :gutter="24">
      <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :loading="loading" :bordered="false" title="线上热门搜索" :style="{marginTop: '24px'}">
          <span class="iconGroup" slot="extra">
            <a-dropdown>
              <span class="ant-dropdown-link">
                <a-icon type="ellipsis"/>
              </span>
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="javascript:;">操作一</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">操作二</a>
                </a-menu-item>
            </a-menu>
            </a-dropdown>
          </span>
          <a-row :gutter="68">
            <a-col :sm="12" :xs="24" :style="{marginBottom: '24px'}">
              <number-info :gap="8" :total="12321 | formatNum" :status="'up'" :subTotal="'18'">
                <template slot="subTitle">
                  <span>搜索用户数</span>
                  <a-tooltip>
                    <template slot="title">指标文案</template>
                    <a-icon type="info-circle-o" />
                  </a-tooltip>
                </template>
              </number-info>
              <mini-area :line="true" :height="45" :data="visitData2"></mini-area>
            </a-col>
            <a-col :sm="12" :xs="24" :style="{marginBottom: '24px'}">
              <number-info :gap="8" :total="2.8" :status="'down'" :subTotal="26">
                <template slot="subTitle">
                  <span>人均搜索次数</span>
                  <a-tooltip>
                    <template slot="title">指标文案</template>
                    <a-icon type="info-circle-o" />
                  </a-tooltip>
                </template>
              </number-info>
              <mini-area :line="true" :height="45" :data="visitData2"></mini-area>
            </a-col>
          </a-row>
          <a-table :rowKey="record => record.index" size="small"
                   :columns="columns" :dataSource="searchData"
                   :pagination="{style: {marginBottom: '0px'},pageSize: 5}">
            <a href="/" slot="keyword" slot-scope="text">{{text}}</a>
            <template slot="range" slot-scope="text,record">
              <trend :flag="record.status == 1 ? 'down' : 'up'">
                <span class="trendText" :style="{ marginRight: '4px' }">
                  {{text}}%
                </span>
              </trend>
            </template>
          </a-table>
        </a-card>
      </a-col>
      <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :loading="loading" :bordered="false" title="销售额类别占比" class="salesCard" :style="{marginTop: '24px'}">
          <div class="salesCardExtra" slot="extra">
            <span class="iconGroup">
              <a-icon type="ellipsis" />
            </span>
            <div class="salesTypeRadio">
              <a-radio-group :value="salesType" @change="handleChangeSalesType">
                <a-radio-button value="all">全部渠道</a-radio-button>
                <a-radio-button value="online">线上</a-radio-button>
                <a-radio-button value="offline">门店</a-radio-button>
              </a-radio-group>
            </div>
          </div>
          <!--<h4 :style="{ marginTop: '8px', marginBottom: '32px' }">销售额</h4>-->
          <!-- TODO: Pie组件还没开始写 -->
           <pie :hasLegend="true"
                :subTitle="'销售额'"
                :total="''"
                :data="salesPieData"
                :valueFormat="'RMB'"
                :height="400"
                :lineWidth="4"></pie>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :loading="loading" :bordered="false" title="词云" class="salesCard" :style="{marginTop: '24px'}">
          <div class="salesCardExtra" slot="extra">
            <span class="iconGroup">
              <a-icon type="ellipsis"/>
            </span>
          </div>
          <word-cloud></word-cloud>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import {
    Bar,
    ChartCard,
    MiniArea,
    MiniBar,
    MiniProgress,
    Pie,
    WordCloud
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
      title: `四町目${i < 10 ? '0' + (i + 1) : i}号店`,
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
      NumberInfo,
      WordCloud
    }
  }
</script>

<style scoped lang="less">
@import "./Analysis.less";
</style>
